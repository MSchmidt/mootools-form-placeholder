MooTools-Form-Placeholder
===========

Provides a fallback for the placeholder property on input elements for *older* browsers.

Right now the placeholder property is only supported in Webkit browsers and Firefox 4.
This plugin will bring it to all the other browsers and will do nothing in browsers with native support.

![Screenshot](http://github.com/MSchmidt/mootools-form-placeholder/raw/master/screenshot.jpg)

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

Options
-------

_color_ - change the color of the placeholder text, defaults to *#A9A9A9* (same as Chrome)

_clearOnSubmit_ - whether the input field gets cleared when parent form is submitted, defaults to *true*

clearOnSubmit is used to simplify validation on the server-side. The input field will be cleared on submit and therefor you only need
to check if the value of the field is blank. (rather than checking whether it equals the placeholder too).

	new Form.Placeholder('statusupdate', {
		color: '#A9A9A9',
		clearOnSubmit: true
	});

Notes
-----

Page on MooTools Forge: [form_placeholder](http://mootools.net/forge/p/form_placeholder "Page on MooTools Forge")