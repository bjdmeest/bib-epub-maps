$.fn.interactiveMap = function() {
    
    //returns the coordinates of the map's corners
    function getMapsCornersCoordinates() {
    	//static return
    	return {
    		"minlat": "37.7643",
    		"minlon": "-122.4785",
    		"maxlat": "37.8093",
    		"maxlon": "-122.4064"
    	}
	}
	
	//transform Gps coordinates to absolute pixels relative to page
	function coordinatesToPixels() {
		gpsPosition = getGpsPosition();
		corners = getMapsCornersCoordinates();
				
  		position["x"] = (gpsPosition.lon-corners.maxlon) * this.width() / (corners.maxlon-corners.minlon);
  		position["y"] = (gpsPosition.lat-corners.maxlat) * this.height() / (corners.maxlat-corners.minlat);
  		
  		return position;
	}
	
	//move the marker
	function moveMarker() {
		position = coordinatesToPixels();
		
		
		$("img.marker").animate({ 
			top: position["x"],
			left: position["y"]
		}, 1000);
	}
};