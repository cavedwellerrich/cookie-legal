Cookie Legal: jQuery plugin
==================================

* Show an unobtrusive cookie usage message at the bottom of your site by importing this jQuery plugin.

* Includes a cookie legal page outlining what they are, how they are used and how to disable them.

* Uses jquery-cookie for using cookies (https://github.com/carhartl/jquery-cookie).


Usage
-----

```html	
<!DOCTYPE HTML>
<html>
<head>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="libs/jquery.cookie.min.js"></script>
	<script type="text/javascript" src="jquery.cookieLegal.js"></script>
	<script type="text/javascript">
		$().ready(function() {
			$().cookieLegal({
				cookiesPage: 'cookie_legal.html'
			});
		});
	</script>
</head>
<body>

	...
	
</body>
</html>
```


Configuration
-------------

```javascript
//required function call - this function sets everything up
$().cookieLegal({
	cookiesPage: 'cookie_legal.html' //URL through to more information about your cookie policy
});
```