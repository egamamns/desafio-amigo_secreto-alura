# desafio-amigo_secreto-alura
Em função da realizaçÃo do desafio "amigo secreto", desenvolvido pela plataforma Alura, programei a parte de JavaScript para que o site tornasse funcional.

Para isso, dividi o código em três blocos.

PRIMEIRO BLOCO:
![Screenshot 2025-03-16 181640](https://github.com/user-attachments/assets/46654713-0ac5-4d7d-891a-3f5da2ac796a)

Nesta primeira parte eu defini uma array para que os nome digitados no input fossem armazenados neste array para uso posterior. Além disso, criei a função adicionarAmigo(), para executar a parte de digitação do nome escolhido pelo usuário. Com isso, ao referenciar o arquivo HTML, declarei a variável "let nome" para que os valores do input fossem armazenados nesta variável. Após feito,  utilzei estruturas condicionais para que caso o espaço do input esteja sem digitação e o botão adicionar amigo fosse apertado, o "alert" precisaria aparecer para que algum nome seja declarado. com isso usei estruturas de repetição, o operador "===" para comparar o valor, e o return para que, caso a condição seja verdadeira, a função seja interrompida. Após isso, com o elemento "push", defini que os nomes fornecidos pelo usuário deveriam ser adicionados ao final da array. Defini que os valores fossem mostrados no console da página. Declarei a função mostrar() que será desenvolvida logo em seguida e defini que ao repassar todo este caminho o valor do input com id = "amigo" deveria estar vazio para que, dessa forma, outro nome fosse digitado.


SEGUNDO BLOCO:
![Screenshot 2025-03-16 181745](https://github.com/user-attachments/assets/d8ad3ccd-8252-4819-9304-0a04dea7ac20)

Já na segunda parte do projeto, criei a função mostrar(), com o objetivo de apresentar os nomes armazenados no array na pagina html. Dessa forma, declarei a variável "let lista" referenciando a class "name-list" coondizente com o bloco separado para a visualização dos nomes na lista, bloco este, já determinado no arquivo html. Após, usei o código 'lista.innerHTML = "";' para que os nomes que fossem aparecendo não se repetissem, ou seja, se eu não usasse este código, ao dar input no "nome1", por exemplo, e logo depois dar input no "nome2", ao visualizar os nomes armazenados na lista ficaria dessa forma: "nome1", "nome1", "nome2". Ou seja o "nome1" seria mostrado duas vezes sem necessidade. Seguindo em frente, usei a estrutura for e os elementos 'lista.innerHTML += "<li>" + ultimonome + "</li>"' para que seja possível os nomes serem vizualizados pelo usuário.


TERCEIRO BLOCO:
![Screenshot 2025-03-16 181810](https://github.com/user-attachments/assets/67ea7ba0-32f1-4b7f-b4ea-67fced50fede)

Ao final, há a terceira parte do projeto, em que criei a função sortearAmigo(), referindo-me ao botão "sortear amigo secreto". As trÊs primeiras linhas do projeto tiveram a função de ocultar os nomes que estavam aparecendo para o usuário -como determinado na função anterior- , para que, dessa forma, apareça somente o nome do sorteado em questão. As duas últimas linhas do projeto, utilizei propriedades de matemática como o math.floor -que tem a função de arredondar o número para o menor valor mais próximo-, e o math.random -que tem a função de escolher um número aleatório- além de usar a propriedade "length" para que o código seja percorrido somente na quantidade de elementos que terá a array previamente determinada, e dessa forma, o número sorteado fizesse referencia a algum nome do array, e assim, utilizando o código nomes[random], seria sorteado um nome. Ademais, me referi a class que determinava o resultado do sorteio no arquivo HTML, e defini que apresentasse a mensagem "O amigo secreto sorteado é: " + o sorteado da vez.


OBS: Inseri print para que fosse representado a parte em questão a qual estava detalhando. Caso não seja possível abrir a imagem, as descrições são, respectivamente, cada função do arquivo app.js incluso no repositório. 
