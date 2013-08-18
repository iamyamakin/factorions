/*jslint plusplus: true, sloppy: true */
/*global document */
/*
    Task:
        Write a javascript function for displaying numbers, where a number is equals the sum of the factorials of its decimal digits.  
        Here's an example of displaying:
        4! + 0! + 5! + 8! + 5! = 40585
    Solutions:
        We must find the factorions http://en.wikipedia.org/wiki/Factorion
        Upper bound is 2540160.
        I'm used brute-force search to find the exact set of solutions.
*/

function memoizer(memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== "number") {
            memo[n] = formula(recur, n);
            result = memo[n];
        }
        return result;
    };
    return recur;
}

var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n - 1);
});

function sumFactorialsDigits(n) {
    var digits = n.toString().split(''),
        digitsLen = digits.length,
        sum = 0;
    while (digitsLen--) {
        sum += factorial(digits[digitsLen]);
    }
    return sum;
}

function factorions() {
    var n = 2540160, // upper bound
        factorionsList = [];
    do {
        if (sumFactorialsDigits(n) === n) {factorionsList.push(n); }
    } while (n--);
    return factorionsList;
}

function appendDataToElement(appendToElement, data) {
    var doc = document,
        ul = doc.createElement("ul"),
        li,
        i = data.length;
    while (i--) {
        li = doc.createElement("li");
        li.appendChild(doc.createTextNode(data[i]));
        ul.appendChild(li);
    }
    appendToElement.appendChild(ul);
}

var fragment = document.createDocumentFragment();

appendDataToElement(fragment, factorions());
document.getElementById("answer").appendChild(fragment);