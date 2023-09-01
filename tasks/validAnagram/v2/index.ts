function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const letters = new Map<string, number>;

    for (let sym of s) {//anagram
        const s1: number = letters.get(sym);
        if (!s1) {
            letters.set(sym, 1);
        } else {
            letters.set(sym, s1 + 1);
        }
    }
    for (let sym of t) {
        const s1: number = letters.get(sym);
        if (!isNaN(+s1) && s1 < 0) {
            return false;
        }
        if (!s1 && s1 !== 0) return false;
        letters.set(sym, s1 - 1);
    }
    for (let val of letters.values()) {
        if (val !== 0) return false;
    }
    return true;
};


export default isAnagram;