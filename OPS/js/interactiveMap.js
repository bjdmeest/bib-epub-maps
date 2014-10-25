$.fn.interactiveMap = function() {
    
    //returns the coordinates of the map's corners
    function getMapsCornersCoordinates() {
      var $bounds = this.getSVGDocument().find('metadata bounds');
    	//static return
    	return {
    		"minlat": bounds.attr('minlat'),
    		"minlon": bounds.attr('minlon'),
    		"maxlat": bounds.attr('maxlat'),
    		"maxlon": bounds.attr('maxlon')
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
  
  this.center = function(position) {
    
  };
  
  return this;
};