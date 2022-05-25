const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById ('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .images')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var back = document.getElementById ('back')
var rolar = true

for(let i=0; i < quant.length; i++) {
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

    var pos = document.querySelectorAll('.balls div')

    for(let i=0; i < pos.length; i++) {
        pos[i].addEventListener('click', ()=>{
            atual = pos[i].id
            rolar = false
            slide()
            
        })
    }

    back.addEventListener('click', ()=>{
        atual--
        rolar = false
        slide()
    })
    next.addEventListener('click', ()=>{
        atual++
        rolar = false
        slide()
    })

    function slide(){
        if(atual>= quant.length){
            atual = 0
        }

        else if(atual < 0){
            atual = quant.length-1
        }

        document.querySelector('.imgAtual').classList.remove('imgAtual')
        imagem.style.marginLeft = -325*atual+'px'
        document.getElementById(atual).classList.add('imgAtual')

    }
    setInterval(()=>{
        if(rolar){	
        atual++
        slide()
        }
        else{
            rolar = true
        }
    },4000)
    