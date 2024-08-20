$(document).ready(function(){
    
    $('#form_produto').submit(function(event){
        let nome = $('#nome').val()
        let valor = $('#valor').val()
        if(nome ==''){
            alert('Nome Obrigatório!')
            event.preventDefault();
        }
    });
});