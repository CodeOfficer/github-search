;(function($) {
	$(function() {
		var $repositories = $('#repositories');
		var $search_text = $('#search_text');
		
		// give the search box focus
		$search_text.focus();

		$('#github_search').submit(function(e) {
      e.preventDefault();
            
			// trick or treat
			if ($search_text.val()=='') $search_text.val('codeofficer');
			
			$repositories.empty();
			$repositories.append("<li><img src ='assets/ajax-loader.gif' alt='loading' /></li>");
			
			// repository search
			$.get('http://github.com/api/v2/json/repos/search/' + escape($search_text.val()), function(json){				
				$.get('templates/repository.ejs', function(template){
					$repositories.empty();
					if (json.repositories.length > 0) {
						$.each(json.repositories, function(index, repository) {
							var html = $.srender(template, repository);
							$repositories.append(html);
							$("abbr.relatize").timeago();
						});
					} else {
						$repositories.append("<li>No results found.</li>");
					};
				});			
			});
		});
	});
})(jQuery);