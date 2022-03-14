const touches=[...document.querySelectorAll('.btn-light')]
const display=document.getElementById('displ')



const listKeycode=touches.map(touche=>touche.dataset.key )

document.addEventListener('keydown',(e)=>{
    const valeur=e.keyCode.toString();
    
    calculer(valeur)
    
})
document.addEventListener('click',(e)=>{
    
    const valeur=e.target.dataset.key;
    calculer(valeur)
    
})

const calculer = (valeur)=>{
    if( listKeycode.includes(valeur)){
        switch (valeur) {
            case '67':
                display.textContent=''
                
                break;
            case '13':
             const calcu=eval(display.innerHTML)
             display.textContent=calcu
            break;
        
            default:
                const indexNumber=listKeycode.indexOf(valeur)
                const touch=touches[indexNumber]
                display.textContent += touch.innerHTML
                break;
        }

    }

}
window.addEventListener('error',(e)=>{alert(`There is an error in your typing which: ${e.message}`)})