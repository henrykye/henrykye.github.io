$(document).ready(function(){
	$(".about-link").attr("target", "_blank");
	$(".navbar-dark").css("background-color", "#035096");
	
	let YYYY = (new Date()).getFullYear();
	let statement = $(".footer .nav-footer-center").text();
	let copyright_full = "© " + YYYY + statement;
	$(".footer .nav-footer-center").text(copyright_full);
})