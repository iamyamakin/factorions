# factorions


## Задача
Напиcать на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа: 
4! + 0! + 5! + 8! + 5! = 40585.

## Решение ##
Требуется найти [факторионы](http://en.wikipedia.org/wiki/Factorion).
Функция [factorions()](script.js) ищет такие числа методом полного перебора.

###Функции###
* memoizer(memo, formula) — отвечает за мемоизацию;
* factorial(n) — вычисляет факториал числа;
* sumFactorialsDigits(n) — суммирует факториалы цифр числа;
* factorions() — находит факторионы;
* appendDataToElement(appendToElement, data) — добавляет данные в элемент в виде ненумерованного списка.
