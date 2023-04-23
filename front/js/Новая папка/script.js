/*
function getUserTime (t) { 
  let Y = t.getFullYear(); // Вынимаем дату по отдельным кускам
  let M = (addZero(t.getMonth() + 1));
  let D = (addZero(t.getDate()));
  let d = days[t.getDay()];
  let h = (addZero(t.getHours()));
  let m = (addZero(t.getMinutes()));
  return `${Y}-${M}-${D} ${h}:${m} (${d})` //Составляем из кусков формат даты
}
*/
// Получаем все ссылки на странице
const links = document.querySelectorAll('.link-block a');

// Добавляем обработчик события на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();
    
    // Получаем ID ссылки
    const linkId = link.dataset.linkId;
    
    // Выводим сообщение в консоль браузера
    console.log(`Нажата ссылка с ID ${linkId}`);
  });
});


//Функция форматирования даты для графика
//const days = ['Неділя', 'Понеділок', 'Вікторок', 'Середа', 'Четверг', 'П\'ятниця', 'Субота', 'Неділя'];
const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
function addZero (d) {
  return (d < 10) ? '0' + d : d;
}
function getUserTime (t) { 
  let Y = t.getFullYear(); // Вынимаем дату по отдельным кускам
  let M = (addZero(t.getMonth() + 1));
  let D = (addZero(t.getDate()));
  let d = days[t.getDay()];

  return `${Y}-${M}-${D} (${d})` //Составляем из кусков формат даты
}

function getUserTime_Date (t) { 
  let h = (addZero(t.getHours()));
  let m = (addZero(t.getMinutes()));
  return `${h}:${m}` //Составляем из кусков формат даты
}

//Получаем АПИ глюкозы
fetch('http://127.0.0.1:8000/glucose/')
  .then(function(resp) {return resp.json() }) //Антипарсим джейсон
  .then(function (data) {
    let xData =[]; //задаем переменную х
    let yData = []; // Задаем переменную у   
    let date = data;
    console.log(data);
    let time_canvas = new Date(Number(date[0].measure_time + '000'))
    let name_canvas = getUserTime(time_canvas);
      console.log(name_canvas);
    for(let i=0; i < date.length; i++){
                                                   //console.log(`x= ${date[i].date}, y= ${date[i].day.maxtemp_c}`);
      let time = new Date(Number(date[i].measure_time + '000')); //Прибавляем миллисекунды
      
      xData.push(getUserTime_Date(time));
      yData.push(date[i].glucose_value);
    }
    createLineChart(xData, yData);
    document.querySelector('.name_of_site').innerHTML = data.location.name; // Имя графика от названия города
  })
  .catch(function () {
  });


//График
// Получение контекста для графика
let canvas = window.document.querySelector('canvas');
let context = canvas.getContext('2d');



const createLineChart = (xData, yData) => {
  let chart = new Chart(context, {
    type: 'line', //Тип графика
    data: {
      labels: xData,
      datasets: [{
        label: 'Графік', //Название графика
        data: yData,
        borderWidth: 1,
        fill: true
      }]
    },
    options: {
      animations: { //Строка начала блока анимации
        tension: {
          duration: 5000, //замедление анимации
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      }, //Строка конца блока анимации
      scales: {
        y: {
          beginAtZero: true
           }
              }
           }
  });
}