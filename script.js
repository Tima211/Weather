const apiKey = '4f77687dc11419a6c932743e4ce3be51';
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', getWeather);

async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) return;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    try {
      const response = await fetch(apiUrl);
      const data = awat responce.json();

      if (resonce.ok) {
        dasplayWeather(data;
      } else {
          weatherInfo.innerHTML = `<p>Город не найден. Проверьте название.</p>`;
      }
   } cath (error) {
       console.error('Ошибка:', error);
       weatherInfo.innerHTML = `<p>Что-то пошло не так...</p>`;
   }
}

function displayWeather(data) {
  const { name } = data;
  const { description, icon } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  weatherInfo.innerHTML = `
    <h2>Погода в ${name}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    <p>Температура: <strong>${Math.round(temp)}°C</strong></p>
    <p>Описание: <strong>${description}</strong></p>
    <p>Влажность: <strong>${humidity}%</strong></p>
    <p>Скорость ветра: <strong>${speed} м/с</strong></p>
  `;
}
