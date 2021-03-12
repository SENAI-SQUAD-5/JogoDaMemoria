// Obtem o ID da div do html e joga para const supercard

const supercard  = document.getElementById("supercard")

// Vetor de IMAGENS da pasta img



const imagens = [
    
    'naruto/img1.jpg',
    'naruto/img2.jpg',
    'naruto/img3.jpg',
    'naruto/img4.jpg',
    'naruto/img5.jpg',
    'naruto/img6.jpg'
];

let codigodoHtml= '';    // Essa variavel ira receber as imagens 

// para cada posição percorrida do vetor, sera colocada em codigodoHtml e
// Tudo é jogado para ele.....
// => nao é um operador, mas uma notação para a função de seta

imagens.forEach(img =>{

    codigodoHtml += `
    <div class="card" data-carta="${img}" >
        <div class="frontcard"><img src="img/naruto/cover.jpg"></div>
        <div class="backcard"> <img src="img/${img}"></div>
    </div>
    ` ;      
});
// Terminado essa parte, sera colocado do tudo em supercard.innerHTML sendo a parte interna de html  
supercard.innerHTML = codigodoHtml + codigodoHtml;    // Nessa parte sera duplicada a quantidade de cartas

const cartas = document.querySelectorAll(".card")

let carta1;
let carta2;
let block = false;


function verif() {
    let comp = carta1.dataset.carta === carta2.dataset.carta?true:false;
   
    if(!comp){
    remo();
}
    else if(comp)
    {
        carta1.removeEventListener('click',virar)
        carta2.removeEventListener('click',virar)
        block = null;
        carta1 = null;
        carta2 = null;
    }

    // ! é Negação
    
}

function virar(){

    if(block) return false;
    this.classList.add("virar")

    if(!carta1){
    carta1 = this;
    carta1.removeEventListener('click',virar)
    return false;
}
    
    carta2 = this

    verif();
    //console.log(carta1);
}


function remo(){
    block = true;
    setTimeout(() =>{
        carta1.classList.remove("virar")
        carta2.classList.remove("virar")
        block = false
        carta1 = null;
        carta2 = null;

    },900)
}





cartas.forEach(cart => cart.addEventListener('click', virar))

