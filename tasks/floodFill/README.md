# Задача LeetCode: Flood Fill

## Описание задачи

Дано изображение, представленное целочисленной сеткой размером m x n, где `image[i][j]` представляет значение пикселя
изображения.

Также даны три целых числа: `sr`, `sc` и `color`. Вам нужно выполнить заполнение (flood fill) изображения, начиная с
пикселя `image[sr][sc]`.

Чтобы выполнить заполнение, рассматривайте стартовый пиксель, а также любые пиксели, соединенные с ним в 4 направлениях
и имеющие тот же цвет, что и стартовый пиксель, и так далее. Замените цвет всех упомянутых пикселей на заданный цвет.

Верните измененное изображение после выполнения заполнения.

## Примеры

- **Пример 1:**
  ![схема](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)
    - Ввод:
        - `image = [[1,1,1],[1,1,0],[1,0,1]]`
        - `sr = 1`
        - `sc = 1`
        - `color = 2`
    - Вывод:
        - `[[2,2,2],[2,2,0],[2,0,1]]`
    - Объяснение: Из центра изображения с позицией `(sr, sc) = (1, 1)` (т.е. красного пикселя) все пиксели, соединенные
      путем одноцветного пути с начальным пикселем (т.е. синие пиксели), окрашиваются в новый цвет. Обратите внимание,
      что нижний угол не окрашен в 2, так как он не соединен с начальным пикселем по 4 направлениям.

- **Пример 2:**
    - Ввод:
        - `image = [[0,0,0],[0,0,0]]`
        - `sr = 0`
        - `sc = 0`
        - `color = 0`
    - Вывод:
        - `[[0,0,0],[0,0,0]]`
    - Объяснение: Начальный пиксель уже имеет цвет 0, поэтому изображение не меняется.

## Ограничения

- `m == image.length`
- `n == image[i].length`
- `1 <= m, n <= 50`
- `0 <= image[i][j], color < 216`
- `0 <= sr < m`
- `0 <= sc < n`

## Подход к решению

Идти рекурсивно в 4 направлениях и менять цвет, при изменении направления учесть выход за границы, выход из тика
рекурсия при нарушении границ
Примечание: color служит для текущего цвета ячейки, нужна функция-обертка для сохранения цвета опорной ячейки, так как
сама опорная ячейка будет служить хранилищем для текущей ячейки

## Сложность анализ

- Временная сложность: O(m * n), где m - количество строк, n - количество столбцов в изображении.
- Пространственная сложность: O(m * n) для рекурсивного подхода и O(m + n) для итеративного подхода.