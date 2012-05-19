CS.logo = {
		init: function() {
				var csLogo = $('#CS');
				var schoolLogo = $('#school-logo')
				this.logoMoveLeft(csLogo);
				this.logoMoveRight(schoolLogo);
        this.backToTop();
		},
		logoMoveLeft: function(logo) {
				logo.animate({
						left: "+=25"
				},
				700, function() {
						CS.logo.logoMoveRight(logo);
				})
		},

		logoMoveRight: function(logo) {
				logo.animate({
						left: "-=25"
				},
				700, function() {
						CS.logo.logoMoveLeft(logo);
				})
		},
		//back-to-top
		backToTop: function() {
				$("#back-top").hide();
				$(function() {
						$(window).scroll(function() {
								if ($(this).scrollTop() > 100) {
										$('#back-top').fadeIn();
								} else {
										$('#back-top').fadeOut();
								}
						});

						$('#back-top').click(function() {
								$('body,html').animate({
										scrollTop: 0
								},
								800);
								return false;
						});
				});
		}

}
CS.logo.init();

