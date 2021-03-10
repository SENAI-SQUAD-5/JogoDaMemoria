// Obtem o ID da div do html e joga para const supercard

const supercard  = document.getElementById("supercard")


// Vetor de IMAGENS da pasta img
const imagens = [
  
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg'
];

let codigodoHtml= '';    // Essa variavel ira receber as imagens 

// para cada posição percorrida do vetor, sera colocada em codigodoHtml e
// Tudo é jogado para ele.....
// => nao é um operador, mas uma notação para a função de seta

imagens.forEach(img =>{

    codigodoHtml += `
    <div class="-card" >
        <div class="-frontcard"><img src="img/frentenaruto2.jpg"></div>
        <div class="-backcard"> <img src="img/${img}"></div>
    </div>
    ` ;      
});
// Terminado essa parte, sera colocado do tudo em supercard.innerHTML sendo a parte interna de html  
supercard.innerHTML = codigodoHtml + codigodoHtml;    // Nessa parte sera duplicada a quantidade de cartas

