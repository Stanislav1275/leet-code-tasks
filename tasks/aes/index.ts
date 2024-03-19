import {md5} from "js-md5";
import {CONSTS, RCON, S_BOX} from "./consts";
import {UTILS} from "./utils";


export const useAes = (key: string) => {
    const md5Key = md5(key);
    let roundKeys = ROUND_ALG.keyExpansion(md5Key);
    const encrypt = (word: string) => {
        const blocks = UTILS.msgBlocksDesctruct4x4(word);
        blocks.forEach(block => {
            ROUND_ALG.addRoundKey(block, roundKeys[0])
        })

        for (let round = 1; round <= CONSTS.Nr/*usually - 10*/; round++) {
            const roundKey = roundKeys[round];
            for (const block of blocks) {
                ROUND_ALG.subBytes(block);
                ROUND_ALG.shiftRows(block);
                ROUND_ALG.mixColumns2(block);
                ROUND_ALG.addRoundKey(block, roundKey);
            }
        }
        blocks.forEach(block => {
            ROUND_ALG.subBytes(block);
            ROUND_ALG.shiftRows(block);
            ROUND_ALG.addRoundKey(block, roundKeys[CONSTS.Nr]);
        })
        let str = '';
        blocks.forEach(block => {
            UTILS.DO_SOMETHING(block, (cur) => {
                str += String.fromCharCode(cur)
            })
        })

        return str;
    };
    const decrypt = (word: string) => {

    };

    return {encrypt, decrypt};
}

namespace ROUND_ALG {
    export const shiftRows = (block: number[][]) => {
        UTILS.DO_SOMETHING(block, (cur, i, j) => {
            if (!block[i][0]) return;
            for (let j = 0; j < 4 - i; j++) {
                [block[i][j], block[i][j + i]] = [block[i][j + i], block[i][j]]
            }
        })
        // for (let i = 0; i < 4; i++) {
        //
        // }
    }
    export const addRoundKey = (block: number[][], roundKey: number[]): void => {
        UTILS.DO_SOMETHING(block, (cur, i, j) => {
            block[i][j] ^= roundKey[i][j];
        })
    }
    export const keyExpansion = (key: string): number[][] => {
        // Number of rounds (10 for AES-128)
        // Number of columns (32-bit words) comprising the State (4 for AES)
        const expandedKeySize = (CONSTS.Nr + 1) * CONSTS.Nb;
        const w: number[][] = new Array(expandedKeySize);

        for (let i = 0; i < CONSTS.Nk; i++) {
            w[i] = [key.charCodeAt(4 * i), key.charCodeAt(4 * i + 1), key.charCodeAt(4 * i + 2), key.charCodeAt(4 * i + 3)];
        }

        for (let i = CONSTS.Nk; i < expandedKeySize; i++) {
            let temp = w[i - 1];
            if (i % CONSTS.Nk === 0) {
                temp = UTILS.subWord(UTILS.rotWord(temp));
                temp[0] ^= RCON[i / CONSTS.Nk];
            } else if (CONSTS.Nk > 6 && i % CONSTS.Nk === 4) {
                temp = UTILS.subWord(temp);
            }
            w[i] = new Array(4);
            for (let j = 0; j < 4; j++) {
                w[i][j] = w[i - CONSTS.Nk][j] ^ temp[j];
            }
        }

        return w;
    }


    export const subBytes = (block: number[][], decrypt?: boolean): void => {
        const sbox = decrypt ? S_BOX.S_BOX_D : S_BOX.S_BOX_E;
        UTILS.DO_SOMETHING(block, (cur, i, j) => {
            if (block[i][j] !== 0) {
                block[i][j] = sbox[block[i][j]];
            }
        })

    }
    export const mixColumns2 = (state: number[][]) => {
        let r, c, a, b;

        for (c = 0; c < CONSTS.Nb; c++) {
            a = new Array(4);
            b = new Array(4);

            for (r = 0; r < 4; r++) {
                a[r] = state[r][c];
                b[r] = state[r][c] & 0x80 ? state[r][c] << 1 ^ 0x11b : state[r][c] << 1;
            }

            state[0][c] = b[0] ^ a[3] ^ a[2] ^ b[1] ^ a[1];
            state[1][c] = b[1] ^ a[0] ^ a[3] ^ b[2] ^ a[2];
            state[2][c] = b[2] ^ a[1] ^ a[0] ^ b[3] ^ a[3];
            state[3][c] = b[3] ^ a[2] ^ a[1] ^ b[0] ^ a[0];
        }
    }
    //GF(2^8)
    export const mixColumns = (block: number[][], decrypt?: boolean) => {
        if (!decrypt) {
            UTILS.DO_SOMETHING(block, (element, i, j) => {
                block[0][j] = UTILS.MULTIPLY(0x02, block[0][j]) ^ UTILS.MULTIPLY(0x03, block[1][j]) ^ block[2][j] ^ block[3][j];
                block[1][j] = block[0][j] ^ UTILS.MULTIPLY(0x02, block[1][j]) ^ UTILS.MULTIPLY(0x03, block[2][j]) ^ block[3][j];
                block[2][j] = block[0][j] ^ block[1][j] ^ UTILS.MULTIPLY(0x02, block[2][j]) ^ UTILS.MULTIPLY(0x03, block[3][j]);
                block[3][j] = UTILS.MULTIPLY(0x03, block[0][j]) ^ block[1][j] ^ block[2][j] ^ UTILS.MULTIPLY(0x02, block[3][j]);
            })
            return;
        }
        UTILS.DO_SOMETHING(block, (cur, i, j) => {
            block[0][j] = (UTILS.MULTIPLY(0x0E, block[0][j]) ^ UTILS.MULTIPLY(0x0B, block[1][j]) ^ UTILS.MULTIPLY(0x0D, block[2][j]) ^ UTILS.MULTIPLY(0x09, block[3][j]));
            block[1][j] = (UTILS.MULTIPLY(0x09, block[0][j]) ^ UTILS.MULTIPLY(0x0E, block[1][j]) ^ UTILS.MULTIPLY(0x0B, block[2][j]) ^ UTILS.MULTIPLY(0x0D, block[3][j]));
            block[2][j] = (UTILS.MULTIPLY(0x0D, block[0][j]) ^ UTILS.MULTIPLY(0x09, block[1][j]) ^ UTILS.MULTIPLY(0x0E, block[2][j]) ^ UTILS.MULTIPLY(0x0B, block[3][j]));
            block[3][j] = (UTILS.MULTIPLY(0x0B, block[0][j]) ^ UTILS.MULTIPLY(0x0D, block[1][j]) ^ UTILS.MULTIPLY(0x09, block[2][j]) ^ UTILS.MULTIPLY(0x0E, block[3][j]));
        })

    }
}

