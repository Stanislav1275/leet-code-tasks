# Задача LeetCode: Сумма двух чисел[TwoSum]

## Описание задачи

Дан массив целых чисел `nums` и целое число `target`. Необходимо вернуть индексы двух чисел в массиве, сумма которых
равна `target`.

Вы можете предположить, что каждый входной набор данных имеет только одно решение, и вы не можете использовать один и
тот же элемент дважды.

Ответ можно вернуть в любом порядке.

## Примеры

- **Пример 1:**
    - Ввод: `nums = [2, 7, 11, 15]`, `target = 9`
    - Вывод: `[0, 1]`
    - Объяснение: Поскольку `nums[0] + nums[1] == 9`, мы возвращаем `[0, 1]`.

- **Пример 2:**
    - Ввод: `nums = [3, 2, 4]`, `target = 6`
    - Вывод: `[1, 2]`

- **Пример 3:**
    - Ввод: `nums = [3, 3]`, `target = 6`
    - Вывод: `[0, 1]`
