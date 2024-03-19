import {alfavit_RU} from "../const/ru";
import {alfavit_EU} from "../const/en";

const common = [...alfavit_EU, ...alfavit_RU];
const alp = new Map<string, { encrypted?: string, decrypted?: string } | null>();
common.forEach((lex) => {
    alp.set(lex, null);
})
export const useCezarCrypt = (offset: number = 1) => {
    const lexicalMapWithOffset = alp;
    common.forEach((lex, pos) => {
        const posWithOffset = pos + offset;
        const finishIndex = posWithOffset >= common.length ? (posWithOffset % common.length) : posWithOffset
        const valByLext = lexicalMapWithOffset.get(lex);
        const valByDe = lexicalMapWithOffset.get(common[finishIndex]);
        lexicalMapWithOffset.set(lex, {...valByLext, encrypted: common[finishIndex]})
        lexicalMapWithOffset.set(common[finishIndex], {...valByDe, decrypted: lex})
    })
    const crypt = (word: string) => {
        return word.toUpperCase().split('').reduce((acc, cur) => {
            return lexicalMapWithOffset.get(cur).encrypted + acc;
        }, '')
    }
    const decrypt = (word: string) => {
        return word.toUpperCase().split('').reduce((acc, cur) => {
            return lexicalMapWithOffset.get(cur).decrypted + acc;
        }, '')
    }
    return {crypt, decrypt}
}
