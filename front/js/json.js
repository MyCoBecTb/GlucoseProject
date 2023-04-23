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