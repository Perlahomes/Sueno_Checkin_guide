// Centralized site data
const SITE_CONFIG = {
    mainHeading: "Welcome to Sueno",
    mapLink: "https://maps.app.goo.gl/5Qbw94v1wq5J4Tzn7",
    touristLink: "https://messinia.mobi/el/article/katalumata/enoikiazomena-domatia/sueno-enoikiazomena-diamerismata/9942",
    wifi: {
        network: "Lucero-Sueno",
        password: "Perla2024"
    },
    entranceCode: " 6556",
    keyBoxCode: " 6556"
};

// Populate HTML dynamically
window.addEventListener('DOMContentLoaded', () => {
    // Heading
    const heading = document.getElementById('main-heading');
    if (heading) heading.textContent = SITE_CONFIG.mainHeading;

    // Sidebar links
    const mapLinks = document.querySelectorAll('.map-link');
    mapLinks.forEach(a => a.href = SITE_CONFIG.mapLink);

    const touristLinks = document.querySelectorAll('.tourist-link');
    touristLinks.forEach(a => a.href = SITE_CONFIG.touristLink);

    // Wi-Fi info
    const wifiNetworkEls = document.querySelectorAll('#wifiNetwork');
    wifiNetworkEls.forEach(el => el.textContent = SITE_CONFIG.wifi.network);

    const wifiPasswordEls = document.querySelectorAll('#wifiPassword');
    wifiPasswordEls.forEach(el => el.textContent = SITE_CONFIG.wifi.password);

    // Entrance / Key Box code
    const entranceEls = document.querySelectorAll('#entranceCode');
    entranceEls.forEach(el => el.textContent = SITE_CONFIG.entranceCode);

    const keyBoxEls = document.querySelectorAll('#keyBoxCode');
    keyBoxEls.forEach(el => el.textContent = SITE_CONFIG.keyBoxCode);
});
