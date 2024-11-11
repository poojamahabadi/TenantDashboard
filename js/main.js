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



$(".clcross_icon,.clickonfilterbtn").hide();
$(document).ready(function() {
$(".filter_click").click(function(){
$(".clickonfilterbtn,.clcross_icon").show();
}); 

$(".clcross_icon").click(function(){
$(".clickonfilterbtn,.clcross_icon").hide();
}); 
});

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
		infinite: false,
		autoplay: true
	});
});
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

$(".resche_yellowcard").hide();
$(document).ready(function() {
$(".reschedulebtncard").click(function(){
$(".resche_yellowcard").slideToggle();
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
autoplaySpeed: 500044444,
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
},
{
  breakpoint:420,
  settings: {
  slidesToScroll: 1,
  slidesToShow:1.2,
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
,
{
  breakpoint:420,
  settings: {
  slidesToScroll: 1,
  slidesToShow:1.2,
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

$('.building_div.buildinglease').hide();
$(document).ready(function(){
$('.unit_propfeat.leaaeunit').click(function(){
  $('.unitlease .slick-slider').slick('refresh');
$('.unit_div.unitlease').show();
$('.building_div.buildinglease').hide();
});

$('.build_propfeat.buildtab').click(function(){
  $('.building_div.buildinglease .slick-slider').slick('refresh');
$('.building_div.buildinglease').show();
$('.unit_div.unitlease').hide();
});
});
// showing lease offers end





// schedule showings tbas
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




  