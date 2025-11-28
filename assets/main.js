document.addEventListener( "DOMContentLoaded", function(){
    const mainNav = document.querySelector('.main-nav');
    const profileCard = document.querySelector('.profile-card');

    const menuToggleBtn = document.getElementById('menu-toggle');

    function toggleMobileLayout() {
        if (mainNav) {
            mainNav.classList.toggle('is-open');
        }
        if(profileCard){
            profileCard.classList.toggle('is-open');
        }
        document.boddy.classList.toggle('mobile-view-active');
    }
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleMobileLyout);
    }

})