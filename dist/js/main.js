// navbar
// const berger = document.querySelector('hamburger');
// console.log(berger);    

// berger.addEventListener('click', function(e){
//     e.target.classList.toggle('hidden');
// }

// NAVBAR
let list = document.querySelector('ul');
const navList = document.getElementById('list-nav');
// console.log(navList);


function Menu(e) {
    if (e.name === 'menu') {
        e.name = 'close';
        list.classList.add('top-[80px]');
        list.style.opacity = '100';
        // list.classList.add('opacity-100');
    } else {
        e.name = 'menu';
        list.classList.remove('top-[80px]');
        list.style.opacity = '0';
        // list.classList.remove('opacity-100');
    }
}


