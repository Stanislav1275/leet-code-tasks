# Задача LeetCode: Проверка на Анаграмму

## Описание задачи

Даны две строки `s` и `t`. Верните `true`, если `t` является анаграммой `s`, и `false` в противном случае.

Анаграмма - это слово или фраза, образованная перестановкой букв другого слова или фразы, обычно с использованием всех
исходных букв ровно один раз.

## Примеры

- **Пример 1:**
    - Ввод: `s = "anagram", t = "nagaram"`
    - Вывод: `true`
    - Объяснение: "nagaram" - это анаграмма "anagram".

- **Пример 2:**
    - Ввод: `s = "rat", t = "car"`
    - Вывод: `false`
    - Объяснение: "car" не является анаграммой "rat".

## Ограничения

1 <= s.length, t.length <= 5 * 10^4
`s` и `t` состоят из букв английского алфавита в нижнем регистре.

## Подход к решению

Для проверки, является ли `t` анаграммой `s`, можно использовать следующий подход:

1. Создать массив или объект для подсчета количества каждой буквы в строке `s`.
2. Затем, для каждой буквы в строке `t`, уменьшать соответствующий счетчик в созданном массиве или объекте.
3. Если все счетчики становятся равными нулю, то `t` является анаграммой `s`.

## Сложность анализа

- Временная сложность: O(n), где n - длина строк `s` и `t`.
- Пространственная сложность: O(1), так как размер массива или объекта для подсчета букв ограничен количеством букв в
  английском алфавите (константный размер).