$(document).ready(function() {
	//GET ARTICLE


	$("#article-photo").append("<img src='../resources/images/placeholder.png'></img>");
	$("#article-photo-caption").append("This is not porn. I swear. Well actually it is. Oops.");


	$("#article-body").append("Lorem ipsum");
});

function pullFile(path, cb) {
	$.getJSON( path , function( data ) {
		cb(data);
	});
}