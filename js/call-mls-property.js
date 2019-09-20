

$(document).ready(function () {
    $.ajax({
        url: 'http://192.168.1.33:4000/api/getproperties',
        contentType: "application/json",
        async: true,
        type: "GET",
        dataType: 'json',
        success: function (data) {
            $.each(data.data, function (i, item) {
                for (var cont = 0; cont <= item.length; cont++) {
                    //$('#inmueble').append('<span>' + item[cont].rent_price + ' <span>'
                    $('#inmueble').append(
                        // class="col-sm-12 col-md-6 col-lg-4 col-xl-4"
                        '<div>' +
                        '<div class="card card-home position-relative">' +
                        '<img src="img/vector/me-interesa.svg" class="img-fluid btn-guardar" id="star-save-1">' +
                        '<a class="link-sin-decoracion" href="detalle-inmueble.html" id="numIdProp-1">' +
                        '<div id="carouselExampleControls1" class="carousel slide" data-ride="carousel" data-interval="false">' +
                        '<div class="carousel-inner card-boder-radius">' +
                        '<div class="carousel-item active">' +
                        '<img src="img/kitchen-1.png" class="d-block w-100 img-carousel" alt="...">' +
                        '</div>' +
                        '<div class="carousel-item">' +
                        '<img src="img/kitchen-2.png" class="d-block w-100 img-carousel" alt="...">' +
                        '</div>' +
                        '<div class="carousel-item">' +
                        '<img src="img/kitchen-3.png" class="d-block w-100 img-carousel" alt="...">' +
                        '</div>' +
                        '<div class="carousel-item">' +
                        '<img src="img/kitchen-4.png" class="d-block w-100 img-carousel" alt="...">' +
                        '</div>' +
                        '</div>' +
                        '<a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">' +
                        '<span class="carousel-control-prev-arrow" aria-hidden="true"></span>' +
                        '<span class="sr-only">Previous</span>' +
                        '</a>' +
                        '<a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">' +
                        '<span class="carousel-control-next-arrow" aria-hidden="true"></span>' +
                        '<span class="sr-only">Next</span>' +
                        '</a>' +
                        '</div>' +
                        '<!--Precio soles y usd-->' +
                        '<div class="price-info">' +
                        '<div class="sub-price-info">' +
                        '<div class="content-level-price">' +
                        '<p class="cost-in-soles"><b> S/. ' + item[cont].rent_price + '</b></p>' +
                        '<p class="cost-in-usd">' + item[cont].currency + item[cont].rent_price + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<!--Descripción-->' +
                        '<div class="card-body pb-04" id="news-home">' +
                        '<p class="text-dist-news">' + item[cont].location_address + '</p>' +
                        '<p class="text-title-prop">' + item[cont].title + '</p>' +
                        '<p class="text-dist-news">' + item[cont].excerpt + '</p>' +
                        '<p class="text-card-desc"> Dormitorios' + item[cont].bedrooms + '· Baños' + item[cont].bathrooms + '· Cochera 1 · 0' + ' ·</p>' +
                        '</div>' +
                        '</a>' +
                        '</div>' +
                        '<div class="row btn-panel-desc">' +
                        '<div class="col-6">' +
                        '<a href="tel:+5101555555" class="btn btn-llamar text-btn-llamar"><b>Llamar</b></a>' +
                        '</div>' +
                        '<div class="col-6">' +
                        '<a href="https://api.whatsapp.com/send?phone=51955081075&text=¡Hola!%21%20Estoy%20interesado%20en%20el%20aviso%20publicado%20en%20Mercado%20Casa."' +
                        'class="btn btn-whatsapp text-btn-whatsapp" target="_blank">' +
                        '<b>Whatsapp</b>' +
                        '</a>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    );
                }
            });
        }
    });
});
