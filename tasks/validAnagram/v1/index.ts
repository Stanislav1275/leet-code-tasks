function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const lettersS = new Map<string, number>;
    const lettersT = new Map<string, number>;

    for (let sym of s) {//anagram
        const s1: number = lettersS.get(sym);
        if (!s1) {
            lettersS.set(sym, 1);
        } else {
            lettersS.set(sym, s1 + 1);
        }
    }
    for (let sym of t) {
        const s1: number = lettersT.get(sym);
        if (!s1) {
            lettersT.set(sym, 1);
        } else {
            lettersT.set(sym, s1 + 1);
        }
    }
    for (let [key, val] of lettersS.entries()) {
        if (val !== lettersT.get(key)) {
            return false;
        }
    }

    return true;
};


export default isAnagram;