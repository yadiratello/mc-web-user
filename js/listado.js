
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/properties",
        success: function (response) {

            $.each(response, function (indexInArray, valueOfElement) {
                var $id = "",
                    $precio_soles = "",
                    $precio_dolares = "",
                    $ubicacion = "",
                    $distrito = "",
                    $departamento = "",
                    $c_dormitorios = "",
                    $c_banos = "",
                    $c_cochera = "",
                    $c_area = "",
                    $c_anio = "",
                    $informacion = "",
                    $x = "",
                    $y = "",
                    $imagen = "";

                $id = $id+valueOfElement.id;
                $precio_soles = "S/." + $precio_soles + valueOfElement.precio_soles;
                $precio_dolares = "USD " + $precio_dolares + valueOfElement.precio_dolares;
                $informacion = $informacion + valueOfElement.informacion;
                $ubicacion = $ubicacion + valueOfElement.direccion;
                $distrito = $distrito + valueOfElement.distrito;
                $departamento = $departamento + valueOfElement.departamento;
                $c_area = $c_area + valueOfElement.area;
                $c_anio = $c_anio + valueOfElement.año;
                $c_cochera = $c_cochera + valueOfElement.num_cochera;
                $c_banos = $c_banos + valueOfElement.num_baños;
                $c_dormitorios = $c_dormitorios + valueOfElement.num_dormitorios;
                $x = $x + valueOfElement.x;
                $y = $x + valueOfElement.y;
                $info_cuartos = "Dormitorios . " + $c_dormitorios + " Baños . " + $c_banos + " Cochera . " + $c_cochera +" . "+$c_area+" m2.";
                $imagen = $imagen+valueOfElement.imagen[0];

                //  console.log(valueOfElement.imagen[0].url);
                // $("#cost-in-soles").append($precio_soles);
                // $("#cost-in-usd").append($precio_dolares);
                // $("#ubicacion").append($ubicacion);
                // $("#info_cuartos").append($info_cuartos);
                // // $("#ubicacion").append($ubicacion);
                // $("#informacion").append($informacion);



                var $card = "<div class=\'card card-home position-relative\'><img src = \'img/vector/me-interesa-active.svg\' class=\'img-fluid btn-guardar\' id = \'star-save-1\'><a href = \'detalle-inmueble.html\?"+$id+"\' class=\"link-sin-decoracion\"><div id=\"carouselExampleControls1\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\"><div class=\"carousel-inner card-boder-radius\"><div class=\"carousel-item active\"><img src=\'"+$imagen+"\' class=\"d-block w-100 img-carousel\" alt=\"...\"></div><div class=\"carousel-item\"><img src=\"img/kitchen-2.png\" class=\"d-block w-100 img-carousel\" alt=\"...\"></div><div class=\"carousel-item\"><img src=\"img/kitchen-3.png\" class=\"d-block w-100 img-carousel\" alt=\"...\"></div><div class=\"carousel-item\"><img src=\"img/kitchen-4.png\" class=\"d-block w-100 img-carousel\" alt=\"...\"></div></div><a class=\"carousel-control-prev\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-arrow\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-arrow\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div><!--Precio soles y usd--><div class=\"price-info\"><div class=\"sub-price-info\"><div class=\"content-level-price\"><strong><p class=\"cost-in-soles\" id=\"cost-in-soles\">" + $precio_soles + "</p></strong><p class=\"cost-in-usd\" id=\"cost-in-usd\">" + $precio_dolares + "</p></div></div></div><div class=\"card-body pb-04\" id=\"news-home\"><p class=\"text-dist-news\" id=\"ubicacion\">"+$distrito+" - "+$departamento+"</p><p class=\"text-title-prop\" id=\"title\">" + $ubicacion + "</p><p class=\"text-dist-news\" id=\"informacion\">" + $informacion + "</p><p class=\"text-card-desc\" id=\"info_cuartos\">" + $info_cuartos + "</p></div></a></div>";
                var $contacto = "<div class=\"row btn-panel-desc\"><div class=\"col-6\"><a href=\"tel:+5101555555\" class=\"btn btn-llamar text-btn-llamar\"><b>Llamar</b></a></div><div class=\"col-6\"><a href=\"https://api.whatsapp.com/send?phone=51955081075&text=¡Hola!%21%20Estoy%20interesado%20en%20el%20aviso%20publicado%20en%20Mercado%20Casa.\" class=\"btn btn-whatsapp text-btn-whatsapp\" target=\"_blank\"><b>Whatsapp</b></a></div></div>";

                $("#contenedor").append($card, $contacto);


                //llamando los datos a detalle
                // $("#distrito-depa").append($distrito);
            });

        }
    });
});