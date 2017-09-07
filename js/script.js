// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};

	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<span class="sticky-close" rel="' + uniqID + '" title="Close" style="display: inline-block;float: right;cursor: pointer;">✖</span<>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

$(document).ready(function() {
	$.sticky('<b><img src="images/France-Flag.png"/>DavidGilbert received <img src="images/prestige.png" width="15" height="17"/> - 999999999</b>');
	
	var callnotification = function() {
		$.sticky('<b><img src="images/Canada-Flag-icon.png"/>DoreneBeaudry19 received <img src="images/prestige.png" width="15" height="17"/> - 999999999</b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.sticky('<b><img src="images/Belgium-Flag-icon.png"/> AnoukMetivier received <img src="images/prestige.png" width="15" height="17"/> - 999999999</b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.sticky('<b><img src="images/00-cctld-au-icon.png"/>Duad1945 received <img src="images/prestige.png" width="15" height="17"/> - 800000000</b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.sticky('<b><img src="images/Australia-Flag-icon.png"/> RoyaleBourassa  received <img src="images/prestige.png" width="15" height="17"/> - 400440000</b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.sticky('<b><img src="images/United-States-Flag-icon.png"/>AudaBourget07 received <img src="images/prestige.png" width="15" height="17"/> - 989989898</b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.sticky('<b><img src="images/Denmark-Flag-icon.png"/>KonstBR received <img src="images/prestige.png" width="15" height="17"/> - 999999999</b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.sticky('<b><img src="images/Argentina-Flag-icon.png"/>IjTommy4 received <img src="images/prestige.png" width="15" height="17"/> - 580000000</b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.sticky('<b><img src="images/France-Flag.png"/>LanceClash22 received <img src="images/prestige.png" width="15" height="17"/> - 888888888</b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.sticky('<b><img src="images/United-States-Flag-icon.png"/>MaslinT21 received <img src="images/prestige.png" width="15" height="17"/> - 888888888</b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.sticky('<b><img src="images/United-States-Flag-icon.png"/>GamerJohn201 received <img src="images/prestige.png" width="15" height="17"/> - 788878888</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="images/United-States-Flag-icon.png"/>TheKingofCOC2014 received <img src="images/prestige.png" width="15" height="17"/> - 888888888</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="images/France-Flag.png"/> GDufresneC  received <img src="images/prestige.png" width="15" height="17"/> - 900909090</b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.sticky('<b><img src="images/Belgium-Flag-icon.png"/> Gamer0102  received <img src="images/prestige.png" width="15" height="17"/> - 200000000</b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.sticky('<b><img src="images/Netherlands-Flag-icon.png"/> GabrielleJodion33  received <img src="images/prestige.png" width="15" height="17"/> - 505505050</b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.sticky('<b><img src="images/United-Kingdom-flag-icon.png"/> VernonSalmonsd32  received <img src="images/prestige.png" width="15" height="17"/> - 900909090</b>');
	}
	setInterval(callnotification, 25000);

}); 