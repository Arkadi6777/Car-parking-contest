const endDate = new Date("2024-12-01T00:00:00").getTime(); // Начало конкурса
const timer = document.getElementById("timer");

// Установить окончание конкурса через 24 часа
const finalDate = endDate + 24 * 60 * 60 * 1000;

setInterval(() => {
  const now = new Date().getTime();
  let timeLeft = endDate - now;

  if (timeLeft > 0) {
    // Время до конца конкурса
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timer.innerHTML = `До начала конкурса: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
  } else {
    // Время после окончания конкурса
    timeLeft = finalDate - now;

    if (timeLeft > 0) {
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Количество минут
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      timer.innerHTML = `Конкурс завершится через: ${hours}ч ${minutes}м ${seconds}с`;
    } else {
      timer.innerHTML = "Конкурс завершен.";
    }
  }
}, 1000);
