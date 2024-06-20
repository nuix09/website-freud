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

window.addEventListener('scroll', function() {
    const text = document.querySelector('.zoom-fade-text');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const offset = windowHeight / 3; // Start the effect after scrolling 1/3
  
    if (scrollY > offset) {
      // Calculate the scroll progress after the offset
      const progress = (scrollY - offset) / windowHeight;
  
      // Adjust the zoom and opacity based on scroll progress
      if (progress <= 1) {
        const scale = 1 + progress; // Zoom in
        const opacity = 1 - progress; // Fade out
  
        text.style.transform = `scale(${scale})`;
        text.style.opacity = opacity;
      } else {
        // Reset once the animation completes to maintain final state
        text.style.transform = 'scale(2)';
        text.style.opacity = 0;
      }
    } else {
      // Reset to initial state if before the offset
      text.style.transform = 'scale(1)';
      text.style.opacity = 1;
    }
  });
  
  function scrollToPosition(container, amount) {
    const startPosition = container.scrollLeft;
    const endPosition = startPosition + amount;
    const distance = endPosition - startPosition;
    const startTime = performance.now();
    const duration = 1000; // Duration in milliseconds (1 seconds)
  
    function scrollAnimation(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progressalb = Math.min(elapsedTime / duration, 1);
      container.scrollLeft = startPosition + distance * progressalb;
  
      if (progressalb < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }
  
    requestAnimationFrame(scrollAnimation);
  }
  
  document.getElementById('scrollLeftBtn').addEventListener('click', () => {
    const container = document.querySelector('.scroll-container');
    scrollToPosition(container, -200); // Adjust this value to scroll by a desired amount
  });
  
  document.getElementById('scrollRightBtn').addEventListener('click', () => {
    const container = document.querySelector('.scroll-container');
    scrollToPosition(container, 200); // Adjust this value to scroll by a desired amount
  });
