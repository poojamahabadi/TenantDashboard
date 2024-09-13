function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

$(".display_accord").hide();
$(document).ready(function(){
	$(".view_all").click(function(){
	  $(".display_accord").show("slow");
	  $(".view_all").hide();
	});
  });