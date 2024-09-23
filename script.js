$(document).ready(function() {
    $("#form-tarefa").submit(function(event) {
        event.preventDefault(); 
    
        $("#lista-tarefas").on("click", "li", function() {
            marcarTarefaComoConcluida(this); // 'this' se refere ao elemento 'li' clicado
        });

        const listaTarefas = document.getElementById('lista-tarefas'); 

        function adicionarTarefa(tarefa) {
            const novoItem = document.createElement('li');
            const numeroItem = listaTarefas.children.length + 0; 

            const spanTarefa = document.createElement('span');
            spanTarefa.textContent = `${numeroItem}. ${tarefa}`; 

            novoItem.appendChild(spanTarefa);

            listaTarefas.appendChild(novoItem); 
        }

        function marcarTarefaComoConcluida(tarefa) {
            tarefa.classList.add('concluida');
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

    function atualizarRelogio() {
        var agora = new Date();
        var horas = agora.getHours();
        var minutos = agora.getMinutes();

        horas = (horas < 10 ? "0" : "") + horas;
        minutos = (minutos < 10 ? "0" : "") + minutos;


        var horaFormatada = horas + ":" + minutos;

        $("#relogio-digital").text(horaFormatada); // Atualiza o relógio no HTML
    }

    setInterval(atualizarRelogio, 1000); 
});