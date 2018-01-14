
function AddClass() {
    var NoviLik;
    if (localStorage.length > 0) {
        NizLikova = JSON.parse(localStorage.getItem('bookmarked1'));
    };
         NoviLik = (parseInt(text[0] + text[1] + text[2] + text[3] + text[4] + text[5] + text[6]));
         if (text && localStorage.length > 0 && jQuery.inArray(NoviLik, NizLikova) ==-1) {
        
             NizLikova[NizLikova.length] = NoviLik;
             localStorage.setItem('bookmarked1', JSON.stringify(NizLikova));
             $("#modalni1").modal('hide');
             window.location.reload();
             text = "";
             $("#inputHeroj").val("");
            
         }
    else alert("This MARVEL character is already bookmarked!")
};

function MoveClass() {
    NoviLik = (parseInt(text[0] + text[1] + text[2] + text[3] + text[4] + text[5] + text[6]));
    NizLikova = JSON.parse(localStorage.getItem('bookmarked1'));
    var index = NizLikova.indexOf(NoviLik);
    if (index > -1) {
        NizLikova.splice(index, 1);
        localStorage.setItem('bookmarked1', JSON.stringify(NizLikova));
        location.reload();
    };
    $("#inputHeroj").val("");
    location.reload();
};

