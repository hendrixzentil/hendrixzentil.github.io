window.onload = function() {
    // Add the 'no-scroll' class to body to disable scrolling during the intro
    document.body.classList.add('no-scroll');

    // After the initial fade-in, set a timeout for fading out
    setTimeout(() => {
        document.getElementById('main-text').classList.add('fade-out');
        document.getElementById('subtitle').classList.add('fade-out');

        // After fading out, show the main content with a fade-in effect
        setTimeout(() => {
            document.getElementById('intro').style.display = 'none';
            const mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
            mainContent.classList.add('fade-in-main');

            // Re-enable scrolling by removing the 'no-scroll' class
            document.body.classList.remove('no-scroll');
        }, 500); // Reduced delay to keep the transition quick and smooth
    }, 1500); // Initial delay reduced to 1.5 seconds
};
