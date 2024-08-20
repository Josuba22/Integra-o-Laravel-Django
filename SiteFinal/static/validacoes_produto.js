$(document).ready(function() {
    
    $('#form_produto').submit(function(event) {
        let nome = $('#nome').val()
        let valor = $('#valor').val()
        let descricao = $('#descricao').val()
        if(nome == ''){
            alert('Nome obrigatório!')
            event.preventDefault();
        }

        if(valor == ''){
            alert('Valor obrigatório!')
            event.preventDefault();
        }

        if(descricao == ''){
            alert('Descrição obrigatória!')
            event.preventDefault();
        }
    });
});