const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');




const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
//this + in front of window converts a string to a number

    

    if (pipePosition <= 120  && pipePosition > 0
         && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = '../img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
    }


},10);

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');

    },500);

 


}


document.addEventListener('keydown', jump);

