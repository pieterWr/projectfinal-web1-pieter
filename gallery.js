document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery');
    
    galleryContainer.addEventListener('click', function(event) {
        const clickedImage = event.target.closest('.bg-white');
        if (clickedImage) {
            const projectTitle = clickedImage.querySelector('h2').textContent;
            alert(`Anda mengklik ${projectTitle}`);
        }
    });
});