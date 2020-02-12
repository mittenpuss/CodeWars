const areaOrPerimeter = function(l , w) {
    if(l===w){
        var sisi=l*w
        return sisi
    }else{
        var area=(l*2)+(w*2)
        return area
    }

};

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

//area_or_perimeter(6, 10) --> 32
//area_or_perimeter(4, 4) --> 16