$(document).ready(function() {
    $("#form-tarefa").submit(function(event) {
        event.preventDefault(); 

        const listaTarefas = document.getElementById('lista-tarefas'); 

        function adicionarTarefa(tarefa) {
            const novoItem = document.createElement('li');
            const numeroItem = listaTarefas.children.length + 0; 

            // Cria o span para o texto da tarefa
            const spanTarefa = document.createElement('span');
            spanTarefa.textContent = `${numeroItem}. ${tarefa}`; 

            // Adiciona os elementos ao novo item da lista (correção aqui)
            novoItem.appendChild(spanTarefa);


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


    // Evento de clique para marcar/desmarcar como concluída
    $("#lista-tarefas").on("click", "li", function(event) {
        // Verifica se o clique foi no botão de excluir ou editar
        if ($(event.target).hasClass('excluir') || $(event.target).hasClass('editar')) {
            return; // Se sim, não faz nada (para evitar marcar/desmarcar)
        }

        $(this).toggleClass("concluida"); 
    });

    // Evento de clique para excluir tarefa
    $("#lista-tarefas").on("click", ".excluir", function() {
        $(this).parent().remove(); // Remove o item da lista (pai do botão)

        // Renumerar os itens restantes
        $("#lista-tarefas li").each(function(index) {
            $(this).children('span').text((index + 1) + ". " + $(this).children('span').text().split('. ')[1]);
        });
    });

    // Evento de clique para editar tarefa (implementação básica)
    $("#lista-tarefas").on("click", ".editar", function() {
        const tarefaSpan = $(this).siblings('span');
        const tarefaOriginal = tarefaSpan.text().split('. ')[1]; // Obtém o texto original da tarefa

        const novaTarefa = prompt("Editar tarefa:", tarefaOriginal);

        if (novaTarefa !== null && novaTarefa.trim() !== "") {
            tarefaSpan.text(tarefaSpan.text().split('. ')[0] + ". " + novaTarefa); 
        }
    });

    function atualizarRelogio() {
        // ... (resto do seu código para atualizar o relógio)
    }

    setInterval(atualizarRelogio, 1000); 
});