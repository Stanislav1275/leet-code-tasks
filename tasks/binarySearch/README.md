# Задача LeetCode: Бинарный Поиск[Binary Search

]

## Описание задачи

Учитывая массив целых чисел nums, отсортированный в порядке возрастания, и целочисленный целевой объект, напишите
функцию для поиска целевого значения в nums. Если цель существует, то верните ее индекс. В противном случае верните
значение -1.

Вы должны написать алгоритм со сложностью выполнения O(log n)

## Примеры

- **Пример 1:**
    - Ввод: `nums = [-1,0,3,5,9,12], target = 9`
    - Вывод: `4`
    - Объяснение: 9 exists in nums and its index is 4

- **Пример 2:**
    - Ввод: `nums = [-1,0,3,5,9,12], target = 2`
    - Вывод: `-1`
    - Объяснение: 2 does not exist in nums so return -1

## Ограничения

- 1 <= nums.length <= 104
- -104 < nums[i], target < 104
- Все целые числа в nums уникальны
- nums is sorted in ascending order

## Подход к решению

лучшее объяснение https://leetcode.com/problems/binary-search/solutions/423162/binary-search-101/

