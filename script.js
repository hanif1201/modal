'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for(let i = 0; i< btnsOpenModal.length ; i++)
btnsOpenModal[i].addEventListener('click', function(){
    console.log('button clicked');
    modal.classList.remove('hidden');

    // modal.style.display = 'block';

    overlay.classList.remove('hidden')

});

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    console.log('e.key');

    if (e.key==='Escape'){
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }

    
});
