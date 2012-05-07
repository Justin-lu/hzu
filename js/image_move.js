CS.logo = {
		init: function() {
				var csLogo = $('#CS');
				var schoolLogo = $('#school-logo')
				this.logoMoveLeft(csLogo);
				this.logoMoveRight(schoolLogo);
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
		}
}
CS.logo.init();
