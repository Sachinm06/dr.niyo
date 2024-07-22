window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.top-navbar .home-secton').classList.add('active1');
    }
    else {
        document.querySelector('.top-navbar .home-secton').classList.remove('active1');
    }
    fadeOut();
}
function loader() {
    document.querySelector(".load-container").classList.add("active1")
}
function fadeOut() {
    setTimeout(loader, 4000)
}

 // Add event listeners to all elements with class 'scroll-to-product-cards'
 document.querySelectorAll('.scroll-to-product-cards').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action for links
        const target = document.getElementById('product-cards');
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - 100,
                behavior: 'smooth'
            });
        }
    });
});