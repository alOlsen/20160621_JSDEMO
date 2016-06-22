
$( document ).ready( function(){



	//FadeOut animation
	$(".panel").click( function(){

		//$(".panel").addClass("roundEdges")
		$(".panel").css("border-radius", "10px");

		$(".panel").html("<table border='1'><tr><td>123</td></tr></table>");

		$(".panel").fadeOut(500, function(){
			$(".panel").fadeIn(100);
		});
	});

	$(".topPanel").animate({ "top" : "-=100px"}, 2000)
	$(".bottomPanel").animate({ "bottom" : "-=100px"}, 2000)


	$(".content").click(function(){
		console.log("TEST CLICK")
		$(".topPanel").addClass( "redBG" )
	})
} );

