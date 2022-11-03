var pessoa = {
    nome: 'Grazi',
    idade: 20,
    profissao: "monitora",
    faculdade: true,
}

  pessoa.nome
  console.table(pessoa)

  //Objeto com funÇoes ou metodos

  var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado+ lado
        },
       area: function (lado1){
       return lado1 * lado1
    }
    
    }

    //Arrays

    //È um grupo de valores geralmente relacionados. servem para guardamos diferentes valores em uma unica variavel

    var videoGames = ['PS4', 'Xbox', 'Switch']

    console.log(videoGames.length)