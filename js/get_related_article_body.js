$(document).ready(function() {
	//GET ARTICLE


	var query = parseQuery(document.location.search);
	var article_name = query["article"];
	var main_article = query["main_article"];

	pullFile("../resources/exJson/" + article_name, function(article){
		console.log(article);
		$('#article-photo').append('<img src="' + article.article.image + '">');
		$('#article-photo-caption').append(article.article.imageCaption);

		$('#article-body').append('<h2>'+ article.article.title +'</h2>' +
									'<p class="author">' + article.article.author + '</p>' +
									'<p class="date">' + article.article.date + '</p>' +
									'<p class="description">' + article.article.description + '</p>' +
									'<p>' + article.article.body + '</p>'
		);
		populateSidebar(article.article.similarArticles, main_article);
	});


});

function populateSidebar(files, root){

	pullFile("../resources/exJson/" + root, function(Article){
			$("#sidebar-wrapper .sidebar-nav").append('<li class="sidebar-stub main_link">' +
								                		'<a href="article_page.html?article='+root+'"><b>Main Article:</b> '+ Article.article.title +'</a>' +
													'</li>'
		);
	});

	for(var i=0; i<files.length; i++){
		if(files[i] != root){
			pullFile("../resources/exJson/" + files[i], function(Article){
				$("#sidebar-wrapper .sidebar-nav").append('<li class="sidebar-stub">' +
									                		'<a href="related_article_page.html?article='+Article.article.file+'&main_article=' + root + '">'+ Article.article.title +'</a>' +
														'</li>'
				);
			});
		}
	}
}
function pullFile(path, cb) {
	$.getJSON( path , function( data ) {
		cb(data);
	});
}

function parseQuery(search) {
    var args = search.substring(1).split('&');
    var argsParsed = {};
    var i, arg, kvp, key, value;

    for (i=0; i < args.length; i++) {
        arg = args[i];

        if (-1 === arg.indexOf('=')) {
            argsParsed[decodeURIComponent(arg).trim()] = true;
        }
        else {
            kvp = arg.split('=');
            key = decodeURIComponent(kvp[0]).trim();
            value = decodeURIComponent(kvp[1]).trim();
            argsParsed[key] = value;
        }
    }
    return argsParsed;
}