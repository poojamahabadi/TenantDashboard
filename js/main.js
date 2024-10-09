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

//   $('.slidermaintenance').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	asNavFor: '.slider-for',
// 	dots: true,
// 	focusOnSelect: true
//   });


// additional income and employee
$(".accord_one").hide();
$(document).ready(function() {
	$(".btn.btnadd_emp").click(function(){
		$(".accord_one").show();
	  });     
});

$(".quesimg").mouseenter(function() {
	$(".question_tooltipcontent").fadeIn(10); 
 });
 
$(".quesimg").mouseleave(function() {
	$(".question_tooltipcontent").fadeOut(10);   
   });