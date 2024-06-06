const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isInteresecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.name');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', () => {
    const scrolledClass = 'scrolled';

    if (window.scrollY > 0) {
        document.body.classList.add(scrolledClass);
    } else {
        document.body.classList.remove(scrolledClass);
    }
});
