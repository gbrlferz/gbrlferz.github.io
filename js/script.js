document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const profileContainer = document.getElementById('profileImageContainer');

  carousel.addEventListener('wheel', function(e) {
    e.preventDefault();
    this.scrollLeft += e.deltaY * 2;
  });

  // Handle profile image click on mobile
  if (window.matchMedia('(hover: none)').matches) {
    profileContainer.addEventListener('click', function() {
      this.classList.toggle('pixel-mode');
    });
  }
});
