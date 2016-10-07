/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	$(window).load(function() {
	  // When the page has loaded
	  $(".perfect").fadeIn(2000);
	});


	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$("video").show()
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});
		// Popups.
		$(document).on('click',"#raincircle", function(){
		window.open("Rain/rain.html",
		"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=860,height=540");
		$("#raincircle").fadeOut(1000, function(){
			$(this).remove();
			$("#sectionRS>.image").append("<img class='sectionpage' src='images/snowcircle.png' id='snowcircle' />");
			$("#snowcircle").hide().fadeIn(2000);
			});
		})
		$(document).on('click',"#snowcircle", function(){
		window.open("Snow/snow.html",
		"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=860,height=540");
		$("#snowcircle").fadeOut(1000, function(){
			$(this).remove();
			$("#sectionRS>.image").append("<img class='sectionpage' src='images/raincircle.png' id='raincircle' />");
			$("#raincircle").hide().fadeIn(2000);
			});
		})

		$("#gmPopup").click(function(){
		window.open("Grocery List/index.html",
		"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=860,height=540");
		})
		$("#fbPopup").click(function(){
		window.open("Fat Baby/index.html",
		"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=860,height=550");
		})
		$("#jessnetPopup").click(function(){
		window.open("Network App/index.html",
		"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=860,height=540");
		})

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);
