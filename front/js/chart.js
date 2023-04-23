
const ctx = document.getElementById('chart');
//document.querySelector('chart.js.').innerHTML = data.location.name;
console.log(xData);
new Chart(ctx, {
  type: 'line',
  data: {
    labels: xxData,
    datasets: [{
      label: 'Погода',
      data: [12, 19, 3, 5, 2, 3, 7],
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
