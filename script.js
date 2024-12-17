const apiKey = 'e5e85826cdb0720c992558a7c88fceb7';

function getWeather(city) {
    animateProgressBar(); // Start progress animation

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const windSpeed = data.wind.speed;

            weatherDiv.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${description}</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
            weatherDiv.style.display = "block";
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function animateProgressBar() {
    const progress = document.getElementById("progress");
    progress.value = 0;
    let value = 0;

    const interval = setInterval(() => {
        value += 10;
        progress.value = value;
        if (value >= 100) clearInterval(interval);
    }, 100);
}
