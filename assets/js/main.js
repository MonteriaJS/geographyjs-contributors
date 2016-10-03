var myMap;
var marker;
var myPolygon;

$(document).ready(function(){
	initMap();
	getPosition();
	createPolygon();
})

function initMap(){
	myMap = new google.maps.Map( document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: true,
          zoom: 15
        
	})

}

function getPosition() {
	navigator.geolocation.getCurrentPosition(showPosition); 
	function showPosition(position) {
		myMap.setCenter( new google.maps.LatLng(position.coords.latitude, position.coords.longitude) )
		createMarker(position.coords.latitude, position.coords.longitude);
	}
}

function createMarker(lat, lng) {
	marker = new google.maps.Marker({
		position 	: new google.maps.LatLng(lat, lng),
		title 		: 'yo',
		map 		: myMap
	})

	marker.addListener('click', function(e){
		alert('hola')
	})
}

function createPolygon() {
	myPolygon = new google.maps.Polygon({
		paths 	: [
				    {lat: 25.774, lng: -80.190},
				    {lat: 18.466, lng: -66.118},
				    {lat: 32.321, lng: -64.757},
				    {lat: 25.774, lng: -80.190}
				  ],
		map 	: myMap
	})
}