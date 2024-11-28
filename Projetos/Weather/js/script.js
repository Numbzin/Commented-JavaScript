const API_KEY = "e40b79c2a6990fd045be3d7d2f60e024";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorMessage = document.querySelector(".error");
const weatherDisplay = document.querySelector(".weather");

// Mapeamento dos ícones de clima
const weatherIcons = {
  Clouds: "/images/clouds.png",
  Clear: "/images/clear.png",
  Rain: "/images/rain.png",
  Drizzle: "/images/drizzle.png",
  Mist: "/images/mist.png",
  Snow: "/images/snow.png"
};

// Função para buscar e exibir os dados do clima
async function checkWeather(city) {
  try {
    const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);

    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    handleError(error);
  }
}

// Função para exibir os dados do clima
function displayWeather(data) {
  weatherDisplay.style.display = "block";
  errorMessage.style.display = "none";

  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
  document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

  // Define o ícone do clima
  const condition = data.weather[0].main;
  weatherIcon.src = weatherIcons[condition] || "/images/default.png";
}

// Função para tratar erros
function handleError(error) {
  errorMessage.textContent = error.message;
  errorMessage.style.display = "block";
  weatherDisplay.style.display = "none";
  console.error(error.message); // Log do erro para depuração
}

// Evento do botão de busca
searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    handleError(new Error("Por favor, insira o nome de uma cidade"));
  }
});
