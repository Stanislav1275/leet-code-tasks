import { PNG } from "pngjs";
import { encrypt as base_encrypt, getShasumData } from "./encryption";
import { BYTE_SIZE, LENGTH_BYTES, SHASUM_BYTES } from "./defaults";

import {
  countBytesForNRgbBytes,
  recombineRgbAndAlpha,
  splitRgbAndAlpha,
} from "./png";

const getLengthData = (message: string): Buffer => {
  const lengthHex = message.length.toString(16);
  const lengthBuffer = Buffer.from(
    lengthHex.length % 2 ? `0${lengthHex}` : lengthHex,
    "hex",
  );
  const pad = Buffer.alloc(LENGTH_BYTES - lengthBuffer.length);
  return Buffer.concat([pad, lengthBuffer], LENGTH_BYTES);
};

const getBit = (data: Array<number>) => (i) => {
  const byteIndex = Math.floor(i / BYTE_SIZE);
  const bitIndex = i % BYTE_SIZE;

  const byte = data[byteIndex];
  const shiftDistance = BYTE_SIZE - 1 - bitIndex;
  return (byte >> shiftDistance) % 2;
};

const addDataToByte = (data: Array<number>) => (byte, i) =>
  ((byte >> 1) << 1) | getBit(data)(i);

const embedData = ([data, bed]) => bed.map(addDataToByte(data));

const store = (imageData, message: string) => {
  const bytesAvailable = imageData.length;
  const bytesToStore = LENGTH_BYTES + SHASUM_BYTES + message.length;
  const bytesRequired = countBytesForNRgbBytes(bytesToStore);

  if (bytesAvailable < bytesRequired)
    throw new Error("Размер изображения не может быть меньше сообщения");

  const lengthData = getLengthData(message);
  const shasumData = getShasumData(message);

  const bytesToUse = imageData.slice(0, bytesRequired);
  const bytesToLeave = imageData.slice(bytesRequired);

  const [rgb, alpha] = splitRgbAndAlpha(bytesToUse);

  const lengthDataSize = LENGTH_BYTES * BYTE_SIZE;
  const shasumDataSize = SHASUM_BYTES * BYTE_SIZE;

  const bytesToUseWithLengthData = rgb.slice(0, lengthDataSize);
  const bytesToUseWithShasumData = rgb.slice(
    lengthDataSize,
    lengthDataSize + shasumDataSize,
  );
  const bytesToUseWithMessageData = rgb.slice(lengthDataSize + shasumDataSize);

  const embeddedData = Buffer.concat(
    [
      [lengthData, bytesToUseWithLengthData],
      [shasumData, bytesToUseWithShasumData],
      [message, bytesToUseWithMessageData],
    ].map(embedData),
    rgb.length,
  );

  const recombined = recombineRgbAndAlpha(embeddedData, alpha);
  return Buffer.concat([recombined, bytesToLeave], bytesAvailable);
};

export const encrypt =
  (password: string) => (image, message: string, encoding?: BufferEncoding) => {
    const messageBuffer = Buffer.isBuffer(message)
      ? message
      : Buffer.from(message, encoding);
    const secretBuffer = password
      ? base_encrypt(message, password)
      : messageBuffer;

    const png = PNG.sync.read(image);
    //@ts-ignore
    const data = store(png.data, secretBuffer);
    const adjustedPng = Object.assign({}, png, { data });

    return PNG.sync.write(adjustedPng);
  };
