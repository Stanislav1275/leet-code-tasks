function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const proto = image[sr][sc];
    (function dsf(i, j) {
        if (i < 0 || sc < 0 || i > image.length - 1 || sc > image[0].length - 1 || image[i][j] === color || image[i][j] !== proto) {
            return;
        }
        image[i][j] = color;
        dsf(i + 1, j);
        dsf(i - 1, j);
        dsf(i, j + 1);
        dsf(i, j - 1);
    })(sr, sc);
    return image;
}

//-1, 0, 3, 5, 9, 12

export default floodFill;