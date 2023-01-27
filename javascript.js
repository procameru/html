const timer = document.querySelector("#timer");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Устанавливаем дату и время, до которого хотим посчитать разницу
let countDownDate = new Date("Feb 11, 2023 15:00:00").getTime();

let updateTimer = setInterval(function () {
  // Получаем текущее дату и время
  let now = new Date().getTime();
  // Находим разницу между текущим временем и заданным
  let difference = countDownDate - now;

  // Рассчитываем дни, часы, минуты и секунды
  let daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hoursDif = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);

  // Вставляем значения в таймер
  days.innerHTML = daysDif;
  hours.innerHTML = hoursDif;
  minutes.innerHTML = minutesDif;
  seconds.innerHTML = secondsDif;

  // Когда таймер дойдет до заданной даты и времени
  if (difference < 0) {
    clearInterval(updateTimer);
    timer.innerHTML = "Наступило";
  }
  // Обновляем функцию с интервалом 1 секунда
}, 1000);
