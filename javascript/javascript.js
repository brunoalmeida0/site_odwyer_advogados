// Descer suave
    jQuery(document).ready(function($){
        $(".scroll").click(function(event){
            if ($(window).width() > 768){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top - 78}, 900);
            }
            if ($(window).width() < 768){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top - 80}, 900);
            }
        });
    });
// Descer suave

// Deixar navbar sólida a partir de determinada altura da pagina
jQuery(document).ready(function($){
    altura = 590;
    altura2 = 680;
    altura3 = 560;
    $(window).on('scroll', function(){
        if ($(window).width() > 1024){
            if($(window).scrollTop() >= altura){
                $('#navbar').addClass('navbar-solida');
            }
            else{
                $('#navbar').removeClass('navbar-solida');
            }
        }
        if ($(window).width() <= 1024) {
            if($(window).scrollTop() >= altura2){
                $('#navbar').addClass('navbar-solida');
            }
            else{
                $('#navbar').removeClass('navbar-solida');
            }
        }
        if ($(window).width() <= 768) {
            if($(window).scrollTop() >= altura3){
                $('#navbar').addClass('navbar-solida');
            }
            else{
                $('#navbar').removeClass('navbar-solida');
            }
        }
    });
});
// Deixar navbar sólida a partir de determinada altura da pagina
// capa da altura da tela

$(document).ready(function(){
var altura_tela = $(window).height();/*cria variável com valor do altura da janela*/
if ($(window).width() == 1024){
    $("#capa").height(altura_tela - 360); /* aplica a variável a altura da div*/
    $( window ).resize(function() { /*quando redimensionar a janela faz a mesma coisa */
        var altura_tela = $(window).height();
        $("#capa").height(altura_tela - 280);
    });
}
if ($(window).width() > 1024){
    $("#capa").height(altura_tela - 300); /* aplica a variável a altura da div*/
    $( window ).resize(function() { /*quando redimensionar a janela faz a mesma coisa */
        var altura_tela = $(window).height();
        $("#capa").height(altura_tela - 280);
    });
}
if ($(window).width() < 768){
    $("#capa").height(altura_tela - 260); /* aplica a variável a altura da div*/
    $( window ).resize(function() { /*quando redimensionar a janela faz a mesma coisa */
        var altura_tela = $(window).height();
        $("#capa").height(altura_tela - 200);
    });
}
});
// Capa da altura da tela
// Fechar menu ao clicar em link e fora das opções
$(function(){
    var navMain = $("#barra-navegacao");

    $('body').click(function(){
        navMain.collapse('hide');
    });

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// Fechar menu ao clicar em link e fora das opções

function muda1(){
    document.getElementById("atuacaocivil").src='imagens/civil-hover.png';
    document.getElementById("textoatuacao1").style.color="#d32a27";

    document.getElementById("textoatuacao1").onmouseout = function(){
        document.getElementById("atuacaocivil").src='imagens/civil.png';
        document.getElementById("textoatuacao1").style.color="#000";
    }

    document.getElementById("atuacaocivil").onmouseout = function(){
        document.getElementById("textoatuacao1").style.color="#000";
        document.getElementById("atuacaocivil").src='imagens/civil.png';
    }

}

function muda2(){
    document.getElementById("atuacaobancario").src='imagens/bancario-hover.png';
    document.getElementById("textoatuacao2").style.color="#d32a27";

    document.getElementById("atuacaobancario").onmouseout = function(){
        document.getElementById("textoatuacao2").style.color="#000";
        document.getElementById("atuacaobancario").src='imagens/bancario.png';
    }

    document.getElementById("textoatuacao2").onmouseout = function(){
        document.getElementById("atuacaobancario").src='imagens/bancario.png';
        document.getElementById("textoatuacao2").style.color="#000";
    }
}

function muda3(){
    document.getElementById("atuacaoempresarial").src='imagens/empresarial-hover.png';
    document.getElementById("textoatuacao3").style.color="#d32a27";

    document.getElementById("atuacaoempresarial").onmouseout = function(){
        document.getElementById("textoatuacao3").style.color="#000";
        document.getElementById("atuacaoempresarial").src='imagens/empresarial.png';
    }

    document.getElementById("textoatuacao3").onmouseout = function(){
        document.getElementById("atuacaoempresarial").src='imagens/empresarial.png';
        document.getElementById("textoatuacao3").style.color="#000";
    }
}

function muda4(){
    document.getElementById("atuacaoadministrativo").src='imagens/administrativo-hover.png';
    document.getElementById("textoatuacao4").style.color="#d32a27";

    document.getElementById("atuacaoadministrativo").onmouseout = function(){
        document.getElementById("textoatuacao4").style.color="#000";
        document.getElementById("atuacaoadministrativo").src='imagens/administrativo.png';
    }

    document.getElementById("textoatuacao4").onmouseout = function(){
        document.getElementById("atuacaoadministrativo").src='imagens/administrativo.png';
        document.getElementById("textoatuacao4").style.color="#000";
    }
}

function muda5(){
    document.getElementById("atuacaotributario").src='imagens/tributario-hover.png';
    document.getElementById("textoatuacao5").style.color="#d32a27";

    document.getElementById("atuacaotributario").onmouseout = function(){
        document.getElementById("textoatuacao5").style.color="#000";
        document.getElementById("atuacaotributario").src='imagens/tributario.png'
    }

    document.getElementById("textoatuacao5").onmouseout = function(){
        document.getElementById("atuacaotributario").src='imagens/tributario.png';
        document.getElementById("textoatuacao5").style.color="#000";
    }
}

function muda6(){
    document.getElementById("atuacaobiodireito").src='imagens/biodireito-hover.png';
    document.getElementById("textoatuacao6").style.color="#d32a27";

    document.getElementById("atuacaobiodireito").onmouseout = function(){
        document.getElementById("textoatuacao6").style.color="#000";
        document.getElementById("atuacaobiodireito").src='imagens/biodireito.png'
    }

    document.getElementById("textoatuacao6").onmouseout = function(){
        document.getElementById("atuacaobiodireito").src='imagens/biodireito.png';
        document.getElementById("textoatuacao6").style.color="#000";
    }
}

function muda7(){
    document.getElementById("atuacaoconsumidor").src='imagens/consumidor-hover.png';
    document.getElementById("textoatuacao7").style.color="#d32a27";

    document.getElementById("atuacaoconsumidor").onmouseout = function(){
        document.getElementById("textoatuacao7").style.color="#000";
        document.getElementById("atuacaoconsumidor").src='imagens/consumidor.png'
    }

    document.getElementById("textoatuacao7").onmouseout = function(){
        document.getElementById("atuacaoconsumidor").src='imagens/consumidor.png';
        document.getElementById("textoatuacao7").style.color="#000";
    }
}

function muda8(){
    document.getElementById("atuacaocomercial").src='imagens/comercial-hover.png';
    document.getElementById("textoatuacao8").style.color="#d32a27";
    document.getElementById("atuacaocomercial").onmouseout = function(){
        document.getElementById("textoatuacao8").style.color="#000";
        document.getElementById("atuacaocomercial").src='imagens/comercial.png'
    }

    document.getElementById("textoatuacao8").onmouseout = function(){
        document.getElementById("atuacaocomercial").src='imagens/comercial.png';
        document.getElementById("textoatuacao8").style.color="#000";
    }
}

function muda9(){
    document.getElementById("atuacaopenal").src='imagens/penal1-hover.png';
    document.getElementById("textoatuacao9").style.color="#d32a27";

    document.getElementById("atuacaopenal").onmouseout = function(){
        document.getElementById("textoatuacao9").style.color="#000";
        document.getElementById("atuacaopenal").src='imagens/penal1.png'
    }

    document.getElementById("textoatuacao9").onmouseout = function(){
        document.getElementById("atuacaopenal").src='imagens/penal1.png';
        document.getElementById("textoatuacao9").style.color="#000";
    }
}

function muda10(){
    document.getElementById("atuacaotrabalho").src='imagens/trabalho-hover.png';
    document.getElementById("textoatuacao10").style.color="#d32a27";

    document.getElementById("atuacaotrabalho").onmouseout = function(){
        document.getElementById("textoatuacao10").style.color="#000";
        document.getElementById("atuacaotrabalho").src='imagens/trabalho.png'
    }

    document.getElementById("textoatuacao10").onmouseout = function(){
        document.getElementById("atuacaotrabalho").src='imagens/trabalho.png';
        document.getElementById("textoatuacao10").style.color="#000";
    }
}

function muda11(){
    document.getElementById("atuacaotransito").src='imagens/transito-hover.png';
    document.getElementById("textoatuacao11").style.color="#d32a27";

    document.getElementById("atuacaotransito").onmouseout = function(){
        document.getElementById("textoatuacao11").style.color="#000";
        document.getElementById("atuacaotransito").src='imagens/transito.png'
    }

    document.getElementById("textoatuacao11").onmouseout = function(){
        document.getElementById("atuacaotransito").src='imagens/transito.png';
        document.getElementById("textoatuacao11").style.color="#000";
    }
}

function muda12(){
    document.getElementById("atuacaoagrario").src='imagens/agrario-hover.png';
    document.getElementById("textoatuacao12").style.color="#d32a27";

    document.getElementById("atuacaoagrario").onmouseout = function(){
        document.getElementById("textoatuacao12").style.color="#000";
        document.getElementById("atuacaoagrario").src='imagens/agrario.png'
    }

    document.getElementById("textoatuacao12").onmouseout = function(){
        document.getElementById("atuacaoagrario").src='imagens/agrario.png';
        document.getElementById("textoatuacao12").style.color="#000";
    }
}
