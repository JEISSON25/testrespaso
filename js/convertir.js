$(document).ready(function(){

    $("#calcular").click(function(){
        let farengei = 0
        let celcius = $("#celcius").val()

        farengei = celcius * 1.8
        
        $("#resultado").html(farengei)
    })

})