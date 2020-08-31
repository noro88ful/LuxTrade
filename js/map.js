function map(n){
	google.maps.Map.prototype.setCenterWithOffset = function(latlng,offsetX,offsetY){
		var map = this;
		var ov = new google.maps.OverlayView()
		ov.onAdd = function(){
			var proj = this.getProjection()
			var aPoint = proj.fromLatLngToContainerPixel(latlng)
			aPoint.x = aPoint.x+offsetX;
			aPoint.y = aPoint.y+offsetY;
			map.panTo(proj.fromContainerPixelToLatLng(aPoint))
			// map.setCenter(proj.fromContainerPixelToLatLng(aPoint)
		}
		ov.draw = function(){}
		ov.setMap(this)
	};
	var markers = new Array()
	var infowindow = new google.maps.InfoWindow({
		// pixelOffset: new google.maps.Size(-230,250)
	})
	var locations = [
		[new google.maps.LatLng(53.819055,27.8813694)],
		[new google.maps.LatLng(53.700055,27.5513694)],
		[new google.maps.LatLng(53.809055,27.5813694)],
		[new google.maps.LatLng(53.859055,27.5013694)],

	]
	var options = {
		zoom: 10,
		penControl: false,
		mapTypeControl: false,
		center: locations[0][0],
		styles:[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    }
],
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('map'),options)
	var icon = {
		url: 'img/icons/map.svg',
		scaledSize: new google.maps.Size(18,20),
		anchor: new google.maps.Point(9,10)
	}
	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			icon:icon,
			position: locations[i][0],
			map: map,
		})
		google.maps.event.addListener(marker,'click',(function(marker,i){
			return function(){
				for (var m = 0; m < markers.length; m++) {
					markers[m].setIcon(icon)
				}
				var cnt = i+1
				infowindow.setContent($('.contacts-map-item_'+cnt).html())
				infowindow.open(map, marker)
				marker.setIcon(icon)
				map.setCenterWithOffset(marker.getPosition(),0,0)
				setTimeout(function(){
					baloonstyle()
				},10)
			}
		})(marker,i))
		markers.push(marker)
	}
	if (n) {
		var nc = n-1
		setTimeout(function(){
			google.maps.event.trigger(markers[nc],'click')
		},500)
	}
}
function baloonstyle(){
	$('.gm-style-iw').parent().addClass('baloon');
	$('.gm-style-iw').prev().addClass('baloon-style');
	$('.gm-style-iw').next().addClass('baloon-close');
	$('.gm-style-iw').addClass('baloon-content');
}
if ($("#map").length>0) {
	map()
}