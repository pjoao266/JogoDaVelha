$(document).ready(function(){
	 $('.modal').modal();
   	PegaUrl();
  });

function PegaUrl() {
var url   = window.location.search.replace("?", "");
var items = url.split("&");
var nj1s=items[0].split("=");
$(".nomej1").html(nj1s[1]+":");
$(".nomej2").html("PC:");
nj1=nj1s[1];
}