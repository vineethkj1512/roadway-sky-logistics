// Main JavaScript functionality for Roadways Logistics website

// Global state
let currentTrackingMode = 'id';
let isMobileMenuOpen = false;

// DOM Elements
const mobileMenu = document.getElementById('mobileMenu');
const loginModal = document.getElementById('loginModal');
const truckRegistrationModal = document.getElementById('truckRegistrationModal');
const enterpriseQuoteModal = document.getElementById('enterpriseQuoteModal');
const trackingInput = document.getElementById('trackingInput');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollEffects();
    initializeForms();
    console.log('Roadways Logistics website initialized');
});

// Mobile Menu Functions
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (mobileMenu) {
        if (isMobileMenuOpen) {
            mobileMenu.classList.add('active');
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.classList.remove('active');
            mobileMenu.style.display = 'none';
        }
    }
}

// Modal Functions
function openLoginModal() {
    if (loginModal) {
        loginModal.classList.add('active');
        loginModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLoginModal() {
    if (loginModal) {
        loginModal.classList.remove('active');
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openTruckRegistration() {
    if (truckRegistrationModal) {
        truckRegistrationModal.classList.add('active');
        truckRegistrationModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeTruckRegistration() {
    if (truckRegistrationModal) {
        truckRegistrationModal.classList.remove('active');
        truckRegistrationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openEnterpriseQuote() {
    if (enterpriseQuoteModal) {
        enterpriseQuoteModal.classList.add('active');
        enterpriseQuoteModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeEnterpriseQuote() {
    if (enterpriseQuoteModal) {
        enterpriseQuoteModal.classList.remove('active');
        enterpriseQuoteModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Tracking Functions
function setTrackingMode(mode) {
    currentTrackingMode = mode;
    
    // Update toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (mode === 'id') {
        toggleButtons[0].classList.add('active');
        if (trackingInput) {
            trackingInput.placeholder = 'Enter Shipment ID (e.g., RW123456789)';
            trackingInput.type = 'text';
        }
    } else {
        toggleButtons[1].classList.add('active');
        if (trackingInput) {
            trackingInput.placeholder = 'Enter Mobile Number';
            trackingInput.type = 'tel';
        }
    }
}

function trackShipment() {
    if (!trackingInput) return;
    
    const value = trackingInput.value.trim();
    if (!value) {
        showNotification('Please enter a tracking ID or mobile number', 'error');
        return;
    }
    
    // Simulate tracking
    showNotification('Tracking your shipment...', 'info');
    
    setTimeout(() => {
        showNotification('Shipment found! Check the tracking details below.', 'success');
    }, 1500);
}

// Hero Functions
function watchDemo() {
    window.open('https://youtu.be/KEFt2quibkg?si=ntavi-MssXdXfasi', '_blank');
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '1000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#10b981';
            break;
        case 'error':
            notification.style.background = '#ef4444';
            break;
        case 'warning':
            notification.style.background = '#f59e0b';
            break;
        default:
            notification.style.background = '#3b82f6';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Form Handling
function initializeForms() {
    // Login form
    const loginForm = loginModal?.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Login functionality would be implemented here', 'info');
            closeLoginModal();
        });
    }
    
    // Truck registration form
    const truckForm = truckRegistrationModal?.querySelector('form');
    if (truckForm) {
        truckForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Registration submitted! We\'ll contact you within 24 hours for verification.', 'success');
            closeTruckRegistration();
        });
    }
    
    // Enterprise quote form
    const enterpriseForm = enterpriseQuoteModal?.querySelector('form');
    if (enterpriseForm) {
        enterpriseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Quote request submitted! Our enterprise team will contact you within 2 business hours.', 'success');
            closeEnterpriseQuote();
        });
    }
}

// Animation Initialization
function initializeAnimations() {
    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in');
    });
    
    // Add stagger animation to partner cards
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in');
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.animate-fade-in, .stat-item');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    // Close mobile menu when clicking outside
    if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(e.target) && !e.target.closest('.mobile-menu-btn')) {
        toggleMobileMenu();
    }
    
    // Close modals when clicking on backdrop
    if (e.target.classList.contains('modal')) {
        if (e.target === loginModal) closeLoginModal();
        if (e.target === truckRegistrationModal) closeTruckRegistration();
        if (e.target === enterpriseQuoteModal) closeEnterpriseQuote();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (loginModal?.classList.contains('active')) closeLoginModal();
        if (truckRegistrationModal?.classList.contains('active')) closeTruckRegistration();
        if (enterpriseQuoteModal?.classList.contains('active')) closeEnterpriseQuote();
        if (isMobileMenuOpen) toggleMobileMenu();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add navbar background on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    const handleScroll = throttle(() => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--color-white)';
            navbar.style.backdropFilter = 'none';
        }
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
}

// Loading state management
function setLoading(element, isLoading) {
    if (!element) return;
    
    if (isLoading) {
        element.disabled = true;
        element.style.opacity = '0.7';
        element.style.cursor = 'not-allowed';
        
        // Add loading spinner if it's a button
        if (element.tagName === 'BUTTON') {
            const originalText = element.innerHTML;
            element.setAttribute('data-original-text', originalText);
            element.innerHTML = '<span class="loading-spinner"></span> Loading...';
        }
    } else {
        element.disabled = false;
        element.style.opacity = '1';
        element.style.cursor = 'pointer';
        
        // Restore original text
        if (element.tagName === 'BUTTON' && element.hasAttribute('data-original-text')) {
            element.innerHTML = element.getAttribute('data-original-text');
            element.removeAttribute('data-original-text');
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('Something went wrong. Please try again.', 'error');
});

// Make functions available globally
window.toggleMobileMenu = toggleMobileMenu;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.openTruckRegistration = openTruckRegistration;
window.closeTruckRegistration = closeTruckRegistration;
window.openEnterpriseQuote = openEnterpriseQuote;
window.closeEnterpriseQuote = closeEnterpriseQuote;
window.setTrackingMode = setTrackingMode;
window.trackShipment = trackShipment;
window.watchDemo = watchDemo;