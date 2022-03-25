var numeroSecreto = parseInt(Math.random() * 11)

var contador = 0;

function chutar() {
    if(contador < 3){
        contador ++
                
        var chute = parseInt(document.getElementById("valor").value)  
        if(chute == numeroSecreto){
            var elementoResultado = document.getElementById("resultado").innerHTML = `Parabéns, você acertou! &#127881; <br> O número sercreto era o ${numeroSecreto}`
        } else if(chute > numeroSecreto){
            var elementoResultado = document.getElementById("resultado").innerHTML = `Seu palpite está muito alto`
        } else if(chute < numeroSecreto){
            var elementoResultado = document.getElementById("resultado").innerHTML = `Seu palpite está muito baixo`
        }
      if (contador == 3 & numeroSecreto != chute){
        var buttonValor = document.getElementById("valor")
        buttonValor.setAttribute('disabled', true)
        var elementoResultado = document.getElementById("resultado").innerHTML = `Acabou sua chance! &#10060; <br> O número era ${numeroSecreto} <br> Recarregue a página para jogar novamente`
      }
    }
}