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
			
			// repository search
			$.get('http://github.com/api/v1/json/search/' + escape($search_text.val()), function(json){				
				$.get('templates/project.ejs', function(template){
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