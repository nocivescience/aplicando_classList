const caso1=document.querySelector('.element1');
const caso2=document.querySelector('.element2');
function prueba(){
    caso1.classList.add('mystyle')
}
document.addEventListener('click',()=>{
    prueba()
})