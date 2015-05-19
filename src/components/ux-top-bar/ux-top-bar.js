Ractive.extend({

	template: RactiveF.templates['ux-top-bar'],

	oninit: function () {

		var self = this;

		self.set('yPos', 0);

		this.on('toggleMenu', function(e) {

			if (self.get('isExpanded')) {
				self.set('isExpanded', false);
			} else {
				self.set('isExpanded', true);
			}

			return false;

		});

	},

	oncomplete: function () {

		var self = this;
		var topbar = self.find('.top-bar');
		var topbarOffset = self.elementOffset(topbar);

		console.debug('topbarOffset:', topbarOffset);

		window.onscroll = function (e) {
			if (self.get('isSticky')) {
				self.set('isFixed', self.pageYOffset() >= topbarOffset.top);
			}
		};

	}

});
