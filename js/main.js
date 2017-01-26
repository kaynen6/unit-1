function initialize(){
    citiesTable();
    addColumns(cities);
    addEvents();
}

// create cities array to hold city names and population

var cities = [{city: "Portland", population: 632309}, 
            {city: "Salem", population: 164549},
            {city: "Eugene", population: 163460},
            {city: "Gresham", population: 10553},
            {city: "Hillsboro", population: 102347}
             ];

function citiesTable(){

    //create html table by appending with jQuery with headers City and Population
    $("#citydiv").append("<table>");
    $("table").append("<tr>");
    $("tr").append("<th>City</th><th>Population</th>");
        
    //create loop to add the data into table
    for (var i = 0; i < cities.length; i++){
        //create row variable to hold html with city data 
        var rowHtml = ("<tr><td>" + cities[i].city + "</td><td>" + cities[i].population + "</td></tr>");
        //append the row's html
        $("table").append(rowHtml);
    }
};

//define the addColumns function, passing in the cities array
function addColumns(cities){
    //for each <tr> element, run this generic function using i as a counter value
    $('tr').each(function(i){
        //if we are at the first '<tr>', i == 0, so we do some code below
    	if (i == 0){
            //append header string of City Size to identify the column of data
    		$(this).append('<th>City Size</th>');
    	} else {
            //otherwise we need to add data, create variable to hold CitySize value
    		var citySize;
            // if population of the cities iteration is less than 100k, assign 'Small' as the size value
    		if (cities[i-1].population < 100000){
    			citySize = 'Small';
            // else if the pop is less than 500k, assign 'Medium' as the size value
    		} else if (cities[i-1].population < 500000){
    			citySize = 'Medium';
            //otherwise it must be large so assign 'Large'
    		} else {
    			citySize = 'Large';
    		};
            //append the html of <td> and the appended CitySize value to the <tr> iteration we are on
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};


//define addEvents function
function addEvents(){
    //when user mouses over the table element, run this generic function to change the color to a random color
	$('table').mouseover(function(){
		//create color variable and give it value holder starter string
		var color = "rgb(";
        // create loop to craete random color values for R,G,B
		for (var i=0; i<3; i++){
            //random color value via Math.random func
			var random = Math.round(Math.random() * 255);
            //append value to color variable string
			color += random;
            // if first two values of color variable, append a comma as well
			if (i<2){
				color += ",";
			//else if last value, append the close parrenthesis
			} else {
				color += ")";
            };
		};
        //add css color style to the table element
		$(this).css('color', color);
	});
    //define clickme function
	function clickme(){
        //popup an alert box telling the user they clicked the table
		alert('Hey, you clicked me!');
	};
    //if user clicks on the table, run clickme function
	$('table').on('click', clickme);
};


//call initialize once document is loaded and ready
$(document).ready(initialize);




