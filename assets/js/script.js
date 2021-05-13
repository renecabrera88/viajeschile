// mooth scroll

$(document).ready(function(){
    $("a").click(function(event){
        // esta linea desactiva click por default
        event.preventDefault();

        var opcionMenu = this.hash;

        $("html").animate(
            {
            scrollTop: $(opcionMenu).offset().top,
        },
        900
        );

    });

});