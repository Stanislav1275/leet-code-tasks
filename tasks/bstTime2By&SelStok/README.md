# Задача LeetCode: Лучшее время для покупки и продажи акций[Best Time to Buy and Sell Stock

]

## Описание задачи

Дан массив `prices`, где `prices[i]` представляет собой цену данной акции в i-й день.

Вы хотите максимизировать свою прибыль, выбрав один день для покупки акции и другой день в будущем для продажи этой
акции.

Верните максимальную прибыль, которую вы можете получить от этой сделки. Если вы не можете получить никакой прибыли,
верните 0.

## Примеры

- **Пример 1:**
    - Ввод: `prices = [7, 1, 5, 3, 6, 4]`
    - Вывод: `5`
    - Объяснение: Купите во второй день (цена = 1) и продайте в пятый день (цена = 6), прибыль = 6-1 = 5. Обратите
      внимание, что покупка во второй день и продажа в первый день не допускается, так как вы должны купить перед
      продажей.

- **Пример 2:**
    - Ввод: `prices = [7, 6, 4, 3, 1]`
    - Вывод: `0`
    - Объяснение: В этом случае никакие сделки не производятся, и максимальная прибыль = 0.

## Ограничения

1 <= prices.length <= 105
0 <= prices[i] <= 104

## Подход к решению

можно как в первом варианте - брать по два - но это не оптимальный путь,
совершенно не к месту брал по два элемента, хотя всё работает
оптимальный путь - жадный алгоритм, брать по пути минимумы, сравнивать разницу между текущим элементом и минимумом

-

## Сложность алгоритма

- Временная сложность: O(n), где n - длина массива `prices`.
- Пространственная сложность: O(1), так как используется константное количество дополнительной памяти.

