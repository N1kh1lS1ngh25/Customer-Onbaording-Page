const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.steps');
const form_steps = document.querySelectorAll('.form-steps');

let active = 1;


nextButton.addEventListener('click', () => {
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
})

prevButton.addEventListener('click', () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
})


const updateProgress = () => {
    console.log('steps.length =>' + steps.length);
    console.log('active =>' + active);

    /*----------Toggle .active class for each list Item---------*/

    steps.forEach((steps, i) => {
        if (i == (active - 1)) {
            steps.classList.add('active');
            form_steps[i].classList.add('active');
            console.log('i =>' + i);
        } else {
            steps.classList.remove('active');
            form_steps[i].classList.remove('active');
        }
    })


    /*--------------enable or disable prev and Next button--------------*/

    if(active === 1){
        prevButton.disabled = true;
    }else if (active === steps.length){
        nextButton.disabled = true;
    }else{
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}
