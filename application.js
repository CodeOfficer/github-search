;(function($) {
	$(function() {

		var $repositories = $('#repositories');
		var $users = $('#users');

		// var data = {foo : "bar"}
		// var template = "my data: <%= data.foo %>"
		// $.srender(template, someData, $("h1"));

		$('#github_search').submit(function() {

			$.get('http://github.com/api/v1/json/search/codeofficer', function(json){				
				$.get('templates/project.ejs', function(template){

					$.each(json.repositories, function(index, project) {
						var html = $.srender(template, project);
						$repositories.append(html);
					});
				});			
			});

			// $.get('http://github.com/api/v1/json/codeofficer', function(json){
			// 	$.each(json.user, function(index, u) {
			// 		var template = "
			// 		<li></li>
			// 		";
			// 		$users.append();
			// 	});
			// });

		});

		// var req = new XMLHttpRequest();
		// req.open(
		//     "GET",
		//     "http://api.flickr.com/services/rest/?" +
		//         "method=flickr.photos.search&" +
		//         "api_key=90485e931f687a9b9c2a66bf58a3861a&" +
		//         "text=elektra&" +
		//         "safe_search=1&" +  // 1 is "safe"
		//         "content_type=1&" +  // 1 is "photos only"
		//         "sort=relevance&" +  // another good one is "interestingness-desc"
		//         "per_page=20",
		//     true);
		// req.onload = showPhotos;
		// req.send(null);
		//
		// function showPhotos() {
		//   var photos = req.responseXML.getElementsByTagName("photo");
		//
		//   for (var i = 0, photo; photo = photos[i]; i++) {
		//     var img = document.createElement("image");
		//     img.src = constructImageURL(photo);
		//     document.body.appendChild(img);
		//   }
		// }
		//
		// // See: http://www.flickr.com/services/api/misc.urls.html
		// function constructImageURL(photo) {
		//   return "http://farm" + photo.getAttribute("farm") +
		//       ".static.flickr.com/" + photo.getAttribute("server") +
		//       "/" + photo.getAttribute("id") +
		//       "_" + photo.getAttribute("secret") +
		//       "_s.jpg";
		// }

	});
})(jQuery);