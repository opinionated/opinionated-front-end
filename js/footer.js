$(document).ready(function() {
	$('#footer').append('<ul id="footer_bar">\
			<li><a href="index.html" class="btn_ft">Contact</a></li>\
			<li><a href="index.html" class="btn_ft">About</a></li>\
			<li><a id="bobd" class="btn_ft" style="cursor:pointer">Bob Dylan</a></li>\
			<li><a href="index.html" class="btn_ft">Donate</a></li>\
			<li><a href="index.html" class="btn_ft">Privacy</a></li>\
			<li><a href="index.html" class="btn_ft">Terms of Service</a></li>\
		</ul>');
	$('#bobd').click(function(){
		$('img').attr("src", "http://cdn.playbuzz.com/cdn/67cb2522-0009-40cb-8dda-bf10931695ac/6a5c5e61-bdbb-40cf-ade5-f76e3e90dea4.jpg");
		$('.author').html("BOB DYLAN");
		$('#header h1').html("Bob Dylionated");
	})
});
