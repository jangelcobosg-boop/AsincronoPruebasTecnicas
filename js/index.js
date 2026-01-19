document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.background__info_items');
    const backgroundContainer = document.querySelector('.background__food');
    const infoContainer = document.querySelector('.background__info');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            
            const imagePath = item.getAttribute('data-image');
            
            
            backgroundContainer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imagePath})`;
            backgroundContainer.style.backgroundSize = 'cover';
            backgroundContainer.style.backgroundPosition = 'center';

            
            infoContainer.classList.add('is-hovering');
        });

        item.addEventListener('mouseleave', () => {
           
            backgroundContainer.style.backgroundImage = 'none';
            
            
            infoContainer.classList.remove('is-hovering');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.background__info_items');
    
    
    items.forEach(item => {
        const imgUrl = item.getAttribute('data-image');
        const img = new Image();
        img.src = imgUrl; 
    });
});


