/*
const requestURL = 'https://jsonplaceholder.typicode.com/users' //получаем файл

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

xhr.open(method, url)

xhr.responseType = 'json' //Говорим что бы файл изменял тип на жисон
xhr.setRequestHeader()

xhr.onload = () => {
   if(xhr.status >= 400) { //проверка на ошибку получения данных
    reject(xhr.response)
   } else {
     resolve(xhr.response)
   }
   }
    console.log(xhr.response)
xhr.send(JSON.stringify(body))
})
}


  sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))
 
const body = {
  name: 'Nikolay',
  age: 26
}
    sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    */
    
    /*fetch('http://127.0.0.1:8000/glucose/')
    .then(function(resp) {return resp.json() }) //Антипарсим джейсон
    .then(function (data) {
      console.log(data);
    })

    const requestURL = 'http://127.0.0.1:8000/glucose'

    function sendRequest(method, url, body = null) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
    
        xhr.open(method, url)
    
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
    
        xhr.onload = () => {
          if (xhr.status >= 400) {
            reject(xhr.response)
          } else {
            resolve(xhr.response)
          }
        }
    
        xhr.onerror = () => {
          reject(xhr.response)
        }
    
        xhr.send(JSON.stringify(body))
      })
    }
    
    sendRequest('GET', requestURL)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    
   const body = {
      glucose_value: 13.3,
      measure_time: 1681405688
    }
    
    sendRequest('POST', requestURL, body)
      .then(data => console.log(data))
      .catch(err => console.log(err))
      */


fetch("http://127.0.0.1:8000/glucose/", {
  method: 'POST',
 
  body: JSON.stringify({
    glucose_value: 36.1,
    measure_time: 1681407888
  })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log(error)
    })

document.querySelector('#submit_button').onclick = function(event){ //отследить нажатия кнопки
  event.preventDefault(); //запретить перезагружать страницу после нажатия
  console.log('Hello!');

  let indicator_date = document.querySelector('indicator_date').value //ищем ид значений показателей
  let indicators = document.querySelector('indicators').value; //ищем ид даты показателей
 

}