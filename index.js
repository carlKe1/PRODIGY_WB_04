document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name_error');
    const emailError = document.getElementById('email_error');
    const messageError = document.getElementById('message_error');

    contactForm.addEventListener('submit', function (event) {
        let isValid = true;
        
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }
        
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        }

        
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        }

        
        if (isValid) {
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

   
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
            return emailPattern.test(email);
        }
    });
document.addEventListener("DOMContentLoaded", function() {
    
    const hireMeBtn = document.getElementById('hireMeBtn');
    const downloadCvBtn = document.getElementById('downloadCvBtn');

    
    hireMeBtn.addEventListener('click', notifyForHire);
    downloadCvBtn.addEventListener('click', downloadCV);

   
    function notifyForHire() {
        
        alert("You've been notified about the hire request!");
        
         window.location.href = "index.html";
    }

    
    function downloadCV() {
       
        const cvPath = 'assets/cv.pdf';
        
        const link = document.createElement('a');
        link.href = cvPath;
        link.setAttribute('download', '');
        
        link.click();
    }

});

function MyFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}


window.addEventListener('scroll', headerShadow);

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (window.scrollY > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}


var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Youtuber", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// HOME
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });


sr.reveal('.project-box', { interval: 200 });


sr.reveal('.top-header', {});


const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });


const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });


const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);