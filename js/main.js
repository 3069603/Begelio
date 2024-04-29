function updateDateTime() {
  var now = new Date();
  var datetime = document.getElementById('datetime');
  var year = now.getFullYear(); // Год
  var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Месяц
  var day = now.getDate().toString().padStart(2, '0'); // День
  var hours = now.getHours().toString().padStart(2, '0'); // Часы
  var minutes = now.getMinutes().toString().padStart(2, '0'); // Минуты
  var seconds = now.getSeconds().toString().padStart(2, '0'); // Секунды
  datetime.innerHTML = year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
}
setInterval(updateDateTime, 1000); // Обновление даты и времени каждую секунду