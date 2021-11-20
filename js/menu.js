const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

//console.log(menu)
//console.log(hamburguer)


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

//esto para que lo usas? cuando la barra estaba a la derecha
window.addEventListener('click', e=>{
    if(
        menu.classList.contains('spread') && 
        e.target != menu && 
        e.target !=hamburguer 
    )
    {
                menu.classList.toggle("spread")
    }
})