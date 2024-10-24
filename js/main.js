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


// book appointment button
$(".btn_appoint").click(function(){
$(".bkappontbtn").toggle();
if($('#bk_apt:visible').length> 0)
{
$(".btn_appoint").addClass("changeborderbtn");
}
else{
$(".btn_appoint").removeClass("changeborderbtn");
}
});

// send reminder button tooltip
$(".send_reminder_tooltip").hide();
$(".remndbtn").click(function(){
$(".send_reminder_tooltip").toggle();
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



// similar units
$(document).ready(function(){
$('.similarunits').slick({
slidesToShow: 1.5,
slidesToScroll: 1,
arrows: true,
dots: false,
speed: 300,
infinite: true,
autoplaySpeed: 5000,
autoplay: true,
responsive: [
{
breakpoint: 1920,
settings: {
slidesToShow: 1.5,
}
},
{
breakpoint:1400,
settings: {
slidesToShow: 1.2,
}
},
{
breakpoint: 540,
settings: {
slidesToScroll: 1,
slidesToShow:1.5,
}
}
]
});
});


// newly listed
$(document).ready(function(){
$('.newly_listed').slick({
slidesToShow: 1.5,
slidesToScroll: 1,
arrows: true,
dots: false,
speed: 300,
infinite: true,
autoplaySpeed: 5000,
autoplay: true,
responsive: [
{
breakpoint: 1920,
settings: {
slidesToShow: 1.5,
}
},
{
breakpoint:1400,
settings: {
slidesToShow: 1.2,
}
},
{
breakpoint: 540,
settings: {
slidesToScroll: 1,
slidesToShow:1.5,
}
}
]
});
});

// just leased
$(document).ready(function(){
$('.just_leased').slick({
slidesToShow: 1.5,
slidesToScroll: 1,
arrows: true,
dots: false,
speed: 300,
infinite: true,
autoplaySpeed: 5000,
autoplay: true,
responsive: [
{
breakpoint: 1920,
settings: {
slidesToShow: 1.5,
}
},
{
breakpoint:1400,
settings: {
slidesToShow: 1.2,
}
},
{
breakpoint: 540,
settings: {
slidesToScroll: 1,
slidesToShow:1.5,
}
}
]
});
});

$(document).ready(function () {
$('.unit_newlist_lease ul.nav.nav-tabs li a').on('click', function () {
$('.similar_unitsdiv .slider').slick('refresh');
});
});


$(document).ready(function(){
$('.buttons_map .btn').click(function(){
$('.btn').removeClass("active");
$(this).addClass("active");
});
});

$(document).ready(function () {
$('.buttons_map .btn').on('click', function () {
$('.slideronmap .slider').slick('refresh');
});
});

// showimgs
$('.shopping,.schools,.night').hide();
$(document).ready(function(){
$('.grocery').click(function(){
$('.groceries').show();
$('.shopping,.schools,.night').hide();
});
$('.shopbtn').click(function(){
$('.shopping').show();
$('.groceries,.schools,.night').hide();
});
$('.schoolbtn').click(function(){
$('.schools').show();
$('.groceries,.shopping,.night').hide();
});
$('.nightbtn').click(function(){
$('.night').show();
$('.groceries,.shopping,.schools').hide();
});
});



$(document).ready(function(){
$('.propfeat_tab ul li').click(function(){
$('.propfeat_tab ul li').removeClass("active");
$(this).addClass("active");
});
});

$('.building_div,.utilitiesdiv').hide();
$(document).ready(function(){
$('.unit_propfeat').click(function(){
$('.unit_div').show();
$('.building_div,.utilitiesdiv').hide();
});
$('.build_propfeat').click(function(){
$('.building_div').show();
$('.unit_div,.utilitiesdiv').hide();
});
$('.util_propfeat').click(function(){
$('.utilitiesdiv').show();
$('.unit_div,.building_div').hide();
});
});


