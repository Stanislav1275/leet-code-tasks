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
        if (opened === "(" && closed === ")") {
            return true;
        } else if (opened === "[" && closed === "]") {
            return true;
        } else if (opened === "{" && closed === "}") {
            return true;
        }
        return false;

    };
    const stack = [];
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
            stack.push(curSym);
            if (isPair(stack[stack.length - 2], stack[stack.length - 1])) {
                stack.pop();
                stack.pop();
            }
        }
    }
    return stack.length === 0;

}

export default isValid;
