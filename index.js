const fetchUserFromServer = (username) => {
  return new Promise((resolve, reject) => {
    // console.log(Fetching data for ${username});

    setTimeout(() => {
      const isSuccess = true;
      //   const isSuccess = false;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango");
// .then((user) => console.log(user))
// .catch((error) => console.error(error));

//   Випадковий проміс
//  Створіть функцію randomPromise, яка повертає проміс,
// який випадковим чином виконується або відхиляється.
//  Використайте метод then, щоб обробити виконання проміса та
// вивести повідомлення "Проміс виконано".
//  Використайте метод catch, щоб обробити помилку, якщо
// проміс відхиляється, і вивести повідомлення "Помилка проміса".
//  Використайте метод finally для виведення повідомлення
// "Робота з промісом завершена" незалежно від того, чи було виконання успішним, чи виникла помилка.

const randomPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random() * 10 - 1 + 1;
      console.log(number);
      if (number >= 5) {
        resolve("Проміс виконано");
      } else {
        reject("Помилка проміса");
      }
    }, 1000);
  });
};

// randomPromise()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Робота з промісом завершена");
//   });

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.round(Math.random() * 10 - 1 + 1);
      console.log(randomNumber);
      if (randomNumber >= 5) {
        resolve(randomNumber);
      } else {
        reject("Помилка проміса");
      }
    }, 1000);
  });
};

// getRandomNumber()
//   .then((num) => {
//     return num * 10;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Напишіть функцію, яка приймає два числа і повертає проміс, 
// який виконується з результатом їхнього додавання. 
// Якщо хоча б одне з чисел не є числом, проміс повинен бути 
// відхилено з повідомленням "Неправильні аргументи".

const addNumber =  (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const add = a + b
      resolve(add)
    }, 1000)
  })
}

addNumber(5, 10).then((result) => {
  console.log(result);
  
})