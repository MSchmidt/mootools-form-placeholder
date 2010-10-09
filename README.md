MooTools-Form-Placeholder
===========

Provides a fallback for the placeholder property on input elements for *older* browsers.

Right now the placeholder property is only supported in Webkit browsers and Firefox 4.
This plugin will bring it to all the other browsers and do nothing in browsers with native support.

![Screenshot](http://github.com/MSchmidt/mootools-form-placeholder/raw/master/screenshot.png)

How to use
----------

Include MooTools.Core and Form.Placeholder in your document

	<script type="text/javascript" src="mootools-1.2.5-core-yc.js"></script>
	<script type="text/javascript" src="Form.Placeholder-min.js"></script>

Define a placeholder on your input field and call Form.Placeholder with the ID of the field

	<input type="text" id="statusupdate" name="statusupdate" placeholder="What's on your mind?" />
	
	<script type="text/javascript" charset="utf-8">
		new Form.Placeholder('statusupdate');
	</script>

Done!