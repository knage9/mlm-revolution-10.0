// Timer functionality
function getDeclension(number, forms) {
    // Forms: [one, two, five] for Russian declension
    const n = Math.abs(number) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
}

function updateTimer() {
    const targetDate = new Date('2025-11-17T00:00:00+03:00'); // Moscow time
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        // Timer has reached zero
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        // Update labels for zero values
        document.querySelectorAll('.timer-label')[0].textContent = 'дней';
        document.querySelectorAll('.timer-label')[1].textContent = 'часов';
        document.querySelectorAll('.timer-label')[2].textContent = 'минут';
        document.querySelectorAll('.timer-label')[3].textContent = 'секунд';
        return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update display with leading zeros
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Update labels with correct declension
    const labels = document.querySelectorAll('.timer-label');
    labels[0].textContent = getDeclension(days, ['день', 'дня', 'дней']);
    labels[1].textContent = getDeclension(hours, ['час', 'часа', 'часов']);
    labels[2].textContent = getDeclension(minutes, ['минута', 'минуты', 'минут']);
    labels[3].textContent = getDeclension(seconds, ['секунда', 'секунды', 'секунд']);
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initialize timer immediately
updateTimer();

// Smooth scrolling for navigation links (optional enhancement)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Add smooth scroll behavior if needed
    });
});

// Add some interactive effects for floating buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add parallax effect to mascot on scroll (optional enhancement)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const mascotImg = document.querySelector('.mascot-img');
    if (mascotImg) {
        const speed = scrolled * 0.5;
        mascotImg.style.transform = `translateY(${speed}px)`;
    }
});
