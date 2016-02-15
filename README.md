# jQuery Fluidify [![Bower Version](https://badge.fury.io/bo/jquery.fluidify.svg)]

### Desc

So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome! Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them.

This project won't seek to provide a perfect solution to every possible pattern, but will attempt to cover a simple template for beginners and above. By using a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.fluidify.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").fluidify({
		propertyName: "a custom value"
	});
	```

## Team

## Contributing

Check [CONTRIBUTING.md](https://github.com/ddedic/jquery.fluidify/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/ddedic/jquery.fluidify/releases) for detailed changelog.

## License

[MIT License](https://opensource.org/licenses/MIT/)
