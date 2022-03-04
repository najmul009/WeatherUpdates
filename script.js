const apiKey= `9d19d01f1b88e98b50bd91fdff38f697`
const serachTemprature =()=>{ 
    const cityName = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemprature(data))
    .catch(error => console.log(error))
}

const displayTemprature=(data)=>{
    console.log(data)
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const city = document.getElementById('city')
    const temprature = document.getElementById('temprature')
    const weather = document.getElementById('weather')
    const icon = document.getElementById('icon')
    
    icon.setAttribute('src',iconUrl)
    city.innerText = data.name
    temprature.innerText = data.main.temp
    weather.innerText = data.weather[0].main


}