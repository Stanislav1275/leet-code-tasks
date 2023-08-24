function isValid(s: string): boolean {

    if ((s.length % 2) !== 0) {
        return false;
    }
    const openDict = new Set<string>([
        "(",
        "{",
        "[",
    ]);
    const closeDict = new Set<string>([
        ")",
        "}",
        "]",
    ]);

    const isPair = (opened: string, closed: string) => {
        if (!openDict.has(opened) || !closeDict.has(closed)) {
            return false;
        }
        return (
            (opened === "(" && closed === ")") ||
            (opened === "[" && closed === "]") ||
            (opened === "{" && closed === "}")
        );

    };
    const stack: string[] = [];
    if (closeDict.has(s.charAt(0))) {
        return false;
    }
    // optimisation
    const offSet = 0;

    for (let i = offSet; i < s.length; i++) {
        const curSym = s.charAt(i);

        const nextSym = s.charAt(i + 1);
        if (closeDict.has(curSym)) {
            if (!(stack.length)) {
                return false;
            }
        }
        if (isPair(curSym, nextSym)) {
            i++;
        } else {
            if (closeDict.has(curSym)) {
                const pop = stack.pop();
                if (!isPair(pop, curSym)) {
                    return false;
                } else {
                    continue;
                }
            }
            stack.push(curSym);
        }
    }
    return stack.length === 0;
}

export default isValid;
