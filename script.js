let menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
    item.addEventListener ('click', selectLink)
)

let btnExp = document.querySelector('#btn-exp')
let menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
}) 

let botao = document.querySelector("button")


botao.addEventListener('click', function(){
    alert('leonardojcv@outlook.com')
})
botao.addEventListener('mouseover', function(){
    botao.classList.add('fade')
})
botao.addEventListener('mouseout', function(){
    botao.classList.remove('fade')
})