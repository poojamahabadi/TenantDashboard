function openNav() {
document.getElementById("mySidenav").style.width = "270px";
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
$(".btn_appoint.mobilebook").click(function(){
$(".bkappontbtn").toggle();
if($('#bk_aptmobile:visible').length> 0)
{
$(".btn_appoint.mobilebook").addClass("changeborderbtn");
}
else{
$(".btn_appoint.mobilebook").removeClass("changeborderbtn");
}
});

$(".btn_appoint.desktopbook").click(function(){
$(".bkappontbtn").toggle();
if($('#bk_apt:visible').length> 0)
{
$(".btn_appoint.desktopbook").addClass("changeborderbtn");
}
else{
$(".btn_appoint.desktopbook").removeClass("changeborderbtn");
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
infinite: false,
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
infinite: false,
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
$(".clickonfilterbtn.clkfilmap,.clcross_icon.mapcross").hide();
$(document).ready(function() {
$(".filterbtnshow").click(function(){
$(".clickonfilterbtn.clkfilmap,.clcross_icon.mapcross").show();
$(".filterbtnshow").css("visibility","hidden");
}); 

$(".clcross_icon.mapcross").click(function(){
$(".clickonfilterbtn.clkfilmap,.clcross_icon.mapcross").hide();
$(".filterbtnshow").css("visibility","visible");
}); 
});



$(".scheshow_flex .clcross_icon,.scheshow_flex .clickonfilterbtn").hide();
$(document).ready(function() {
$(".filter_click").click(function(){
$(".scheshow_flex .clickonfilterbtn,.scheshow_flex .clcross_icon").show();
}); 

$(".scheshow_flex .clcross_icon").click(function(){
$(".scheshow_flex .clickonfilterbtn,.scheshow_flex .clcross_icon").hide();
}); 
});



// invite
$('.btninvite.minus').hide();
$(".showinvite_content").css('display','none');
$(document).ready(function() {
$('.btninvite.plus').click(function() {
$(".showinvite_content").css('display','block');
$(".btninvite.plus").hide();
$('.btninvite.minus').show();
$(".invite_sliderslick .slick-list").slick({
slidesToShow: 4,
slidesToScroll: 1,
arrows: true,
infinite: true,
autoplay: true,
responsive: [
{
breakpoint: 640,
settings: {
slidesToShow: 4,
slidesToScroll: 1,
}
},
{
breakpoint: 568,
settings: {
slidesToScroll: 1,
slidesToShow:3,
}
},
{
breakpoint:378,
settings: {
slidesToScroll: 1,
slidesToShow:2.5,
}
}
]
});
});

// invite
$('.btninvite.minus').click(function() {
$(".showinvite_content").hide();
$(".btninvite.plus").show();
$('.btninvite.minus').hide();
});
});
$(document).ready(function () {
$(".invite_sliderslick .prev-btn").click(function () {
$(".invite_sliderslick .slick-list").slick("slickPrev");
});
$(".invite_sliderslick .next-btn").click(function () {
$(".invite_sliderslick .slick-list").slick("slickNext");
});
$(".invite_sliderslick .prev-btn").addClass("slick-disabled");
$(".invite_sliderslick .slick-list").on("afterChange", function () {
if ($(".invite_sliderslick .slick-prev").hasClass("slick-disabled")) {
$(".invite_sliderslick .prev-btn").addClass("slick-disabled");
} else {
$(".invite_sliderslick .prev-btn").removeClass("slick-disabled");
}
if ($(".invite_sliderslick .slick-next").hasClass("slick-disabled")) {
$(".invite_sliderslick .next-btn").addClass("slick-disabled");
} else {
$(".invite_sliderslick .next-btn").removeClass("slick-disabled");
}
});
});

// reschedule button click
$(".popup_reschedule_btn").hide();
$(document).ready(function() {
$(".resch_clk").click(function(){
$(".popup_reschedule_btn").slideToggle();
}); 
});

// reschedule button click my appointment offer to lease
$(".popup_reschedule_btnofferlease").hide();
$(document).ready(function() {
$(".rescappt_clickbtn").click(function(){
$(".popup_reschedule_btnofferlease").slideToggle();
$(this).toggleClass("padchange_btn");
}); 
});










$(".resche_yellowcard").hide();
$(document).ready(function() {
$(".reschedulebtncard").click(function(){
$(".resche_yellowcard").slideToggle();
}); 
});

// similar units

$(() => {
var createSlickunits = () => {
let slider = $(".similarunits,.newly_listed,.just_leased");
slider.not(".slick-initialized").slick({
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
slidesToShow: 1.6,
}
},
{
breakpoint:1400,
settings: {
slidesToShow: 1.5,
}
},
{
breakpoint: 1367,
settings: {
slidesToScroll: 1,
slidesToShow:1.7,
}
},
{
breakpoint: 1025,
settings: {
slidesToScroll: 1,
slidesToShow:1.5,
}
},
{
breakpoint: 993,
settings: {
slidesToScroll: 1,
slidesToShow:1.4,
}
},
{
breakpoint:769,
settings: {
slidesToScroll: 1,
slidesToShow:1.7,
}
},
{
breakpoint:641,
settings: {
slidesToScroll: 1,
slidesToShow:1.4,
}
},
{
breakpoint:420,
settings: {
slidesToScroll: 1,
slidesToShow:1.07,
}
},
{
breakpoint:350,
settings: {
slidesToScroll: 1,
slidesToShow:1,
}
}
]
});
};
createSlickunits();
$(window).on("resize orientationchange", createSlickunits);
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


// showing lease offers
$(document).ready(function(){
$('.propfeat_tab.offertolease_tab ul li').click(function(){
$('.propfeat_tab.offertolease_tab ul li').removeClass("active");
$(this).addClass("active");
});
});

$('.tablinks_propfeat.building_div.buildinglease').hide();
$(document).ready(function(){
$('.unit_propfeat.leaaeunit').click(function(){
$('.tablinks_propfeat.unit_div.unitlease').show();
$('.tablinks_propfeat.building_div.buildinglease').hide();
$(".unitlease .slick-slider").slick('refresh');
});
});
$(document).ready(function(){
$('.build_propfeat.buildtab').click(function(){
$('.tablinks_propfeat.building_div.buildinglease').show();
$('.tablinks_propfeat.unit_div.unitlease').hide();
$(".buildinglease .slick-slider").slick('refresh');
});
});


$('.tablinks_propfeat.building_div.buildinglease.mobilebuilding').hide();
$(document).ready(function(){
$('.unit_propfeat.leaaeunitmobilr').click(function(){
$('.tablinks_propfeat.unit_div.unitlease.mobileunit').show();
$('.tablinks_propfeat.building_div.buildinglease.mobilebuilding').hide();
$(".unitlease.mobileunit .slick-slider").slick('refresh');
});
});
$(document).ready(function(){
$('.build_propfeat.buildtabmobile').click(function(){
$('.tablinks_propfeat.building_div.buildinglease.mobilebuilding').show();
$('.tablinks_propfeat.unit_div.unitlease.mobileunit').hide();
$(".buildinglease.mobilebuilding .slick-slider").slick('refresh');
});
});
// showing lease offers end


// dropdown
$(".dropdw_mobileview .drop_optionlist.dropdown-toggle[changeable=true]").next(".dropdown-menu").children().on("click", function() {
$(this).closest(".dropdown-menu").prev(".dropdown-toggle").text($(this).text());
});

// schedule showings tabs
$(document).ready(function(){
$('.propfeat_tab ul li').click(function(){
$('.propfeat_tab ul li').removeClass("active");
$(this).addClass("active");
});
});

$('.building_div,.utilitiesdiv').hide();
$(document).ready(function(){
$('.unit_propfeat').click(function(){
$('.prop_feature .slick-slider').slick('refresh');
$('.unit_div').show();
$('.building_div,.utilitiesdiv').hide();
});

$('.build_propfeat').click(function(){
$('.prop_feature .slick-slider').slick('refresh');
$('.building_div').show();
$('.unit_div,.utilitiesdiv').hide();
});

$('.util_propfeat').click(function(){
$('.prop_feature .slick-slider').slick('refresh');
$('.utilitiesdiv').show();
$('.unit_div,.building_div').hide();
});
});




$("#select-box,#select-box1").on("click" , function() {
$(this).parent(".select-box.month,.select-box1.year").toggleClass("open");
});


$(document).mouseup(function (e){
var container = $(".select-box.month,.select-box1.year");
if (container.has(e.target).length === 0){
container.removeClass("open");
}
});

$(".select-box.month select,.select-box1.year select").on("change" , function() {
var selection = $(this).find("option:selected").text(),
labelFor = $(this).attr("id"),
label = $("[for='" + labelFor + "']");

label.find(".label-desc").html(selection);
});

$(".select-box.month select,.select-box1.year select").on("change" , function() {
val = $( ".select-box.month select option:selected,.select-box1.year select option:selected" ).val(); 
});



$('.relv_divevents').hide();
// showings page pop up effect
$(document).ready(function() {
    $('.calview_click').click(function() {
            $('.relv_divevents').show("500");
            $(".filterbtnshow").css("visibility","visible");
            $('.clickonfilterbtn.clkfilmap,.clcross_icon.mapcross').hide("500");
    });
    $('.relv_divevents .crossic_cal').click(function() {
        $('.relv_divevents,.clickonfilterbtn.clkfilmap').hide("500");
});
    
});


// calender filter
$(".clcross_icon.calcross_icon,.clickonfilterbtn.calenderview_filter").hide();
$(document).ready(function() {
$(".btnfilter_calender").click(function(){
$(".clickonfilterbtn.calenderview_filter,.clcross_icon.calcross_icon").show();
}); 

$(".clcross_icon.calcross_icon").click(function(){
$(".clickonfilterbtn.calenderview_filter,.clcross_icon.calcross_icon").hide();
}); 
});


