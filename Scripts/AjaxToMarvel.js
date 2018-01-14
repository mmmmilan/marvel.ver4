var timeout = null;
var sveziheroji = [];
function odlozeno() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
        $("#divrow").empty();

        start = $("#inputHeroj").val();
        if (start == "") {
            if (localStorage.length > 0 && $("#inputHeroj").val().length == 0) {
                bookmarkirano = JSON.parse(localStorage.getItem('bookmarked1'));
                if (bookmarkirano.length > 1) {
                    for (var i = 0; i < book1.length; i++) {
                        var url1 = "https://gateway.marvel.com/v1/public/characters/" + book1[i] + "?&ts=1&apikey=346ad994c073569b511cfa4aaa46a391&hash=eab2f0ae9ab71c5b3dce6f1881d40a9d";
                        var zahtev = $.ajax({
                            url: url1,
                            type: "GET",
                            contentType: "application/json"
                        });
                        zahtev.done(function (data) {
                            for (var i = 0; i < data.data.results.length; i++) {
                                sveziheroji.push(data.data.results[i].id);
                                //if (bookmarkirano.indexOf(sveziheroji[i])>0) {
                                if (jQuery.inArray(sveziheroji[i], bookmarkirano)>0) {
                                    $("#divrow").append('<div class="c1 col-xs-12 col-sm-6 col col-md-6"><img id="'
                                        + data.data.results[i].id+ '" class="opaa" onclick="modalni()" src="'
                                        + data.data.results[i].thumbnail.path + '/portrait_fantastic.'
                                        + data.data.results[i].thumbnail.extension + '"><br/><p hidden>'
                                        + data.data.results[i].id + '</p><a class="b"  href="'
                                        + data.data.results[0].urls[0].url + '" target="_blank"><h4>'
                                        + data.data.results[i].name + '</h4></a></div>');
                                }
                                else
                                    $("#divrow").append('<div class="c1 col-xs-12 col-sm-6 col col-md-6"><img id="'
                                        + data.data.results[i].id + '" class="bookm" onclick="modalni()" src="'
                                        + data.data.results[i].thumbnail.path + '/portrait_fantastic.'
                                        + data.data.results[i].thumbnail.extension + '"><br/><p hidden>'
                                        + data.data.results[i].id + '</p><a class="b" href="'
                                        + data.data.results[0].urls[0].url + '" target="_blank"><h4>'
                                        + data.data.results[i].name + '</h4></a></div>');
                            };
                            $("#p1").text(data.attributionText);
                        });
                        $("#px").text(text);
                        $("#py").text(bookmarkirano);
                    };
                };
            };
        };
        bookmarkirano = JSON.parse(localStorage.getItem('bookmarked1'));
        var url1 = "https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith="
            + start + "&apikey=346ad994c073569b511cfa4aaa46a391&hash=eab2f0ae9ab71c5b3dce6f1881d40a9d";
        var zahtev = $.ajax({
            url: url1,
            type: "GET",
            contentType: "application/json"
        });

        zahtev.done(function (data) {

            for (var i = 0; i < data.data.results.length; i++) {
                sveziheroji.push(data.data.results[i].id);
                //if (bookmarkirano.indexOf(sveziheroji[i]) !=-1) {
                if (jQuery.inArray(sveziheroji[i], bookmarkirano) > 0) {
                    $("#divrow").append('<div class="c1 col-xs-12 col-sm-6 col col-md-6"><img id="'
                        + data.data.results[i].id + '" class="opaa" onclick="modalni()" src="'
                        + data.data.results[i].thumbnail.path + '/portrait_fantastic.'
                        + data.data.results[i].thumbnail.extension + '"><br/><p hidden>'
                        + data.data.results[i].id + '</p><a class="b" href="'
                        + data.data.results[0].urls[0].url + '" target="_blank"><h4>'
                        + data.data.results[i].name + '</h4></a></div>');

                }
                else
                    $("#divrow").append('<div class="c1 col-xs-12 col-sm-6 col col-md-6"><img id="'
                        + data.data.results[i].id + '" class="bookm" onclick="modalni()" src="'
                        + data.data.results[i].thumbnail.path + '/portrait_fantastic.'
                        + data.data.results[i].thumbnail.extension + '"><br/><p hidden>'
                        + data.data.results[i].id + '</p><a class="b" href="'
                        + data.data.results[0].urls[0].url + '" target="_blank"><h4>'
                        + data.data.results[i].name + '</h4></a></div>');

            };

            $("#p1").text(data.attributionText);
        });
        $("#inputHeroj").val("");
    }, 2200);

};
