$(document).ready(function() {
    
    $('#form_cliente').submit(function(event) {
        let nome = $('#nome').val()
        let data = $('#data').val()
        if(nome == ''){
            alert('Nome obrigatório!')
            event.preventDefault();
        }

        if(data == ''){
            alert('Data obrigatória!')
            event.preventDefault();
        }
    });
});