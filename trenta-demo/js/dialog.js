$(function() {
		$( "#message" ).dialog({
			autoOpen: false,
			width: 'auto',
            height: 'auto'
		});

		$( "#opener" ).click(function() {
			$( "#message" ).dialog( "open" );
		});
	});
	$(function() {
		$( "#music" ).dialog({
			autoOpen: false,
			width: 'auto',
            height: 'auto'
		});

		$( "#mus" ).click(function() {
			$( "#music" ).dialog( "open" );
		});
	});
	$(function() {
		$( "#picture" ).dialog({
			autoOpen: false,
			width: 'auto',
            height: 'auto'
		});

		$( "#pic" ).click(function() {
			$( "#picture" ).dialog( "open" );
		});
	});