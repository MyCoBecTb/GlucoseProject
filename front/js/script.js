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

//График
// Получение контекста для графика
let canvas = window.document.querySelector('canvas');
let context = canvas.getContext('2d');

const createLineChart = (xData, yData) => {
  let chart = new Chart(context, {
    type: 'line',
    data: {
      labels: xData,
      datasets: [{
        label: 'Погода',
        data: yData,
        borderWidth: 1,
        fill: true
      }]
    },
    options: {
      animations: { //Строка начала блока анимации
        tension: {
          duration: 3000,
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

//Получаем АПИ погоды
fetch('http://api.weatherapi.com/v1/forecast.json?key=102016a622ba4b0c85f133439231104&q=Varash&days=10&aqi=no&alerts=no')
  .then(function(resp) {return resp.json() }) //Антипарсим джейсон
  .then(function (data) {
     let xData =[]; //задаем переменную х
     let yData = []; // Задаем переменную у
    console.log(data);
     let date = data.forecast.forecastday;
    for(let i=0; i < date.length; i++){
      //console.log(`x= ${date[i].date}, y= ${date[i].day.maxtemp_c}`);
      xData.push(date[i].date);
      yData.push(date[i].day.maxtemp_c);
    }
    createLineChart(xData, yData);
    document.querySelector('.name_of_site').innerHTML = data.location.name; // Имя графика от названия города
  })
  .catch(function () {
  });
 
/*
 const ctx = document.getElementById('chart');
//document.querySelector('chart.js.').innerHTML = data.location.name;
console.log(xData);
new Chart(ctx, {
  type: 'line',
  data: {
    labels: xData,
    datasets: [{
      label: 'Погода',
      data: yData,
      borderWidth: 1,
      fill: true
    }]
  },
  options: {
    animations: { //Строка начала блока анимации
      tension: {
        duration: 3000,
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
*/
