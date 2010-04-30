;(function($) {
	$(function() {
		
		var $repositories = $('#repositories');
		var $users = $('#users');
		var $search_text = $('#search_text');
		
		// give the search box focus
		$search_text.focus();

		$('#github_search').submit(function() {
			// trick or treat
			if ($search_text.val()=='') $search_text.val('codeofficer');
			
			// user search
			// $.get('http://github.com/api/v1/json/' + escape($search_text.val()), function(json){				
			// 	$.get('templates/user.ejs', function(template){
			// 		$users.empty();
			// 		$users.append("<li>" + "users" + "</li>");
			// 		// $.each(json.repositories, function(index, repository) {
			// 		// 	var html = $.srender(template, repository);
			// 		// 	$repositories.append(html);
			// 		// });
			// 	});			
			// });
			
			// repository search
			$.get('http://github.com/api/v2/json/repos/search/' + escape($search_text.val()), function(json){				
				$.get('templates/repository.ejs', function(template){
					$repositories.empty();
					$.each(json.repositories, function(index, repository) {
						var html = $.srender(template, repository);
						$repositories.append(html);
					});
				});			
			});

		});

	});
})(jQuery);