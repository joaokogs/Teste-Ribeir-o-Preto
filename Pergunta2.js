function fibonacci(termo){
    var resposta;
    var penultimo=0, ultimo=1;
    var numero;
    aux = false;
  
    if(termo<=2)
     numero = termo-1;
    else{
     count=3;
     while(count<=termo){
      numero = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = numero;
      count++;
      if(numero == termo){
        aux = true;
      }
     }
    }

    if(aux == true){
        resposta = "O número pertence a sequência!"
    } else{
        resposta = "O número não pertence a sequência!"
    }
  
    console.log(resposta)
  }

  fibonacci(23);
