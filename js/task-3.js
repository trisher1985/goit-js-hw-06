'use strict';

// Задача 3. Профіль гравця
// Виконуй це завдання у файлі task-3.js
// Об’єкт profile описує профіль користувача на ігровій платформі. 
// У його властивостях зберігається ім’я профілю username та кількість
//  активних годин playTime, проведених у грі.

// const profile = {
//     username: "Jacob",
//   playTime: 300,
// };

// Доповни об’єкт profile методами для роботи з його властивостями.

// Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
// Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// Залиш цей код для перевірки ментором.

// На що буде звертати увагу ментор при перевірці:
// Оголошена змінна profile
// Значення змінної profile — це об’єкт з властивостями username, playTime, getInfo, changeUsername і updatePlayTime
// Значення властивості getInfo — це функція
// Значення властивості changeUsername — це функція
// Значення властивості updatePlayTime — це функція
// Для звернення до властивостей об’єкта в його методах використовується this

const profile = {
    username: "Jacob",
    playTime: 300,

    // зміна імені користувача
    changeUsername(newName) {
        this.username = newName;
    },

    // оновлення кількості ігрових годин
    updatePlayTime(hours) {
        this.playTime += hours;
    },

    // просте отримання інформації про профіль
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

// Перевірка роботи методів
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
