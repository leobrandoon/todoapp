$(document).ready(function(ev) {
    $('#boton').on('click', function(ev) {
        var tareas = $('#nueva_tarea').val();
        if (tareas == "") {
            return;
        }

        var tarea = `
        <div class="lista_tareas row">
            <div class="col-md-1">
                <input type="checkbox" class="check_box">
            </div>
            <div class="col-md-10">
                <p>` + tareas + `</p>
            </div>
            <div class="col-md-1 eliminar">
                <img src="Todo_app_files/icon.png" width="25px" alt="">
            </div>
        </div>
        `

        $('#box_check').append(tarea);
        $('#nueva_tarea').val('');

    });
    $(document).on('click', '.check_box', function() {
        var row = $(this).parent().parent();
        var p = row.find('p');
        p.toggleClass('subrayado');

    });

    $(document).on('click', '.eliminar', function() {
        $(this).parent().slideUp(1000, function() {
            $(this).remove();
        });
    })
});