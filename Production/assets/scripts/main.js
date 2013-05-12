$(document).ready(function()
{
	var h = $(window).height();

	$("#header").height(h);
	$("#content").css("top", h);

	$("#logo").click(function()
	{
		$("html, body").animate({ scrollTop: $('#get-now').offset().top }, 700);
	});

});
