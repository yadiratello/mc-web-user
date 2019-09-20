$(document).ready(function () {
 
//--------------------------Menu lateral general---------------------------------
    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('d-block');
        $('.icono-menu').removeClass('d-none');
        
    });
    
    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('d-block');
        $('.collapse.in').toggleClass('in');
        $('.icono-menu').addClass('d-none');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
//--------------------------Home:Seleccion de Tipo de propiedad---------------------------------
    //MOVIL
    $('#prop-casa').on('click', function () {
        $('#prop-casa').addClass('active');
        $('#prop-departamento').removeClass('active');
        $('#prop-oficina').removeClass('active');
        $('#prop-local').removeClass('active');
        $('#prop-terreno').removeClass('active');
        $('#prop-otros').removeClass('active');
        //casa
        $('#prop-casa .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-casa").attr("src","img/vector/casa-active.svg");
        //Depa
        $('#prop-departamento .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento").attr("src","img/vector/departamento.svg");  
        //oficina
        $('#prop-oficina .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-departamento').on('click', function () {
        $('#prop-casa').removeClass('active');
        $('#prop-departamento').addClass('active');
        $('#prop-oficina').removeClass('active');
        $('#prop-local').removeClass('active');
        $('#prop-terreno').removeClass('active');
        $('#prop-otros').removeClass('active');
       
        //casa
        $('#prop-casa .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento .tipo-propiedad-content').removeClass('bg-square-prop'); 
        $("#img-departamento").attr("src","img/vector/departamento-active.svg");  
        //oficina
        $('#prop-oficina .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-oficina').on('click', function () {
        $('#prop-casa').removeClass('active');
        $('#prop-departamento').removeClass('active');
        $('#prop-oficina').addClass('active');
        $('#prop-local').removeClass('active');
        $('#prop-terreno').removeClass('active');
        $('#prop-otros').removeClass('active');
         
        //casa
        $('#prop-casa .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-oficina").attr("src","img/vector/oficina-active.svg");
        //local
        $('#prop-local .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-local').on('click', function () {
        $('#prop-casa').removeClass('active');
        $('#prop-departamento').removeClass('active');
        $('#prop-oficina').removeClass('active');
        $('#prop-local').addClass('active');
        $('#prop-terreno').removeClass('active');
        $('#prop-otros').removeClass('active');
         
        //casa
        $('#prop-casa .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-local").attr("src","img/vector/local-active.svg");
        //terreno
        $('#prop-terreno .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-terreno').on('click', function () {
        $('#prop-casa').removeClass('active');
        $('#prop-departamento').removeClass('active');
        $('#prop-oficina').removeClass('active');
        $('#prop-local').removeClass('active');
        $('#prop-terreno').addClass('active');
        $('#prop-otros').removeClass('active');
         
        //casa
        $('#prop-casa .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-terreno").attr("src","img/vector/terreno-active.svg");
        //otros
        $('#prop-otros .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-otros').on('click', function () {
        $('#prop-casa').removeClass('active');
        $('#prop-departamento').removeClass('active');
        $('#prop-oficina').removeClass('active');
        $('#prop-local').removeClass('active');
        $('#prop-terreno').removeClass('active');
        $('#prop-otros').addClass('active');
         
        //casa
        $('#prop-casa .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-otros").attr("src","img/vector/vector-otros-active.svg");
    });

    //DESKTOP
    //--------------------------Home:Seleccion de Tipo de propiedad---------------------------------
    $('#prop-casa-d').on('click', function () {
        $('#prop-casa-d').addClass('active');
        $('#prop-departamento-d').removeClass('active');
        $('#prop-oficina-d').removeClass('active');
        $('#prop-local-d').removeClass('active');
        $('#prop-terreno-d').removeClass('active');
        $('#prop-otros-d').removeClass('active');
        //casa
        $('#prop-casa-d .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-casa-d").attr("src","img/vector/casa-active.svg");
        //Depa
        $('#prop-departamento-d .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento-d").attr("src","img/vector/departamento.svg");  
        //oficina
        $('#prop-oficina-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina-d").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local-d").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno-d").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros-d").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-departamento-d').on('click', function () {
        $('#prop-casa-d').removeClass('active');
        $('#prop-departamento-d').addClass('active');
        $('#prop-oficina-d').removeClass('active');
        $('#prop-local-d').removeClass('active');
        $('#prop-terreno-d').removeClass('active');
        $('#prop-otros-d').removeClass('active');
       
        //casa
        $('#prop-casa-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa-d").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento-d .tipo-propiedad-content').removeClass('bg-square-prop'); 
        $("#img-departamento-d").attr("src","img/vector/departamento-active.svg");  
        //oficina
        $('#prop-oficina-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina-d").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local-d").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno-d").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros-d").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-oficina-d').on('click', function () {
        $('#prop-casa-d').removeClass('active');
        $('#prop-departamento-d').removeClass('active');
        $('#prop-oficina-d').addClass('active');
        $('#prop-local-d').removeClass('active');
        $('#prop-terreno-d').removeClass('active');
        $('#prop-otros-d').removeClass('active');
         
        //casa
        $('#prop-casa-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa-d").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento-d .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento-d").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina-d .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-oficina-d").attr("src","img/vector/oficina-active.svg");
        //local
        $('#prop-local-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local-d").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno-d").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros-d").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-local-d').on('click', function () {
        $('#prop-casa-d').removeClass('active');
        $('#prop-departamento-d').removeClass('active');
        $('#prop-oficina-d').removeClass('active');
        $('#prop-local-d').addClass('active');
        $('#prop-terreno-d').removeClass('active');
        $('#prop-otros-d').removeClass('active');
         
        //casa
        $('#prop-casa-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa-d").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento-d .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento-d").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina-d").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local-d .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-local-d").attr("src","img/vector/local-active.svg");
        //terreno
        $('#prop-terreno-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno-d").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros-d").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-terreno-d').on('click', function () {
        $('#prop-casa-d').removeClass('active');
        $('#prop-departamento-d').removeClass('active');
        $('#prop-oficina-d').removeClass('active');
        $('#prop-local-d').removeClass('active');
        $('#prop-terreno-d').addClass('active');
        $('#prop-otros-d').removeClass('active');
         
        //casa
        $('#prop-casa-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa-d").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento-d .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento-d").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina-d").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local-d").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno-d .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-terreno-d").attr("src","img/vector/terreno-active.svg");
        //otros
        $('#prop-otros-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros-d").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-otros-d').on('click', function () {
        $('#prop-casa-d').removeClass('active');
        $('#prop-departamento-d').removeClass('active');
        $('#prop-oficina-d').removeClass('active');
        $('#prop-local-d').removeClass('active');
        $('#prop-terreno-d').removeClass('active');
        $('#prop-otros-d').addClass('active');
         
        //casa
        $('#prop-casa-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa-d").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento-d .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento-d").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina-d").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local-d").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno-d .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno-d").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros-d .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-otros-d").attr("src","img/vector/vector-otros-active.svg");
    });

    //Botón guardar (estrella)
    $('.btn-guardar').on('click',function () {
        var idBtn = $(this).attr("id");
        if($('#'+idBtn).hasClass("active")){
            $('#'+idBtn).removeClass("active");
            $('#'+idBtn).attr('src','img/vector/me-interesa.svg');
        }else{
            $('#'+idBtn).addClass("active");
            $('#'+idBtn).attr('src','img/vector/me-interesa-active.svg');
        }
    })

//--------------------------------------Filtro-------------------------------------------------------  
    $('.text-tags').on('click',function () {  
        var idTag = $(this).attr("id");
        if($('#'+idTag).hasClass("active")){
            $('#'+idTag).removeClass("active");
        }else{
            $('#'+idTag).addClass("active");
        }
    });

    //Características del inmueble
    //Dormitorios
    $('#restar-dormitorios').on('click',function () {
        var valorCantDorm = $("#input-dormitorios").val();
        if(valorCantDorm > 1 ){
            $("#input-dormitorios").val(parseInt(valorCantDorm)-1);
        }
    });
    $('#sumar-dormitorios').on('click',function () {
        var valorCantDorm = $("#input-dormitorios").val();       
        $("#input-dormitorios").val(parseInt(valorCantDorm)+1);
    });
    //Baños
    $('#restar-banos').on('click',function () {
        var valorCantDorm = $("#input-banos").val();
        if(valorCantDorm > 1 ){
            $("#input-banos").val(parseInt(valorCantDorm)-1);
        }
    });
    $('#sumar-banos').on('click',function () {
        var valorCantDorm = $("#input-banos").val();       
        $("#input-banos").val(parseInt(valorCantDorm)+1);
    });
    //Cochera
    $('#restar-cochera').on('click',function () {
        var valorCantDorm = $("#input-cochera").val();
        if(valorCantDorm > 1 ){
            $("#input-cochera").val(parseInt(valorCantDorm)-1);
        }
    });
    $('#sumar-cochera').on('click',function () {
        var valorCantDorm = $("#input-cochera").val();       
        $("#input-cochera").val(parseInt(valorCantDorm)+1);
    });

//--------------------------Agregar "Me interesa": Buscador superior---------------------------------    
    //MANUALMENTE ON
    $('#opcion-manual').on('click', function () {
        $('#opcion-buscador').removeClass('active');
        $('#opcion-manual').addClass('active');
        
        //Manualmente
        $('#opcion-manual .tipo-busqueda-content').removeClass('bg-square-prop');     
        $("#img-manual").attr("src","img/vector/vector-manual-active.svg");
        //Buscador
        $('#opcion-buscador .tipo-busqueda-content').addClass('bg-square-prop'); 
        $("#img-buscador").attr("src","img/vector/lupa.svg");

        $('#busqueda-buscador').addClass('d-none');
        $('#busqueda-buscador').removeClass('d-block');
        $('#busqueda-manual').addClass('d-block');
        $('#busqueda-manual').removeClass('d-none'); 
    });
       
    //BUSCADOR ON
    $('#opcion-buscador').on('click', function () {
        $('#opcion-buscador').addClass('active');
        $('#opcion-manual').removeClass('active');
        
        //Manualmente
        $('#opcion-manual .tipo-busqueda-content').addClass('bg-square-prop');     
        $("#img-manual").attr("src","img/vector/vector-manual.svg");
        //Buscador
        $('#opcion-buscador .tipo-busqueda-content').removeClass('bg-square-prop'); 
        $("#img-buscador").attr("src","img/vector/lupa-active.svg");
       
        $('#busqueda-manual').addClass('d-none');
        $('#busqueda-manual').removeClass('d-block');
        $('#busqueda-buscador').addClass('d-block');
        $('#busqueda-buscador').removeClass('d-none');
    });

    //--------------Agregar "Me interesa":Seleccion de Tipo de propiedad-------------
    $('#prop-casa2').on('click', function () {
        $('#prop-casa2').addClass('active');
        $('#prop-departamento2').removeClass('active');
        $('#prop-oficina2').removeClass('active');
        $('#prop-local2').removeClass('active');
        $('#prop-terreno2').removeClass('active');
        $('#prop-otros2').removeClass('active');
        //casa
        $('#prop-casa2 .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-casa2").attr("src","img/vector/casa-active.svg");
        //Depa
        $('#prop-departamento2 .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento2").attr("src","img/vector/departamento.svg");  
        //oficina
        $('#prop-oficina2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina2").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local2").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno2").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros2").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-departamento2').on('click', function () {
        $('#prop-casa2').removeClass('active');
        $('#prop-departamento2').addClass('active');
        $('#prop-oficina2').removeClass('active');
        $('#prop-local2').removeClass('active');
        $('#prop-terreno2').removeClass('active');
        $('#prop-otros2').removeClass('active');
       
        //casa
        $('#prop-casa2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa2").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento2 .tipo-propiedad-content').removeClass('bg-square-prop'); 
        $("#img-departamento2").attr("src","img/vector/departamento-active.svg");  
        //oficina
        $('#prop-oficina2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina2").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local2").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno2").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros2").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-oficina2').on('click', function () {
        $('#prop-casa2').removeClass('active');
        $('#prop-departamento2').removeClass('active');
        $('#prop-oficina2').addClass('active');
        $('#prop-local2').removeClass('active');
        $('#prop-terreno2').removeClass('active');
        $('#prop-otros2').removeClass('active');
         
        //casa
        $('#prop-casa2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa2").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento2 .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento2").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina2 .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-oficina2").attr("src","img/vector/oficina-active.svg");
        //local
        $('#prop-local2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local2").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno2").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros2").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-local2').on('click', function () {
        $('#prop-casa2').removeClass('active');
        $('#prop-departamento2').removeClass('active');
        $('#prop-oficina2').removeClass('active');
        $('#prop-local2').addClass('active');
        $('#prop-terreno2').removeClass('active');
        $('#prop-otros2').removeClass('active');
         
        //casa
        $('#prop-casa2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa2").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento2 .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento2").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina2").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local2 .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-local2").attr("src","img/vector/local-active.svg");
        //terreno
        $('#prop-terreno2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno2").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros2").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-terreno2').on('click', function () {
        $('#prop-casa2').removeClass('active');
        $('#prop-departamento2').removeClass('active');
        $('#prop-oficina2').removeClass('active');
        $('#prop-local2').removeClass('active');
        $('#prop-terreno2').addClass('active');
        $('#prop-otros2').removeClass('active');
         
        //casa
        $('#prop-casa2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa2").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento2 .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento2").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina2").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local2").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno2 .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-terreno2").attr("src","img/vector/terreno-active.svg");
        //otros
        $('#prop-otros2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-otros2").attr("src","img/vector/vector-otros.svg");
    });

    $('#prop-otros2').on('click', function () {
        $('#prop-casa2').removeClass('active');
        $('#prop-departamento2').removeClass('active');
        $('#prop-oficina2').removeClass('active');
        $('#prop-local2').removeClass('active');
        $('#prop-terreno2').removeClass('active');
        $('#prop-otros2').addClass('active');
         
        //casa
        $('#prop-casa2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-casa2").attr("src","img/vector/casa.svg");
        //Depa
        $('#prop-departamento2 .tipo-propiedad-content').addClass('bg-square-prop'); 
        $("#img-departamento2").attr("src","img/vector/departamento.svg");
        //oficina
        $('#prop-oficina2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-oficina2").attr("src","img/vector/oficina.svg");
        //local
        $('#prop-local2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-local2").attr("src","img/vector/local.svg");
        //terreno
        $('#prop-terreno2 .tipo-propiedad-content').addClass('bg-square-prop');     
        $("#img-terreno2").attr("src","img/vector/terreno.svg");
        //otros
        $('#prop-otros2 .tipo-propiedad-content').removeClass('bg-square-prop');     
        $("#img-otros2").attr("src","img/vector/vector-otros-active.svg");
    });

    //--------------------------Home:Seleccion de Tipo de propiedad---------------------------------    
    //MOVIL
    //HOME: ALquilar / Comprar
    $('#link-c-home').on('click', function () {
        $('#comprar-home').addClass('active');
        $('#alquilar-home').removeClass('active');
        $('#p-comprar-home').removeClass('inactive');
        $('#p-alquilar-home').addClass('inactive');
        $('#link-a-home .bg-opcion-alquilar').removeClass('active');
        $('#link-c-home .bg-opcion-comprar').addClass('active');
    });

    $('#link-a-home').on('click', function () {
        $('#alquilar-home').addClass('active');
        $('#comprar-home').removeClass('active');
        $('#p-alquilar-home').removeClass('inactive');
        $('#p-comprar-home').addClass('inactive');
        $('#link-a-home .bg-opcion-alquilar').addClass('active');
        $('#link-c-home .bg-opcion-comprar').removeClass('active');
    });
      //DESKTOP
      //HOME: ALquilar / Comprar
      $('#link-c-home-d').on('click', function () {
        $('#comprar-home-d').addClass('active');
        $('#alquilar-home-d').removeClass('active');
        $('#p-comprar-home-d').removeClass('inactive');
        $('#p-alquilar-home-d').addClass('inactive');
        $('#link-a-home-d .bg-opcion-alquilar').removeClass('active');
        $('#link-c-home-d .bg-opcion-comprar').addClass('active');
    });

    $('#link-a-home-d').on('click', function () {
        $('#alquilar-home-d').addClass('active');
        $('#comprar-home-d').removeClass('active');
        $('#p-alquilar-home-d').removeClass('inactive');
        $('#p-comprar-home-d').addClass('inactive');
        $('#link-a-home-d .bg-opcion-alquilar').addClass('active');
        $('#link-c-home-d .bg-opcion-comprar').removeClass('active');
    });
    //--------------------------Add Me interesa:Seleccion de Tipo de propiedad--------------------------------- 
    //MOVIL
    //Me interesa: ALquilar / Comprar
    $('#link-c-mi').on('click', function () {
        $('#comprar-mi').addClass('active');
        $('#alquilar-mi').removeClass('active');
        $('#p-comprar-add').removeClass('inactive');
        $('#p-alquilar-add').addClass('inactive');
        $('#link-a-mi .bg-opcion-alquilar').removeClass('active');
        $('#link-c-mi .bg-opcion-comprar').addClass('active');
    });

    $('#link-a-mi').on('click', function () {
        $('#alquilar-mi').addClass('active');
        $('#comprar-mi').removeClass('active');
        $('#p-alquilar-add').removeClass('inactive');
        $('#p-comprar-add').addClass('inactive');
        $('#link-a-mi .bg-opcion-alquilar').addClass('active');
        $('#link-c-mi .bg-opcion-comprar').removeClass('active');
    });

    //DESKTOP
    //Me interesa: ALquilar / Comprar
    $('#link-c-mi-d').on('click', function () {
        $('#comprar-mi-d').addClass('active');
        $('#alquilar-mi-d').removeClass('active');
        $('#p-comprar-add-d').removeClass('inactive');
        $('#p-alquilar-add-d').addClass('inactive');
        $('#link-a-mi-d .bg-opcion-alquilar').removeClass('active');
        $('#link-c-mi-d .bg-opcion-comprar').addClass('active');
    });

    $('#link-a-mi-d').on('click', function () {
        $('#alquilar-mi-d').addClass('active');
        $('#comprar-mi-d').removeClass('active');
        $('#p-alquilar-add-d').removeClass('inactive');
        $('#p-comprar-add-d').addClass('inactive');
        $('#link-a-mi-d .bg-opcion-alquilar').addClass('active');
        $('#link-c-mi-d .bg-opcion-comprar').removeClass('active');
    });


    //LOGIN-Sign Up: Mostrar / Ocultar contraseña
    $('#shapePassContent').on('click',function (){
        var typePassword = $('#password').attr('type');
        if(typePassword == "password"){
            $('#password').attr('type', 'text');
            $('#shapePassContent').addClass('active');
            $('#shapePassword').attr('src', 'img/vector/shape-active.svg');
        }else{
            $('#password').attr('type', 'password');
            $('#shapePassContent').removeClass('active');
            $('#shapePassword').attr('src', 'img/vector/shape.png');
        }
    });
    //Confirmar contraseña
    $('#shapePassContentConfirm').on('click',function (){
        var typePassword = $('#password-confirm').attr('type');
        if(typePassword == "password"){
            $('#password-confirm').attr('type', 'text');
            $('#shapePassContentConfirm').addClass('active');
            $('#shapePasswordConfirm').attr('src', 'img/vector/shape-active.svg');
        }else{
            $('#password-confirm').attr('type', 'password');
            $('#shapePassContentConfirm').removeClass('active');
            $('#shapePasswordConfirm').attr('src', 'img/vector/shape.png');
        }
    });
       
     
    //----------------------Modal: Detalle Inmueble--------------------
    /*LOGIN*/
    $("#enviarLogin").on('click', function(){
        var accion = $(this).attr('data-modal');
        var fowardPage = "login";
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("modal",  accion +'');
            localStorage.setItem("fowardPage", fowardPage);
        }
         var url = "detalle-inmueble.html";
        open(url, "_self");
  
    });

    /*HOME*/
    $(".card-home .link-sin-decoracion").on('click', function(){
        var accion ='hide';
        var fowardPage = "home";
        var idProp = $(this).attr('id');
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("modal",  accion +'');
            localStorage.setItem("fowardPage", fowardPage);
        }
         var url = "detalle-inmueble.html";
        open(url, "_self");
  
      });
        

    /*SIGN UP*/
    $("#creaCuenta").on('click', function(){
        var accion = $(this).attr('data-modal');
        var fowardPage = "signup";
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("modal",  accion +'');
            localStorage.setItem("fowardPage", fowardPage);
        }

        var url = "detalle-inmueble.html";
        open(url, "_self");
    });

    

});
