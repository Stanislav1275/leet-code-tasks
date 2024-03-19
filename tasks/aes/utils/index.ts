import {RCON, S_BOX} from "../consts";
//xyio 95 95 95
//xyio 95 95 95
//xyio 0 0 0
//xyio 0 0 0
//xyio 0 0 0
export namespace UTILS {
    export const msgBlocksDesctruct4x4 = (word: string) => {
        const encoder = new TextEncoder();
        const bytesArray = encoder.encode(word);
        const len = Math.ceil(bytesArray.length / 16);
        const blocks: Array<Array<Array<number>>> = new Array(len);
        for (let i = 0; i < len; i++) {
            const matrix: Array<Array<number>> = [];
            for (let k = 0, bytesArrayIndex = 16 * i; k < 4; k++) {
                const str = [...new Array(4).fill(0)]
                matrix.push(str);
                for (let j = 0; j < 4 && bytesArrayIndex < bytesArray.length; j++, bytesArrayIndex++) {
                    matrix[k][j] = bytesArray[bytesArrayIndex];
                }
            }
            blocks[i] = matrix;
        }
        return blocks;
    }

    export function subWord(word: number[]) {
        for (let i = 0; i < 4; i++) {
            word[i] = S_BOX.S_BOX_E[word[i]];
        }
        return word;
    }

    export function keyScheduleWord(word: number[], round: number) {
        let temp = rotWord(word);
        temp = subWord(temp);
        temp[0] ^= RCON[round];
        return temp;
    }

    export const rotWord = (word: number[]) => {
        let temp = word[0];
        for (let i = 0; i < 3; i++) {
            word[i] = word[i + 1];
        }
        word[3] = temp;
        return word;
    }
    export const MULTIPLY = (a: number, b: number) => {
        let result = 0;
        while (a != 0) {
            if ((a & 1) != 0) { //четность
                result ^= b;
            }
            let hiBitSet: boolean = (b & 0x80) != 0;
            b <<= 1;
            if (hiBitSet) {
                b ^= 0x1B;
            }
            a >>= 1;
        }
        return result;
    }
    export const DO_SOMETHING = (block: number[][], ...callbacks: ((cur: number, i: number, j: number) => void)[]) => {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                callbacks.forEach(callback => {
                    callback(block[i][j], i, j);
                })
            }
        }
    }

}
