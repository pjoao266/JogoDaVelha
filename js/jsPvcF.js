
var vez="1";

var jgvez="";

var vezinicial="1";

var vencedor="";

var cont=0;

var finish=0

var t_string="";

var t_int=0;

var nj1="";

var nj2="PC";

var jant=-1;
var vetor =[0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
   	$(".vez").html(nj1);
  });




$(".quadrados").click(function(){
	var id=$(this).attr("id");
	var numid=id.charAt(1);
	if(vetor[numid-1]==0){
		$(this).css("background","url(imgs/x.jpg)");
		vez="2";
		jgvez=nj2;
		vetor[numid-1]=1;
		jant=numid-1;
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
  else if(jgvez=="PC"){
	setTimeout(Vezpc , 320);
}

}



$(".button").click(function(){
$('.modal').modal('close');
if(finish==1){
	reset();	
}
});

function reset(){
	vetor[0]=0;
	vetor[1]=0;
	vetor[2]=0;
	vetor[3]=0;
	vetor[4]=0;
	vetor[5]=0;
	vetor[6]=0;
	vetor[7]=0;
	vetor[8]=0;
	vetor[9]=0;
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
	if(jgvez==nj2){
	setTimeout(Vezpc , 320);
}

}

function Vezpc(){
var sorteado=verificarGanharBot();
if(sorteado==-1){
	 sorteado=Math.floor((Math.random() * 9));
	while(vetor[sorteado]!=0){
		sorteado=Math.floor((Math.random() * 9));
	}
}

var idnums=sorteado+1;
$("#q"+idnums).css("background","url(imgs/bolinha.jpg)");
vez="2";
jant=sorteado;
jgvez=nj1;
$(".vez").html(jgvez);
cont=cont+1;
vetor[sorteado]=2;
verificarFimDeJogo();
}

function verificarGanharBot() {

	//Horizontais
	if(vetor[0]==vetor[1]  && vetor[1]==2 && vetor[2]==0){
		return 2;
	}

	if(vetor[0]==vetor[2]  && vetor[2]==2 && vetor[1]==0){
		return 1;
	}

	if(vetor[1]==vetor[2]  && vetor[1]==2 && vetor[0]==0){
		return 0;
	}


	if(vetor[3]==vetor[4]  && vetor[4]==2 && vetor[5]==0){
		return 5;
	}

	if(vetor[3]==vetor[5]  && vetor[5]==2 && vetor[4]==0){
		return 4;
	}

	if(vetor[4]==vetor[5]  && vetor[4]==2 && vetor[3]==0){
		return 3;
	}


	if(vetor[6]==vetor[7]  && vetor[7]==2 && vetor[8]==0){
		return 8;
	}

	if(vetor[6]==vetor[8]  && vetor[8]==2 && vetor[7]==0){
		return 7;
	}

	if(vetor[7]==vetor[8]  && vetor[8]==2 && vetor[6]==0){
		return 6;
	}



	//Verticais
	if(vetor[0]==vetor[3]  && vetor[3]==2 && vetor[6]==0){
		return 6;
	}

	if(vetor[0]==vetor[6]  && vetor[6]==2 && vetor[3]==0){
		return 3;
	}

	if(vetor[3]==vetor[6]  && vetor[6]==2 && vetor[0]==0){
		return 0;
	}	

	if(vetor[1]==vetor[4]  && vetor[4]==2 && vetor[7]==0){
		return 7;
	}

	if(vetor[1]==vetor[7]  && vetor[7]==2 && vetor[4]==0){
		return 4;
	}

	if(vetor[4]==vetor[7]  && vetor[7]==2 && vetor[1]==0){
		return 1;
	}	


	if(vetor[2]==vetor[5]  && vetor[5]==2 && vetor[8]==0){
		return 8;
	}

	if(vetor[2]==vetor[8]  && vetor[8]==2 && vetor[5]==0){
		return 5;
	}

	if(vetor[5]==vetor[8]  && vetor[8]==2 && vetor[2]==0){
		return 2;
	}	



	//Diagonais
	if(vetor[0]==vetor[4]  && vetor[4]==2 && vetor[8]==0){
		return 8;
	}

	if(vetor[0]==vetor[8]  && vetor[8]==2 && vetor[4]==0){
		return 4;
	}

	if(vetor[4]==vetor[8]  && vetor[8]==2 && vetor[0]==0){
		return 0;
	}


	if(vetor[2]==vetor[4]  && vetor[4]==2 && vetor[6]==0){
		return 6;
	}

	if(vetor[2]==vetor[6]  && vetor[6]==2 && vetor[4]==0){
		return 4;
	}

	if(vetor[4]==vetor[6]  && vetor[6]==2 && vetor[2]==0){
		return 2;
	}

	return -1;
}
