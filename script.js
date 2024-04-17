// let btn = document.querySelector('button')
// let body = document.querySelector('body')

// btn.addEventListener('click', () => {
// body.classList.toggle('dark');
// btn.classList.toggle('btn1');
// })



let btnplus = document.getElementById('plus')
let btnminus = document.getElementById('minus')
let span = document.querySelector('span')

let counter = 0

btnplus.addEventListener('click',()=>{
    counter++
    luboy();
})

function luboy(){
    span.textContent=counter;
}
btnminus.addEventListener('click',()=>{
    counter--
    lyboy();
})

function lyboy(){
    span.textContent=counter;
}