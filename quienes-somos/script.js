// Helper function to check if a certain percentage of the element is in viewport
function isInViewport(element, percentageVisible = 0.4) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const elementVisibleHeight = elementHeight * percentageVisible;
  
    return (
      rect.top + elementVisibleHeight < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom - elementVisibleHeight > 0
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


  