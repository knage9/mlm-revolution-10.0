// Timer functionality
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
