// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...
// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan
// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];
// let maxNumber = numbers[0]; 
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//     }
// }
// console.log(maxNumber);

// ......................................................................................................................................

// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish
// const fruites = ["Olma", "Nok", "Anor", "Chegara"];
// let long = fruites[0];
// for (maxLong of fruites) {
//     if (maxLong.length > long.length) {
//         long = maxLong;
//     }
// }
// let letterBeforeLast = long[long.length - 2]
// console.log(`eng uzun so'z - ${long}`);
// console.log(`eng uzun so'zning oxirgisidan bitta oldingi harf - ${letterBeforeLast}`);

// ......................................................................................................................................

// Masala - 3

// Arraydagi barcha stringning lengthini topish
// const fruites = ["Olma", "anor", "Nok"];
// let arrLength = fruites.length;
// console.log(`fruites arrayidagi lengthlar soni - ${arrLength}`);

// ......................................................................................................................................

// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element % 2 == 0 ) {
//      let   couple = element / 2;
//      newNumbers.push(couple);
//     }
// }
// console.log(newNumbers);

// ......................................................................................................................................

// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

// const fruites = ["olma", "o'rik", "Nok", "avacado"];
// let newFruits = [];
// // let bigLetter = 0;
// // let smallLetter = 0;
// for (let i = 0; i < fruites.length; i++) {
//     const element = fruites[i];
//     if (element[0] === element[0].toUpperCase()) {
//         newFruits.push(element[0].toLowerCase() + element.substring(1).toUpperCase());
//     } else {
//         newFruits.push(element[0].toUpperCase() + element.substring(1).toLowerCase());
//     }
// }
// console.log(newFruits);

// ......................................................................................................................................

// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// example: olma => olma olma olma
// const word = prompt("soz kiriting: ");
// let result = "";
// for (let i = 0; i < 3; i++) {
//     result += word + " ";
// }
// console.log(result); 

// ......................................................................................................................................

// Masala - 7
// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// example: const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"],];  => BXK
// const fruitsArray = [["Olma"], ["Bexi"], ["Anor"], ["Xurmo"], ["GIlos"], ["Kiwi"], ["Banan"]];
// function firstElements(array) {
//     let result = "";
//     for (let i = 1; i < array.length; i += 2) {
//         if (array[i] && typeof array[i][0] === 'string') {
//             result += array[i][0][0];
//         }
//     }
//     return result;
// }

// console.log(firstElements(fruitsArray)); 


