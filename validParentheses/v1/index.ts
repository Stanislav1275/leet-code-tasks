function isValid(s: string): boolean {
    if (s.length < 2) {
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
    let offSet = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const curSym = s.charAt(i);
        const nextSym = s.charAt(i + 1);
        if (isPair(curSym, nextSym)) {
            offSet += 2;
            i++;
        } else {
            break;
        }

    }
    for (let i = offSet; i < s.length; i++) {
        const curSym = s.charAt(i);

        const nextSym = s.charAt(i + 1);
        if (isPair(curSym, nextSym)) {
            i++;
        } else {
            stack.push(curSym);
            if (isPair(stack[stack.length - 2], stack[stack.length - 1])) {// проверка двух последних элементов на пару
                stack.pop();
                stack.pop();
            }
        }
    }
    return stack.length === 0;

}

export default isValid;
