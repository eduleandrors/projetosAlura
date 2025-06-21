alert("Boas vindas ao jogo do número secreto");
let dificuldade = 1000;
let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

while (chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${dificuldade}:`);

    // se o chute for igual ao número secreto

    if (chute == numeroSecreto) {
        break;   
    }
    
    // se o chute for igual ao número secreto
    else{
        
        if(chute > numeroSecreto){
            alert(`O número secreto é MENOR que ${chute}!`);
        } else{
            alert(`O número secreto é MAIOR que ${chute}!`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);
