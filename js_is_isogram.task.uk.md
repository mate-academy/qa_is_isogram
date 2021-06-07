Ізограма - це слово, у якому немає повторюваних літер, послідовних чи непослідовних.

Напиши тести для функції `isIsogram`, яка приймає рядок `word`, що містить лише літери, і перевіряє, чи є це слово ізограмою. Функція повертає `true`, якщо `word` є ізограмою, якщо ні - повертає `false`.

Примітки:
- порожній рядок вважається ізограмою;
- функція ігнорує регістр літер (`M` і `m` вважаються однаковими літерами).

Приклади:
```js
isIsogram('playgrounds') === true
isIsogram('look') === false
isIsogram('Adam') === false 
isIsogram('') === true
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)