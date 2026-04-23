// Zieldatum: 04. August 2026 um 18:00 Uhr
const targetDate = new Date('August 4, 2026 19:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "<h2 style='font-size: 2.5rem; color: #ad1457;'>لقد حان الوقت! ❤️</h2>";
        document.querySelector('.message').innerText = "مبارك الخطوبة! بارك الله لكما وبارك عليكما";
    }
}

// تأثير القلوب المتساقطة
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// إنشاء قلوب بشكل دوري
setInterval(createHeart, 300);

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
