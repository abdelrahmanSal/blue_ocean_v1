document.addEventListener("DOMContentLoaded", function() {
    const seeMoreTriggers = document.querySelectorAll('.see_more_trigger');

    seeMoreTriggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const seeMoreDiv = this.nextElementSibling;
        if (seeMoreDiv.style.display === 'none' || seeMoreDiv.style.display === '') {
          seeMoreDiv.style.display = 'flex';
          this.textContent = 'See Less';
        } else {
          seeMoreDiv.style.display = 'none';
          this.textContent = 'See More';
        }
      });
    });
  });