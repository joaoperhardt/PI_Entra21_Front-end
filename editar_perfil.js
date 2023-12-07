$(document).ready(function () {
    
    function validarESerializar() {
       
        var nome = $('#name').val();
        var cep = $('#cep').val();
        var email = $('#email').val();
        var telefone = $('#phone').val();

        
        if (telefone.length !== 11) {
            alert('Por favor, insira um número de telefone válido com 11 dígitos.');
            return false;
        }

       
        if (!email.includes('@')) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return false;
        }

      
        var formData = {
            nome: nome,
            cep: cep,
            email: email,
            telefone: telefone,
        };

        
        return formData;
    }

    
    $('form.profile-form').submit(function (event) {
        event.preventDefault(); 

       
        var jsonData = validarESerializar();

        
        if (jsonData) {
            
            console.log(JSON.stringify(jsonData));

            
        }
    });
});