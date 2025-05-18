// Updated Key List with 20 more keys
const keyList = [
  "Driftywn-A73F9C", "Driftywn-X92L5B", "Driftywn-K1T4ZM", "Driftywn-NE83V2",
  "Driftywn-Q5X9AL", "Driftywn-MF62PD", "Driftywn-Y84KJC", "Driftywn-UBR91X",
  "Driftywn-ZM4EQT", "Driftywn-TA57WG", "Driftywn-V19QKC", "Driftywn-JX76RB",
  "Driftywn-WEP32N", "Driftywn-CRF84Z", "Driftywn-9TQ3MB", "Driftywn-H21XLO",
  "Driftywn-GB76YC", "Driftywn-LE82VX", "Driftywn-N43DZM", "Driftywn-KX5P9A",
  "Driftywn-LM84NQ", "Driftywn-6D4V2A", "Driftywn-MK1P8B", "Driftywn-JH3N9T",
  "Driftywn-QR7V6P", "Driftywn-GH5S3W", "Driftywn-CV91D4", "Driftywn-TW2J8S",
  "Driftywn-PX9F0E", "Driftywn-YN6Z2D", "Driftywn-TH4X5B", "Driftywn-U92F3C",
  "Driftywn-FH1A9L", "Driftywn-OB5V7M", "Driftywn-RJ8K2N", "Driftywn-QT3B0C",
  "Driftywn-91D6X9", "Driftywn-ZR4T6V", "Driftywn-NQ8K5L", "Driftywn-BV2F9J",
  "Driftywn-HO1P3Z", "Driftywn-SG6M8Y", "Driftywn-FJ1A4W", "Driftywn-KL9Q2R",
  "Driftywn-PM7E1B", "Driftywn-VW4S0U", "Driftywn-TY6N3A", "Driftywn-EX8B5F"
];

function generateKey() {
  const randomKey = keyList[Math.floor(Math.random() * keyList.length)];
  const now = Date.now();
  const expiresAt = now + 24 * 60 * 60 * 1000; // 24 hours

  localStorage.setItem("userKey", randomKey);
  localStorage.setItem("keyTime", now.toString());
  localStorage.setItem("keyExpiry", expiresAt.toString());

  document.getElementById("keyBox").value = randomKey;
  updateExpirationCountdown(expiresAt);
}

// Update the expiration countdown
function updateExpirationCountdown(expiryTime) {
  const infoElement = document.getElementById("info");
  const interval = setInterval(() => {
    const now = Date.now();
    const remainingTime = expiryTime - now;

    if (remainingTime <= 0) {
      clearInterval(interval);
      infoElement.innerText = "Key has expired!";
    } else {
      const hours = Math.floor(remainingTime / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      
      infoElement.innerText = `Expires in ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
  }, 1000);
}
