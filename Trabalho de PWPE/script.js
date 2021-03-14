// Obtem o ID da div do html e joga para const supercard

const supercard  = document.getElementById("supercard")

// Vetor de IMAGENS da pasta img



const Naruto = [
    
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'
];
const Bokunohero = [
    
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'
    
];

let codigodoHtml= '';    // Essa variavel ira receber as imagens 

// para cada posição percorrida do vetor, sera colocada em codigodoHtml e
// Tudo é jogado para ele.....
// => nao é um operador, mas uma notação para a função de seta

var bokunohero
var naruto 
var thema
var tiptema

function alteranaruto(){
    thema = Naruto;
    tiptema = "naruto";
    aplicaTema()
}
function alterabokunohero(){
    thema = Bokunohero;
    tiptema = "bokunohero";
    aplicaTema()
}
function aplicaTema(){
    codigodoHtml = '';
thema.forEach(img =>{

    
    codigodoHtml += `
    <div class="card" data-carta="${img}" >
        <div class="frontcard"><img src="img/${tiptema}/cover/cover.jpg"></div>
        <div class="backcard"> <img src="img/${tiptema}/imgs/${img}"></div>
    </div>
    ` ;      
});
supercard.innerHTML = codigodoHtml + codigodoHtml; 


    

// Terminado essa parte, sera colocado do tudo em supercard.innerHTML sendo a parte interna de html  
   // Nessa parte sera duplicada a quantidade de cartas

const cartas = document.querySelectorAll(".card")

var carta1;
var carta2;
var block = false;
var final = 0;
var feedback = 0;

function verif() {
    let comp = carta1.dataset.carta === carta2.dataset.carta?true:false;

    atualizaclique()

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
        final++
    }
    
    if(final == 12){
        setTimeout(() =>{
            alert("Parabéns !!");
            aplicaTema()
        },500)
        

    }
    // ! é Negação
    
}

function atualizaclique (){
    if(feedback <= 20){
    feedback++;
    document.getElementById("cliques").textContent = `${feedback}`
}
else{
    alert("Infelizmente você excedeu o numero maximo de cliques, tente novamente!!");
    feedback = 0;
    aplicaTema()
}
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
        
        block = false;
        carta1 = '';
        carta2 = '';

    },900)
    carta1.addEventListener('click',virar)
}





cartas.forEach(cart => cart.addEventListener('click', virar))

}
alteranaruto()