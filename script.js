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

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Enhanced button interactions with digital effects
function initButtonEffects() {
    // Registration button
    const registrationBtn = document.querySelector('.btn-registration');
    if (registrationBtn) {
        registrationBtn.addEventListener('click', function() {
            // Digital pulse effect
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 20px rgba(255, 124, 92, 0.6)';

            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 150);
        });

        // Hover effect with glow
        registrationBtn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 124, 92, 0.4)';
        });

        registrationBtn.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }

    // Floating buttons
    const floatingBtns = document.querySelectorAll('.floating-buttons .btn');
    floatingBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Digital click effect
            this.style.transform = 'scale(0.9) translateY(2px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';

            setTimeout(() => {
                this.style.transform = 'scale(1) translateY(0)';
                this.style.boxShadow = 'none';
            }, 150);
        });

        // Enhanced hover effects
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Pricing card buttons
    const cardButtons = document.querySelectorAll('.card-button');
    cardButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Digital pulse effect
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 20px rgba(255, 124, 92, 0.8)';

            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 150);
        });

        // Hover effect with digital glow
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 0 15px rgba(255, 124, 92, 0.5)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// Enhanced card hover effects
function initCardEffects() {
    // Advantage cards
    const advantageCards = document.querySelectorAll('.advantage-card');
    advantageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Change cards
    const changeCards = document.querySelectorAll('.change-card');
    changeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.03)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Speaker cards
    const speakerCards = document.querySelectorAll('.speaker-card');
    speakerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.08)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Badge floating animation
function initBadgeAnimations() {
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        badge.addEventListener('mouseenter', function() {
            this.style.animation = `pulse 0.6s ease-in-out ${index * 0.1}s`;
        });

        badge.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// Mascot floating effect
function initMascotAnimation() {
    const mascotImg = document.querySelector('.mascot-img');
    if (mascotImg) {
        let floatDirection = 1;
        setInterval(() => {
            mascotImg.style.transform = `translateY(${floatDirection * 3}px)`;
            floatDirection *= -1;
        }, 2000);
    }
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

// // Add parallax effect to mascot on scroll (optional enhancement)
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const mascotImg = document.querySelector('.mascot-img');
//     if (mascotImg) {
//         const speed = scrolled * 0.5;
//         mascotImg.style.transform = `translateY(${speed}px)`;
//     }
// });

// Burger Menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.getElementById('burgerButton');
    const burgerNav = document.getElementById('burgerNav');

    if (burgerButton && burgerNav) {
        burgerButton.addEventListener('click', function() {
            // Toggle burger button animation
            burgerButton.classList.toggle('active');

            // Toggle burger navigation visibility
            burgerNav.classList.toggle('active');

            // Prevent body scroll when menu is open on mobile
            if (burgerNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close burger menu when clicking on a link
        const burgerLinks = burgerNav.querySelectorAll('.burger-nav-link');
        burgerLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerButton.classList.remove('active');
                burgerNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close burger menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideBurger = burgerButton.contains(event.target) || burgerNav.contains(event.target);

            if (!isClickInsideBurger && burgerNav.classList.contains('active')) {
                burgerButton.classList.remove('active');
                burgerNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close burger menu on window resize if screen becomes larger than 1000px
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1000 && burgerNav.classList.contains('active')) {
                burgerButton.classList.remove('active');
                burgerNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faqItem => {
                if (faqItem !== item) {
                    faqItem.classList.remove('active');
                    const faqAnswer = faqItem.querySelector('.faq-answer');
                    if (faqAnswer) {
                        faqAnswer.style.maxHeight = '0px';
                        faqAnswer.style.opacity = '0';
                        faqAnswer.style.padding = '0px 30px';
                    }
                }
            });

            // Toggle the clicked item
            if (isActive) {
                // Close the item
                item.classList.remove('active');
                if (answer) {
                    answer.style.maxHeight = '0px';
                    answer.style.opacity = '0';
                    answer.style.padding = '0px 30px';
                }
            } else {
                // Open the item
                item.classList.add('active');
                if (answer) {
                    // First, set initial state for animation
                    answer.style.display = 'block';
                    answer.style.maxHeight = '0px';
                    answer.style.opacity = '0';
                    answer.style.padding = '0px 30px';

                    // Force reflow
                    answer.offsetHeight;

                    // Start animation
                    answer.style.transition = 'all 0.4s ease-out';
                    answer.style.maxHeight = '1000px'; // Large enough value
                    answer.style.opacity = '1';
                    answer.style.padding = '30px';

                    // After animation completes, remove transition and set final state
                    setTimeout(() => {
                        answer.style.transition = '';
                        answer.style.maxHeight = 'none';
                        answer.style.height = 'auto';
                    }, 400);
                }
            }
        });
    });

    // Initialize all animations and effects
    initScrollAnimations();
    initButtonEffects();
    initCardEffects();
    initBadgeAnimations();
    initMascotAnimation();
});
