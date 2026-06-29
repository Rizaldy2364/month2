const cityInput = document.getElementById("city");
const result = document.getElementById("result");

function getWeatherDescription(weatherCode) {
    const weather = {
        0: `<i class="fa-solid fa-sun"></i> cerah`,
        1: `<i class="fa-solid fa-cloud-meatball"></i> Sebagian Cerah`,
        2: `<i class="fa-solid fa-cloud-sun"></i> Berawan`,
        3: `<i class="fa-solid fa-cloud"></i> Mendung`,
        45: `<i class="fa-solid fa-smog"></i> Berkabut`,
        48: `<i class="fa-solid fa-smog"></i> Berkabut Tebal`,
        51: `<i class="fa-solid fa-cloud-rain"></i> Gerimis Ringan`,
        53: `<i class="fa-solid fa-cloud-showers-heavy"></i> Gerimis Sedang`,
        55: `<i class="fa-solid fa-cloud-showers-water"></i> Gerimis Lebat`,
        61: `<i class="fa-solid fa-cloud-rain"></i> hujan Ringan`,
        63: `<i class="fa-solid fa-cloud-showers-heavy"></i> hujan Sedang`,
        65: `<i class="fa-solid fa-cloud-showers-water"></i> hujan Lebat`,
        71: `<i class="fa-solid fa-snowflake"></i> Salju Ringan`,
        73: `<i class="fa-solid fa-snowflake"></i> Salju Sedang`,
        75: `<i class="fa-solid fa-snowflake"></i> Salju Lebat`,
        80: `<i class="fa-solid fa-cloud-rain"></i> hujan lokal Ringan`,
        81: `<i class="fa-solid fa-cloud-showers-heavy"></i> hujan lokal Sedang`,
        82: `<i class="fa-solid fa-cloud-showers-water"></i> hujan lokal Lebat`,
        95: `<i class="fa-solid fa-cloud-bolt"></i> Badai Petir`
    };

    return weather[weatherCode] || "Tidak diketahui";
}

async function tampilkanCuaca(lat, lon, namaKota) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
        );

        const data = await response.json();
        const cuaca = data.current;

        result.innerHTML = `
            <h2>${namaKota}</h2>
            <p><strong>${getWeatherDescription(cuaca.weather_code)}</strong></p>
            <p><i class="fa-solid fa-temperature-empty"></i> Suhu : ${cuaca.temperature_2m} °C</p>
            <p><i class="fa-solid fa-droplet"></i> Kelembapan : ${cuaca.relative_humidity_2m}%</p>
            <p><i class="fa-solid fa-wind"></i> Kecepatan Angin : ${cuaca.wind_speed_10m} km/jam</p>
        `;
    } catch (error) {
        result.innerHTML = "<p>Gagal mengambil data cuaca.</p>";
    }
}

async function cariCuaca() {
    const city = cityInput.value;
    if ( city === "" ) return;
    result.innerHTML="Loading...";
    
    try{      
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        const geoData = await geoResponse.json();

        if(!geoData.results){
            result.innerHTML="Kota tidak ditemukan";
            return;
        }

        const lat = geoData.results[0].latitude;
        const lon = geoData.results[0].longitude;
        tampilkanCuaca(lat,lon,geoData.results[0].name);

    }
    catch(error){
        result.innerHTML="Terjadi kesalahan.";
    }
}

document.getElementById("searchBtn").addEventListener("click", cariCuaca);






