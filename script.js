$(document).ready(function() {
    $("#form-tarefa").submit(function(event) {
        event.preventDefault(); 

        var novaTarefa = $("#nova-tarefa").val();
        var horarioTarefa = $("#horario-tarefa").val();

        if (novaTarefa.trim() !== "") {
            var tarefaComHorario = novaTarefa;
            if (horarioTarefa !== "") {
                tarefaComHorario += " - " + horarioTarefa;
            }

            $("#lista-tarefas").append("<li>" + tarefaComHorario + "</li>");
            $("#nova-tarefa").val("");
            $("#horario-tarefa").val(""); 
        }
    });

    $("#lista-tarefas").on("click", "li", function() {
        $(this).toggleClass("concluida"); 
    });

    function atualizarRelogio() {
        var agora = new Date();
        var horas = agora.getHours();
        var minutos = agora.getMinutes();
        var segundos = agora.getSeconds(); 
        horas = (horas < 10 ? "0" : "") + horas;
        minutos = (minutos < 10 ? "0" : "") + minutos;
    
        var horaFormatada = horas + ":" + minutos ;

        $("#relogio-digital").text(horaFormatada);
    }

    setInterval(atualizarRelogio, 1000); 
});