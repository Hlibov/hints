// page init
jQuery(function(){
	initResponseMap();
	initImageMaps();
});

// responsive image map
function initResponseMap() {
	jQuery(function(e) {
		$('img[usemap]').rwdImageMaps();
	})
}


// create imagemaps
function initImageMaps() {
	var imageList = document.getElementsByTagName('img');
	for(var i = 0; i < imageList.length; i++) {
		if(imageList[i].getAttribute('usemap')) {
			new ImageMap({
				image: imageList[i]
			})
		}
	}
}

// image map module
function ImageMap(opt) {
	this.options = {
		delay: 50,
		image: null,
		hoverClass:'activestate'
	}
	for(var p in opt) {
		if(opt.hasOwnProperty(p)) {
			this.options[p] = opt[p];
		}
	}
	this.init();
}
ImageMap.prototype = {
	init: function() {
		if(typeof this.options.image === 'object') {
			this.getElements();
			this.addHandlers();
		}
	},
	getElements: function() {
		this.mapId = this.options.image.getAttribute('usemap');
		this.mapId = this.mapId.substring(1);
		this.map = document.getElementById(this.mapId);
		if(this.map) {
			this.areas = this.map.getElementsByTagName('area');
		}
	},
	addHandlers: function() {
		if(this.areas) {
			for(var i = 0; i < this.areas.length; i++) {
				(function(inst){
					var timer;
					var area = inst.areas[i];
					var node = document.getElementById(inst.areas[i].alt);
					if(node) {
						area.onmouseover = function() {
							clearTimeout(timer);
							timer = setTimeout(function(){
								inst.addClass(node, inst.options.hoverClass);
							},inst.options.delay)
						}
						area.onmouseout = function() {
							clearTimeout(timer);
							timer = setTimeout(function(){
								inst.removeClass(node, inst.options.hoverClass);
							},inst.options.delay)
						}
						node.onmouseover = function() {
							clearTimeout(timer);
						}
						node.onmouseout = function() {
							clearTimeout(timer);
							timer = setTimeout(function(){
								inst.removeClass(node, inst.options.hoverClass);
							},inst.options.delay)
						}
					}
				})(this);
			}
		}
	},
	hasClass: function(el,cls) {
		return el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	},
	addClass: function(el,cls) {
		if (!this.hasClass(el,cls)) el.className += " "+cls;
	},
	removeClass: function(el,cls) {
		if (this.hasClass(el,cls)) {el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');}
	}
}

/*
* rwdImageMaps jQuery plugin v1.4
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2012 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var d=this,c=parseFloat(a.fn.jquery);var b=function(){d.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var f=this,e=a(f);a("<img />").load(function(){var o,k,i="width",n="height";if(c<1.6){o=f.getAttribute(i),k=f.getAttribute(n)}else{o=e.attr(i),k=e.attr(n)}if(!o||!k){var p=new Image();p.src=e.attr("src");if(!o){o=p.width}if(!k){k=p.height}}var g=e.width()/100,l=e.height()/100,j=e.attr("usemap").replace("#",""),m="coords";a('map[name="'+j+'"]').find("area").each(function(){var s=a(this);if(!s.data(m)){s.data(m,s.attr(m))}var r=s.data(m).split(","),q=new Array(r.length);for(var h=0;h<q.length;++h){if(h%2===0){q[h]=parseInt(((r[h]/o)*100)*g)}else{q[h]=parseInt(((r[h]/k)*100)*l)}}s.attr(m,q.toString())})}).attr("src",e.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);