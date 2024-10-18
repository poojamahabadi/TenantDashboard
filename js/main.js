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

$(document).ready(function() {
$(".quesimg").mouseenter(function() {
$(".question_tooltipcontent").fadeIn(10); 
});

$(".quesimg").mouseleave(function() {
$(".question_tooltipcontent").fadeOut(10);   
});
});  


$(".showclick").hide();
$(document).ready(function() {
$(".clk_editbtn").click(function(){
$(".showclick").show();
$(".acc_infotxt").addClass("editbtnclsadd");
$(".edit_profi_name").addClass("editadd");
$(".clickhide").hide();
}); 

$(".clck_cancel").click(function(){
$(".showclick").hide();
$(".acc_infotxt").removeClass("editbtnclsadd");
$(".edit_profi_name").removeClass("editadd");
$(".clickhide").show();
}); 
});


$(document).ready(function(){
$('.showingssec_infodiv.pendingslider').slick({
slidesToShow: 1.1,
slidesToScroll: 1,
arrows: true,
centerMode: false,
dots: false,
speed: 300,
infinite: true,
autoplaySpeed: 5000,
autoplay: false,
responsive: [
{
breakpoint: 1920,
settings: {
slidesToShow: 1.1,
}
},
{
breakpoint: 540,
settings: {
slidesToScroll: 1,
slidesToShow:1,
}
}
]
});
});

$(document).ready(function(){
$('.showingssec_infodiv.scheduleslider').slick({
slidesToShow: 1.1,
slidesToScroll: 1,
arrows: true,
centerMode: false,
dots: false,
speed: 300,
infinite: true,
autoplaySpeed: 5000,
autoplay: false,
responsive: [
{
breakpoint: 1920,
settings: {
slidesToShow: 1.1,
}
},
{
breakpoint: 540,
settings: {
slidesToScroll: 1,
slidesToShow:1,
}
}
]
});
});

// datepicker
$(document).ready(function(){
$('.datepickershowing').datepicker({
language: "es",
autoclose: true,
format: "dd/mm/yyyy"
});
});


// filter showings popup 
$(".clcross_icon,.clickonfilterbtn").hide();
$(document).ready(function() {
$(".filter_click").click(function(){
$(".clickonfilterbtn,.clcross_icon").show();
}); 

$(".clcross_icon").click(function(){
	$(".clickonfilterbtn,.clcross_icon").hide();
	}); 
});


// reschedule button click
$(".popup_reschedule_btn").hide();
$(document).ready(function() {
$(".resch_clk").click(function(){
$(".popup_reschedule_btn").slideToggle();
}); 

});