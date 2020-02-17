const navMenuItems = document.querySelectorAll('.nav .navbar-nav li');
const navLinks = document.querySelectorAll('.nav-main a');

function toggleMobileMenu() {
    let mobMenu = document.querySelector('.navbar-collapse');
    if (mobMenu.classList.contains('collapse')) {
        mobMenu.classList.remove('collapse');
    } else {
        mobMenu.classList.add('collapse');
    }
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');

    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: 'smooth'
    });
}

function clearActiveNavLink() {
    navMenuItems.forEach(function(li) {
        if (li.classList.contains('active')) {
            li.classList.remove('active');
        }
    });
}

function setActiveNavLink(el) {
    clearActiveNavLink();
    if (!el.parentNode.classList.contains('active')) {
        el.parentNode.classList.add('active');
    }
}

navLinks.forEach(el => el.addEventListener('click', (e) => {
    smoothScroll(e);
    setActiveNavLink(el);
}));
