# Задача LeetCode: Инвертирование Бинарного Дерева[Invert Binary Tree]

## Описание задачи

Дан корень бинарного дерева, нужно инвертировать это дерево и вернуть его корень.

## Примеры

- **Пример 1:**
- Ввод: `root = [4,2,7,1,3,6,9]`
- Вывод: `[4,7,2,9,6,3,1]`
- ![схема](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
- **Пример 2:**
    - Ввод: `root = [2,1,3]`
    - Вывод: `[2,3,1]`
      ![схема](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)


- **Пример 3:**
    - Ввод: `root = []`
    - Вывод: `[]`
    - Объяснение: Для пустого дерева инвертирование не требуется.

## Ограничения

Количество узлов в дереве находится в диапазоне [0, 100].
Значения узлов находятся в диапазоне [-100, 100].

## Подход к решению

Для инвертирования бинарного дерева можно использовать рекурсивный алгоритм. Для каждого узла, меняем местами его левое
и правое поддеревья.

## Сложность

- Временная сложность: O(n), где n - количество узлов в дереве.
- Пространственная сложность: O(h), где h - высота дерева.