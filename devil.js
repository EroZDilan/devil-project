const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const items = document.querySelectorAll('.item');

let index = 0;

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', (event) => {

        setTimeout (() => {
            document.querySelector('.thumb .selected').classList.remove('selected');
            thumb.classList.add('selected');

        }, 100);
        
        thumbs.forEach(thum => {
            thum.classList.add('disabled');
            setTimeout(() => {
                
                thum.classList.remove('disabled');
            }, 450);
        });



        let anySelected = false;
        let current = event.target.parentElement.nextElementSibling;

        while (current !== null && !anySelected){
            anySelected = anySelected || current.matches('.selected');
            current = current.nextElementSibling;

            if(anySelected){
                items[index].classList.add('previously-active');
                setTimeout(() => {
                    document.querySelector('.item.previously-active').classList.remove('previously-active');
                }, 100);

                index = ind;
                items[index].classList.add('back-active');
                setTimeout(() => {
                    document.querySelector('.item.back-active').classList.remove('back-active');
                }, 100);

            }
        }
        

        index = ind;

        // Mover el slider
        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
        
        // Remover la clase 'active' de todos los items
        items.forEach(item => item.classList.remove('active'));
        // Añadir la clase 'active' solo al item seleccionado
        items[index].classList.add('active');
    });
});