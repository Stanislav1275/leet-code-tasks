import { BYTE_SIZE } from "./defaults";

const CHANNEL_COUNT = ["r", "g", "b", "a"].length;
//общее колво байтов для хранения n байтов rgb[]
export const countBytesForNRgbBytes = (n: number): number =>
  Math.floor((n * BYTE_SIZE * CHANNEL_COUNT) / (CHANNEL_COUNT - 1));

export const isAlphaByte = (_: unknown, i: number): boolean =>
  !((i + 1) % CHANNEL_COUNT);
export const isRgbByte = (_: unknown, i: number): boolean =>
  !!((i + 1) % CHANNEL_COUNT);

export const recombineRgbAndAlpha = (rgb: number[], alpha: number[]): Buffer =>
  Buffer.from(
    Array(rgb.length + alpha.length)
      .fill(null)
      .map((_, i) =>
        (i + 1) % CHANNEL_COUNT
          ? rgb[i - Math.floor(i / CHANNEL_COUNT)]
          : alpha[i % CHANNEL_COUNT],
      ),
  );

export const splitRgbAndAlpha = (data: number[]): [number[], number[]] => {
  const rgbBytes = data.filter(isRgbByte);
  const alphaBytes = data.filter(isAlphaByte);
  return [rgbBytes, alphaBytes];
};
