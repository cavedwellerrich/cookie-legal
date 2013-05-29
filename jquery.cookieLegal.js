/*

About:

	Cookie Legal: jQuery plugin
	Show an unobtrusive cookie usage message on your site by importing this jQuery plugin.
	Uses jquery-cookie for using cookies (https://github.com/carhartl/jquery-cookie).
	Made by: Rich Nicholls @ richnicholls.co.uk


Documentation:

	http://github.com/cavedwellerrich/cookie-legal

*/

(function($) {
	$.fn.cookieLegal = function(config) {
		var cookieMessageID = 'cookie_legal';
		var cookieName = 'cookie_legal_dismissed';
		
		//override default config with custom
		config = jQuery.extend({
			cookiesPage: 'cookie_legal.html'
		}, config);
		
		//if message hasn't been dismissed then show legal notice
		if(!$.cookie(cookieName)) {
			$('body').append('<div id="' + cookieMessageID + '" style="background:#fcf8e3; border-top:1px solid #DFCBA9; bottom:0; color:#c09853; left:0; line-height:20px; padding:5px 0; position:fixed; text-align:center; width:100%; z-index:9999;">Like most websites, ' + document.domain + ' uses cookies to deliver a personalised service and to improve the site. <a href="' + config.cookiesPage + '" style="color:#c09853; text-decoration:underline;">Find out more</a>. <span class="cookie_legal_close" style="cursor:pointer; text-decoration:underline;">Accept and continue</span>.</div>');
			$('body').find('#' + cookieMessageID + ' .cookie_legal_close').click(function() {
				$.cookie(cookieName, 'true', { path: '/', expires: 365 });
				$('#' + cookieMessageID).remove();
			});
		}
		//update cookie with new expiry
		else {
			$.cookie(cookieName, 'true', { path: '/', expires: 365 });
		}
	};
})(jQuery);