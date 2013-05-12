$(document).ready(function()
{
	var h = $(window).height();

	$("#header").height(h);
	$("#content").css("top", h);

});