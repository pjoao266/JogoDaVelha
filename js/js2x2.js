var vez="1";

var jgvez="";

var vezinicial="1";

var vencedor="";

var cont=0;

var finish=0

var t_string="";

var t_int=0;

var nj1="";

var nj2="";

$(document).ready(function(){
    $('.modal').modal();
   	PegaUrl();
   	$(".vez").html(nj1);
  });

function PegaUrl() {
var url   = window.location.search.replace("?", "");
var items = url.split("&");
var nj1s=items[0].split("=");
var nj2s=items[1].split("=");
$(".nomej1").html(nj1s[1]+":");
$(".nomej2").html(nj2s[1]+":");
nj1=nj1s[1];
nj2=nj2s[1];
}


$(".quadrados").click(function(){

	var fundo=$(this).css("background-image");

	if(fundo=="none" || fundo==""){

		if(vez=="1"){

			$(this).css("background","url(imgs/x.jpg)");
			vez="2";
			jgvez=nj2;

		}
		else{

			$(this).css("background","url(imgs/bolinha.jpg)");

			vez="1";
			jgvez=nj1;
		}
		
		$(".vez").html(jgvez);
		cont=cont+1;
		verificarFimDeJogo();
	}	
	else{
		$(".result").html("Casa invalida!<br>Hoje não!");
		$('.modal').modal('open');
	}

});

function casasIguais(a,b,c){

	var Casa1=$("#q"+a);

	var Casa2=$("#q"+b);

	var Casa3=$("#q"+c);

	var bg1=Casa1.css("background-image");

	var bg2=Casa2.css("background-image");

	var bg3=Casa3.css("background-image");

	

	if(bg3==bg2 && bg2==bg1 && bg1!="" && bg1!="none"){

		if(bg1.indexOf("x.jpg") >= 0){

            vencedor = "1";

		}

		else{

			vencedor = "2";

		}

		return true;

	}

	return false;

}



function verificarFimDeJogo(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||

        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||

        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)

        ){
    	finish=1;
    	var jogvencedor=nj2;
    	if(vencedor=="1"){
    		jogvencedor=nj1;
    	}
    	$(".result").html("O(A) " + jogvencedor + " venceu!");
    	$('.modal').modal('open');
    }

    else if(cont==9){
    	finish=1;
    	$(".result").html("Deu velha!!");
    	$('.modal').modal('open');
    }

}

$(".button").click(function(){
$('.modal').modal('close');
if(finish==1){
	reset();	
}
});

function reset(){
	finish=0;
	cont=0;

	$(".quadrados").css("background","none");

	if(vezinicial=="1"){

		vezinicial="2";
		jgvez=nj2;

	}

	else{

		vezinicial="1";
		jgvez=nj1;
	}

	vez=vezinicial;

	if(vencedor=="1"){

		t_string=$(".j1").text();

		t_int=parseInt(t_string);

		t_int=t_int+1;

		t_string=t_int.toString();

		$(".j1").html(t_string);

	}

	else if(vencedor=="2"){

		t_string=$(".j2").text();

		t_int=parseInt(t_string);

		t_int=t_int+1;

		t_string=t_int.toString();

		$(".j2").html(t_string);

	}

	else {

		 t_string=$(".velha").text();

		 t_int=parseInt(t_string);

		 t_int=t_int+1;

		t_string=t_int.toString();

		$(".velha").html(t_string);

	}

	vencedor="";

}

