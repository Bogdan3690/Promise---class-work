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

fetchUserFromServer("Mango")
  .then((user) => console.log(user))
  .catch((error) => console.error(error));

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
    return new Promise=(resolve, reject) => {
      
}