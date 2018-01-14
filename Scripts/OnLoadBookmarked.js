window.onload = function () {

    if (localStorage.length > 0 && $("#inputHeroj").val().length == 0) {
        bookmarkirano = JSON.parse(localStorage.getItem('bookmarked1'));
        if (bookmarkirano.length > 1) {
            book1 = bookmarkirano;
            for (var i = 0; i < book1.length; i++) {
                var url1 = "https://gateway.marvel.com/v1/public/characters/" + book1[i] + "?&ts=1&apikey=346ad994c073569b511cfa4aaa46a391&hash=eab2f0ae9ab71c5b3dce6f1881d40a9d";
                var zahtev = $.ajax({
                    url: url1,
                    type: "GET",
                    contentType: "application/json"
                });
                zahtev.done(function (data) {
                    for (var i = 0; i < data.data.results.length; i++) {
                        $("#divrow").append('<div style="border:8px;border-color: rgb(244,223,174)" class="c1 col-xs-12 col-sm-6 col col-md-6"><img id="' + data.data.results[i].id + '" class="opaa"  onclick="modalni()"  src=' + data.data.results[i].thumbnail.path + '/portrait_fantastic.' + data.data.results[i].thumbnail.extension + '><br/><p hidden>' + data.data.results[i].id + '</p><a class="b" href="' + data.data.results[0].urls[0].url + '" target="_blank"><h4 class="b">' + data.data.results[i].name + '</h4></a></div>');
                    };
                    $("#p1").text(data.attributionText);
                });
            };
        }
        else if ($("#inputHeroj").val().length == 0) {
            book1 = parseInt(bookmarkirano);
            var url1 = "https://gateway.marvel.com/v1/public/characters/" + book1 + "?&ts=1&apikey=346ad994c073569b511cfa4aaa46a391&hash=eab2f0ae9ab71c5b3dce6f1881d40a9d";
            var zahtev = $.ajax({
                url: url1,
                type: "GET",
                contentType: "application/json"
            });

            zahtev.done(function (data) {
                for (var i = 0; i < data.data.results.length; i++) {
                    $("#divrow").append('<div style="border:8px;border-color: rgb(244,223,174)" class="c1 col-xs-12 col-sm-6 col col-md-6"><img id="' + data.data.results[i].id + '" class="opaa" onclick="modalni()"  src=' + data.data.results[i].thumbnail.path + '/portrait_fantastic.' + data.data.results[i].thumbnail.extension + ' ><br/><p hidden>' + data.data.results[i].id + '</p><a class="b" href="' + data.data.results[0].urls[0].url + '" target="_blank"><h4 class="b">' + data.data.results[i].name + '</h4></a></div>');
                };
                $("#p1").text(data.attributionText);
            });
        };
    };
};