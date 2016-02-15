/*
 *  jquery.fluidify - v0.5.0
 *  jQuery plugin to make bootstrap containers more fluid.
 *  http://github.com/ddedic/jquery.fluidify
 *
 *  Made by Danijel Dedic
 *  Under MIT License
 */

;(function ( $, window, document, undefined ) {

	"use strict";

		var pluginName = "jFluidify",
			defaults = {
                position: "relative",
                width: "100",
                gutter: 15,
                breakpints: {
	                lg: 1200,
	                md: 992,
	                sm: 768,
	                xs: 480
                }
		};

		function Plugin ( element, options ) {
			this.element = element;

			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
			init: function () {
				var me = this;
				$(this.element).data('jFluidifyInitialWidth', $(this.element).width());
				me.setupElement();

			    $(window).resize(function(){
			        console.log("resize event fired");
			        me.setupElement();
			    });



			    var root_container = null;
			    var $parent_containers = $(this.element).parents('.container');

			    console.log($parent_containers);

			    if ($parent_containers.size() > 1) {

			    	console.log($parent_containers);

			    	root_container = $parent_containers[$parent_containers.size() - 1];
			    } else {
			    	root_container = $parent_containers[0];
			    }

			    console.log(root_container);


			},
			setupElement: function () {
				var window_width = $(window).width();
				var element_width = $(this.element).data('jFluidifyInitialWidth');
				var diff = (window_width - element_width) / 2;

				console.log(element_width);

				if (this.settings.width < 100) {
					// @todo
				}

				$(this.element).css({
					'position': this.settings.position,
					'overflow': 'hidden',
					'margin-left': '-' + diff + 'px',
					'width': element_width + (diff * 2)  + 'px'
				});

			}
		});


		$.fn[ pluginName ] = function ( options ) {
			return this.each(function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
				}
			});
		};

})( jQuery, window, document );

