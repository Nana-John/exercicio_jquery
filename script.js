$(document).ready(function() {
    $("#form-tarefa").submit(function(event) {
        event.preventDefault(); 

        const listaTarefas = document.getElementById('lista-tarefas'); 

        function adicionarTarefa(tarefa) {
            const novoItem = document.createElement('li');
            const numeroItem = listaTarefas.children.length + 1; 

            // Cria o span para o texto da tarefa
            const spanTarefa = document.createElement('span');
            spanTarefa.textContent = `${numeroItem}. ${tarefa}`; 

            // Cria o botão de excluir
            const botaoExcluir = document.createElement('button');
            botaoExcluir.classList.add('excluir');
            const iconeExcluir = document.createElement('i');
            iconeExcluir.classList.add('fas', 'fa-trash-alt');
            botaoExcluir.appendChild(iconeExcluir);

            // Cria o botão de editar
            const botaoEditar = document.createElement('button');
            botaoEditar.classList.add('editar');
            const iconeEditar = document.createElement('i');
            iconeEditar.classList.add('fas', 'fa-edit');
            botaoEditar.appendChild(iconeEditar);

            // Adiciona os elementos ao novo item da lista 
            novoItem.appendChild(spanTarefa);
            novoItem.appendChild(botaoExcluir);
            novoItem.appendChild(botaoEditar);

            listaTarefas.appendChild(novoItem); 
        }

        var novaTarefa = $("#nova-tarefa").val();
        var horarioTarefa = $("#horario-tarefa").val();

        if (novaTarefa.trim() !== "") {
            var tarefaComHorario = novaTarefa;
            if (horarioTarefa !== "") {
                tarefaComHorario += " - " + horarioTarefa;
            }

            adicionarTarefa(tarefaComHorario);

            $("#nova-tarefa").val("");
            $("#horario-tarefa").val(""); 
        }
    });

    // ... (resto do seu código)

    function atualizarRelogio() {
        var agora = new Date();
        var horas = agora.getHours();
        var minutos = agora.getMinutes();
        var segundos = agora.getSeconds();

        horas = (horas < 10 ? "0" : "") + horas;
        minutos = (minutos < 10 ? "0" : "") + minutos;


        var horaFormatada = horas + ":" + minutos;

        $("#relogio-digital").text(horaFormatada); // Atualiza o relógio no HTML
    }

    setInterval(atualizarRelogio, 1000); 
});