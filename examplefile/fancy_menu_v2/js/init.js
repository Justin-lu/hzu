/*
Fancy Menu V2, 30.10.09
Copyright (C) 2009 Bogdan Pop of WebRaptor (http://www.bogdanpop.info, http://www.webraptor.eu)
Published by Freelancer Magazine (http://www.freelancermagazine.com)

Released under Creative Commons Attribution 3.0 (http://creativecommons.org/licenses/by/3.0)
If you modify this source codes and use it in your own projects you must not modify or remove the above credits. However, you may add your own below this line.
*/
jQuery(document).ready(function($)
{
	// start the magic

	// if javascript is on, the menu will work ok.
	// Therefor we hide the expanded menu
	$('.menu-extend').hide();
	$('.clear').height(0);
	
	// if the "Detailed menu" button is clicked, fade it out and fade in the "Close menu button"
	// also slide the expanded menu into place
	$('.cleaning-but').click(function ()
		{ 	
		var isVisible = $('.menu-extend').is(':visible');
		var isVisiblecleaning = $('.cleaning').is(':visible');
		var isVisiblecooking = $('.cooking').is(':visible');
		var isVisiblegardening = $('.gardening').is(':visible');
		if(isVisible)
			{
			if(!isVisiblecleaning)
				{
				if(isVisiblecooking)
					{
						$('.cooking').slideUp("1000", function() { $('.cleaning').slideDown("1000") });
					}
				else if(isVisiblegardening)
					{
						$('.gardening').slideUp("1000", function() { $('.cleaning').slideDown("1000") });	
					}
				}
				else
				{
				$('.cleaning').slideUp("1000");	
				}
			}
		else
			{
			$('.cleaning').slideDown();
			}
	});

	$('.cooking-but').click(function ()
		{ 	
		var isVisible = $('.menu-extend').is(':visible');
		var isVisiblecleaning = $('.cleaning').is(':visible');
		var isVisiblecooking = $('.cooking').is(':visible');
		var isVisiblegardening = $('.gardening').is(':visible');

		if(isVisible)
			{ 
			if(!isVisiblecooking)
				{
				if(isVisiblecleaning)
					{
					$('.cleaning').slideUp("1000", function() { $('.cooking').slideDown("1000") });
					}
				else if(isVisiblegardening)
					{
					$('.gardening').slideUp("1000", function() { $('.cooking').slideDown("1000") });	
					}
				}
				else
				{
				$('.cooking').slideUp("1000");	
				}
			}
		else
			{
			$('.cooking').slideDown();
			}
	});
	
	$('.gardening-but').click(function ()
		{ 	
		var isVisible = $('.menu-extend').is(':visible');
		var isVisiblecleaning = $('.cleaning').is(':visible');
		var isVisiblecooking = $('.cooking').is(':visible');
		var isVisiblegardening = $('.gardening').is(':visible');

		if(isVisible)
			{
			if(!isVisiblegardening)
				{
				if(isVisiblecooking)
					{
					$('.cooking').slideUp("1000", function() { $('.gardening').slideDown("1000") });
					}
				else if(isVisiblecleaning)
					{
					$('.cleaning').slideUp("1000", function() { $('.gardening').slideDown("1000") });	
					}
				}
				else
				{
				$('.gardening').slideUp("1000");	
				}
			}
		else
			{
			$('.gardening').slideDown();
			}
	});
	
	
	//create the overlay menu
	var opacity = '0.8'; // can be up to 1
	
	$('a[name=modal]').removeAttr('href');
	//javascript on, no need to redirect to a link here
	$('a[name=modal]').click(function ()
		{ 
		
		var rel = $(this).attr('rel');
		var modal_content = $('.'+rel).html();
		$('#overlay-content div').html(modal_content);
		
		var maskHeight = $(document).height();  
		var maskWidth = $(document).width(); 
		var windowHeight = $(window).height();  
		var windowWidth = $(window).width(); 
		var contentWidth = $('#overlay-content').width(); // width
		var contentHeight = $('#overlay-content').height(); // and height of content area
		
		//Set height and width to mask to fill up the whole screen  
		$('#overlay-mask').css({'width':maskWidth,'height':maskHeight});
		$('#overlay-mask').css('opacity',opacity);
		$('#overlay-mask').css('display','block');
		
		// put the overlay content area in the center of the window
		$('#overlay-content').css('display','block');
		$('#overlay-content').css('left',(windowWidth-contentWidth)/2);
		$('#overlay-content').css('top',(windowHeight-contentHeight)/2);				
	});
	
	// move overlay content to center of the window
	$(window).resize(function () { 
		var maskHeight = $(document).height();  
		var maskWidth = $(window).width(); 
		var windowHeight = $(window).height();  
	 	var windowWidth = $(window).width();
		var contentWidth = $('#overlay-content').width(); // width
		var contentHeight = $('#overlay-content').height(); // and height of content area
		//Set height and width to mask to fill up the whole screen  
		$('#overlay-mask').css({'width':maskWidth,'height':maskHeight});
		$('#overlay-content').css({'left':(windowWidth-contentWidth)/2});
		$('#overlay-content').css({'top':(windowHeight-contentHeight)/2});
	});

	var $scrollingDiv = $("#overlay-content");	
	$(window).scroll(function() {			
		$scrollingDiv
			.stop()
			.animate({"marginTop": ($(window).scrollTop()) + "px"}, "fast" );			
	});
	
	$('#overlay-mask').click(function () { $('#overlay-mask').css('display','none'); $('#overlay-content').css('display','none'); });
	$('.close').click(function () { $('#overlay-mask').css('display','none'); $('#overlay-content').css('display','none'); });

});