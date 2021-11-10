var carta1 = {
  nome: 'Harry Potter',
  imagem: 'https://i.pinimg.com/originals/8c/5c/33/8c5c3318c4e7762f1c747455777a9143.jpg',
  atributos: {
    ataque: 7,
    defesa: 8,
    magia:10
  }
}

var carta2 = {
  nome: ' Lord Voldemort',
  imagem:
    'https://gartic.com.br/imgs/mural/mf/mfsz/lord-voldemort-p-lipe-sexy.png',
  atributos: {
    ataque: 9,
    defesa: 8,
    magia:8
  }
}

var carta3 = {
  nome: 'Severus Snape',
  imagem:
    'https://gartic.com.br/imgs/mural/sa/sakurauchiha0/severus-snape-anime.png',
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 7
  }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina) {
    var numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  //exibirOpcoes()
  exibirCartaJogador()
}

/*function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ''

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    //Para fazer as bolinhas de scrool de opções, faça como a linha acima
  }
  opcoes.innerHTML = opcoesTexto
}
*/

function obtemAtributosSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].defaultValue
    }
  }
}

// function jogar() {
//   var atributoSelecionado = obtemAtributosSelecionado()
//   var elementoResultado = document.getElementById('resultado')
//   var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
//   var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

//   if (valorCartaJogador > valorCartaMaquina) {
//     elementoResultado.innerHTML = 'Você ganhou'
//   } else if( valorCartaMaquina>valorCartaJogador ){
//     elementoResultado.innerHTML='Você perdeu. A carta máquina é maior'

//   }else{
//     elementoResultado.innerHTML=('Empatou')
//   }

// }

function jogar() {
  var atributoSelecionado = obtemAtributosSelecionado()
  var divResultado = document.getElementById('resultado')

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>"
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>"
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou</p>"
  }

  divResultado.innerHTML = htmlResultado
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ''

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ' ' +
      cartaJogador.atributos[atributo] +
      '<br/>'
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ''

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ' ' +
      cartaMaquina.atributos[atributo] +
      '</p>'
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}
