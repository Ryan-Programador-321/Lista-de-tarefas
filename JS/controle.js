// Associa os IDs do HTML com variáveis no JS.
let input = document.getElementById('inputTarefa_id');

let btnAdd = document.getElementById('btn-add_id');

let main = document.getElementById('areaLista_id');

// Contador usado para dar um ID único a cada tarefa
let contador = 0

// FUNÇÃO QUE ADICIONA UMA NOVA TAREFA NA "TAG PRINCIPAL ONDE FICAM TODAS AS TAREFAS". 
function addTarefa() {

    // Associa o valor digitado no input a uma nova variável.
    let valorInput = input.value;

    // Condicional que diz: se o valor digitado no input for diferente de vazio, diferente de nullo e diferente indefinido,
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        // adicione mais uma unidade ao contador pra cada tarefa ter um id único,
        ++contador

        // Crie uma varivel que armazene o "modelo inicial de uma tarefa" do HTML (com modificações como: IDs unicos e eventos de click),
        let novoItem = 
        
        `<!-- A div principal onde fica só uma tarefa passa ter a variável 'contador' que vai dar um numero de identificação -->
        
        <div id="${contador}_id" class="item_cl">

        

        <!-- A primeira div-filha agora tem um evento de click associado a função 'marcarTarefa' que contem a variável 'contador' e um id com a variável 'contador' -->

<div onclick="marcarTarefa(${contador})" class="itemIcone_cl"><span id="icone-${contador}_id" class="material-symbols-outlined"> radio_button_unchecked</span></div>



<!-- A segunda div-filha agora tem um evento de click associado a a função 'marcarTarefa' que contem a variável 'contador' também e no lugar do 'texto de exemplo' tem a variável 'valorInput' -->

<div onclick="marcarTarefa(${contador})" class="itemNome_cl">${valorInput}</div>



<!-- A terceira div-filha agora tem um evento de click associado a a função 'deletar' que contem a variável 'contador' que identifica o número da div que deve ser deletada -->

<div class="itemBotao_cl"> <button onclick="deletar(${contador})" class="delete_cl"> <span class="material-symbols-outlined">delete</span> Deletar</button></div>



</div>`;

//depois disso armazene essa variável (que contem o modelo de uma tarefa) dentro "Tag principal onde ficam todas as tarefas",
        main.innerHTML += novoItem;

        // zere o campo input
        input.value = "";

        // e por ultimo...
        
        // o deixe em foco.
        input.focus();
    }
}

//FUNÇÃO QUE DELETA UMA TAREFA 

// (EXPLICAÇÃO: Quando uma tarefa é criada, um id de uma "div principal onde fica só uma tarefa" é criado junto, nesse id está a variálvel do 'contador', que automaticamente é incrementado, logo, se eu crio uma tarefa, o id dela será 1 já que o contador começa em 0 (se eu tivesse criado mais uma tarefa, o seu id seria 2 e assim por diante). 

// Na terceira div-filha há um evento de click chamando a função 'deletar' que também possui como valor a variável do 'contador'. Essa função identifica um valor qualquer (logo pode ser qualquer nome, nesse caso o nome é 'id') e cria uma variável chamada 'tarefa' que se associa ao nome 'id' que possui o contador vindo do valor da função no evento de click e depois, a variável tarefa é removida, ou seja, 'id' é removido.

// Logo o que acontece, é que a função deletar tem como valor o número do contador, que nesse caso seria 1 já que é a primeira tarefa e 1 também é o id da "div principal onde fica só uma tarefa" já que seu id também é tem como valor a variável do contador, isso quer dizer que a função deletar está puxando 'id' = 1 (o número do contador), está criando uma variavel chamada 'tarefa' e a está associando a 'id' de "function deletar(id), que seria igual a function deletar(${contador}), que seria igual a function deletar(1)", que está associado ao contador da terceira div filha na chamada da função e esse contador possui o mesmo valor do id da "div principal onde fica só uma tarefa", logo quando a variável tarefa é removida toda "div principal onde fica só uma tarefa" é removida. ,))
function deletar(id) {
    var tarefa = document.getElementById(id+ '_id');
    tarefa.remove();
}

//FUNÇÃO QUE MARCA A TAREFA COMO FEITA/CONCLUIDA.

// Define uma função e associa seu valor com o nome de 'id'.
function marcarTarefa(id) {

    // Faz uma variável que se associa ao nome 'id'
    var item = document.getElementById(id+ '_id');

    // Faz uma outra variável que se associa com a string 'icone_' + o nome 'id'
    var icone = document.getElementById('icone-' + id + '_id');

    // Condicional que diz: se onde 'o valor item' estiver houver a classe clicado,
    if (item.classList.contains('clicado_cl')) {
        
        // remova a classe clicado,
        item.classList.remove('clicado_cl');

        // substitua tudo que tiver dentro de icone( icone está dentro de uma span) por 'radio_button_unchecked'
        icone.innerHTML = 'radio_button_unchecked';

        // aplique os seguintes extilos (no caso estilo nenhum)
        icone.style.color = '';
        icone.style.backgroundColor = '';
        icone.style.borderRadius = '';

    // se não:    
    } else {
        
        // adicione a classe clicado,
        item.classList.add('clicado_cl');

        // substitua tudo que tiver dentro de icone( icone está dentro de uma span) por 'check_circle'
        icone.innerHTML = 'check_circle';

        // e por fim

        // aplique os seguintes extilos 
        icone.style.color = 'rgb(255, 255, 255)';
        icone.style.backgroundColor = 'rgb(0, 151, 0)';
        icone.style.borderRadius = '25px';

        // LEVA A TAREFA PARA O FINAL DA LISTA
main.appendChild(item);
    }
}


// associa input a um novo evento de pressionar e depois 'soltar' uma tecla através de uma função com valor event que define o que 'keyup' vai fazer ao assionar a função
input.addEventListener('keyup', function (event) {

    // Condicional que diz: se o código da tecla do evento for igual a 13
    if (event.keyCode === 13) {

        // impeça a tecla de fazer o que faz por padrão(é só uma precaução)↓
        event.preventDefault();

        // e por fim

        // clique em 'btnAdd'.
        btnAdd.click();
    }
})

