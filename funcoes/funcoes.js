
function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {

    let palavraOcultaArray = palavraOculta.split('') 
  
    for (let i = 0; i < palavraEscolhida.length; i++) { 

      if (palavraEscolhida[i] === letraDigitada) {  

        palavraOcultaArray[i] = letraDigitada 
      }
    }
  
    return palavraOcultaArray.join('') 
  }
  
  
  function validarLetraDigitada(letraDigitada){

    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){

      return true

    } else {

      return false
    }
  }
  
  function verificarJogoGanho(palavraOculta, palavraEscolhida) {

    if(palavraOculta === palavraEscolhida) {

      return true

    } else {

      return false

    }
  }
  
  
  function verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada){

    if(palavraEscolhida.includes(letraDigitada)){

      return true

    } else {

      return false

    }
  }
  
  
  function jogadasRestantes(erros) {

    return 4 - erros

  }
  
  function exibirMensagemFimDeJogo(statusJogo, palavraEscolhida) {

    if (statusJogo === 'venceu') {

      console.log("\n--------------VOCÊ VENCEU!-------------");
        console.log(`A palavra era: ${palavraEscolhida}`)

    } else {

      console.log("\n--------------VOCÊ PERDEU!_-------------");
        console.log(`A palavra era: ${palavraEscolhida}`);

    }
  }
  
  export {
    validarLetraDigitada,
    verificarJogoGanho,
    verificarLetraPresenteNaPalavra,
    jogadasRestantes,
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo
  };