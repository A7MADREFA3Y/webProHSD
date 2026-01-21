const navLinks = document.querySelectorAll(".nav-menu .nav-links");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=> {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// // swiper init 
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive Breakpoints 
    breakpoints: {
        0: {
            slidesPerView: 1  // Fixed spelling
        },
        768: {
            slidesPerView: 2  // Fixed spelling
        },
        1024: {
            slidesPerView: 3  // Fixed spelling
        }
    }
});

function alertTheUserByInfos(event) {
  event.preventDefault(); // Stop form submission
  
  const form = event.target;
  const formData = new FormData(form);
  const name = formData.get('name') || 'No name';
  const email = formData.get('email') || 'No email';
  const message = formData.get('message') || 'No message';
  
  // HTML5 validation already handled by 'required' attributes
  if (form.checkValidity()) {
    alert(`Vielen Dank, ${name}!\nE-Mail: ${email}\nNachricht: ${message}\nFormular gesendet!`);
    form.reset(); // Optional: clear form
  } else {
    alert('Bitte fülle alle Felder korrekt aus!');
    form.reportValidity(); // Show browser validation messages
  }
}

