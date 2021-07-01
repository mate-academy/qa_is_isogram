An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Write a tests for the function `isIsogram` that accepts a string `word` that contains only letters and checks whether this word is an isogram. Function returns `true` if `word` is an isogram, otherwise, return `false`.

Notes:
- the empty string is an isogram;
- function not case sensitive (`M` and `m` are considered the same letter).

Examples:
```js
isIsogram('flatron') === true
isIsogram('look') === false
isIsogram('Adam') === false
isIsogram('') === true
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)