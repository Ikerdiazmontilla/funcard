
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  function runOnScroll() {
    const elements = document.querySelectorAll('.element-to-animate');
    elements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('is-visible');
      }
    });
  }
 
  window.addEventListener('scroll', runOnScroll);