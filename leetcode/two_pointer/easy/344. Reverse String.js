// https://leetcode.com/problems/reverse-string/description/

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// First solution:
var reverseString = function (strings) {
    let left = 0
    let right = strings.length - 1

    while (left < right) {
        [strings[left], strings[right]] = [strings[right], strings[left]]
        left++
        right--
    }
};

// Second solution:
var reverseString = function (strings) {
    function reverse(left, right) {
        if (left < right) {
            [strings[left], strings[right]] = [strings[right], strings[left]]
            reverse(left + 1, right - 1)
        }
    }

    reverse(0, strings.length - 1)
};

// Third solution:
var reverseString = function (strings) {
    const stack = []

    for (let string of strings) {
        stack.push(string)
    }

    let pointer = 0
    while (stack.length) {
        strings[pointer] = stack.pop()
        pointer++
    }
};
