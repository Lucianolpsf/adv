const navigation = document.querySelector('.navigation')
const burgerMenu = document.querySelector('.toggle-menu')

/*--------------Funcionalidade de operar o menu humburger -------------*/
function toggleMenu(){
    burgerMenu.addEventListener('click', ()=>{
        navigation.classList.toggle('toggle-nav')
      })
      
    navigation.addEventListener('click', ()=>{
        navigation.classList.toggle('toggle-nav')
    })
}

export default toggleMenu