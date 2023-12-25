document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality for museCarousel
    var currentIndexMuse = 0;
    var itemsMuse = document.querySelectorAll('#museCarousel .carousel-item');
    var totalItemsMuse = itemsMuse.length;

    function moveSlideMuse(step) {
        itemsMuse[currentIndexMuse].classList.remove('active');
        currentIndexMuse = (currentIndexMuse + step + totalItemsMuse) % totalItemsMuse;
        itemsMuse[currentIndexMuse].classList.add('active');
    }

    window.moveSlideMuse = moveSlideMuse; // Expose moveSlideMuse to the global scope

    // Carousel functionality for taskCarousel
    var currentIndexTask = 0;
    var itemsTask = document.querySelectorAll('#taskCarousel .carousel-item');
    var totalItemsTask = itemsTask.length;

    function moveSlideTask(step) {
        itemsTask[currentIndexTask].classList.remove('active');
        currentIndexTask = (currentIndexTask + step + totalItemsTask) % totalItemsTask;
        itemsTask[currentIndexTask].classList.add('active');
    }

    window.moveSlideTask = moveSlideTask; // Expose moveSlideTask to the global scope

    // Mobile navigation menu functionality
    var menuBtn = document.getElementById('menu-btn');
    var mobileNav = document.getElementById('mobile-nav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('translate-x-0');
            mobileNav.classList.toggle('translate-x-full');
        });
    }
});
