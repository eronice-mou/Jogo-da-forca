
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra004 = {
        nome: "MORCEGO",
        categoria: "ANIMAIS"
    },
    palavra00 = {
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },
    palavra006 = {
        nome: "PANQUECA",
        categoria: "COMIDA"
    },
    palavra007 = {
        nome: "CREPIOCA",
        categoria: "COMIDA"
    },
    palavra008 = {
        nome: "FEIJOADA",
        categoria: "COMIDA"
    },
    palavra009 = {
        nome: "LASANHA",
        categoria: "COMIDA"
    },
    palavra010 = {
        nome: "MELANCIA",
        categoria: "FRUTAS"
    },
    palavra011 = {
        nome: "ABACATE",
        categoria: "FRUTAS"
    },
    palavra012 = {
        nome: "CIRIGUELA",
        categoria: "FRUTAS"
    },
    palavra013 = {
        nome: "MARACUJA",
        categoria: "FRUTAS"
    },
    palavra014 = {
        nome: "BURITI",
        categoria: "FRUTAS"
    }

]

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disable = true;
    if( tentativas > 0){
        mudarEstiloLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
    mudarEstiloLetra("tecla-" + letra);
}

function mudarEstiloLetra(tecla){
    document.getElementById(tecla).style.background = "#0000CD";
    document.getElementById(tecla).style.color = "#ffffff";
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url(./img/img2.png)";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url(./img/img3.png)";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url(./img/img4.png)";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url(./img/img5.png)";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url(./img/img6.png)";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url(./img/img7.png)";
            break;
            
    }
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("Ops!", "Não foi dessa vez. A palavra secreta era <br>" + palavraSecretaSorteada);
        }
        
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if (vitoria == true){
        abreModal("Parabéns", "Você venceu!");

        tentativas = 0;
    }

}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}


let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
})

