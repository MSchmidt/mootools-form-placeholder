MooTools-Form-Placeholder
===========

Provides a fallback for the placeholder property on input elements for *older* browsers.

Right now the placeholder property is only supported in Webkit browsers and Firefox 4.
This plugin will bring it to all the other browsers and will do nothing in browsers with native support.

![Screenshot](https://github.com/MSchmidt/mootools-form-placeholder/raw/master/screenshot.jpg)

How to use
----------

Include MooTools.Core and Form.Placeholder in your document

	<script type="text/javascript" src="mootools-1.2.5-core-yc.js"></script>
	<script type="text/javascript" src="Form.Placeholder-min.js"></script>

Define a placeholder on your input field and call Form.Placeholder with the ID of the field

	<input type="text" id="statusupdate" name="statusupdate" placeholder="What's on your mind?" />
	
	<script type="text/javascript" charset="utf-8">
		window.addEvent('domready', function() {
			new Form.Placeholder('statusupdate');
		});
	</script>

Done!

You can have a look at the Examples folder for a complete working example.

Options
-------

**color** - change the color of the placeholder text, defaults to *#A9A9A9* (same as Chrome)

**clearOnSubmit** - whether the input field gets cleared when parent form is submitted, defaults to *true*

clearOnSubmit is used to simplify validation on the server-side. The input field will be cleared on submit and therefor you only need
to check if the value of the field is blank. (rather than checking whether it equals the placeholder too).

	new Form.Placeholder('statusupdate', {
		color: '#A9A9A9',
		clearOnSubmit: true
	});

Changelog
---------

* **1.2** - 19.11.2010
	* support for password fields
	* fix issue where placeholder didn't work after a manual browser refresh
* **1.1** - 08.10.2010
	* first complete release

Known issues
------------

When a user enters the exact same text as the placeholder, the entered content won't be submitted.

Notes
-----

Page on MooTools Forge: [form_placeholder](http://mootools.net/forge/p/form_placeholder "Page on MooTools Forge")

Credits
-------

Thanks to [cpojer](http://github.com/cpojer) for the original implementation
of [MooTools-Form-Placeholder for MooTools 1.3](http://github.com/cpojer/mootools-form-placeholder)

Thanks to the whole [MooTools Team](http://mootools.net/developers)!