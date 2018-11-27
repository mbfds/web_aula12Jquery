$(function(){
    var msg_erro = $('#erro');
    var msg_sucesso = $('#sucesso');
    var btnform = $('#btn_enviar');
    var txt = $('#nome').val();

    console.log(txt);

    $('#data').datepicker({
        showAnim : "explode",  // modo como o calendario vai aparecer
        numberOfMonths : 3,
        changeMonth : true,
        changeYear : true,
        isRTL : true,
    });  

    $('#menu').menu();

    msg_erro.hide();
    msg_sucesso.hide();

    btnform.click(function(){
        console.log('BTN FUNCIONOU!!!');
        var txt = $('#nome').val();
        
        if(txt == 'Julio Cesar' ){
            swal("Deu Baum", "Você digitou errado!", "success");
        }
        else{
            
            swal("Deu Ruim", "Você digitou errado!", "error");
        }

        return false;
    })
});


