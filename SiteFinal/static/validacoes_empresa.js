$(document).ready(function() {
    
    $('#form_empresa').submit(function(event) {
        let razao_social = $('#razao_social').val()
        let cnpj = $('#cnpj').val()
        if(razao_social == ''){
            alert('razao_social obrigatória')
            event.preventDefault();
        }

        if(cnpj.length != 14){
            alert('Campo cnpj não possui 14 caracteres!')
            event.preventDefault();
        }
    });
});