// Initialize Parse app
Parse.initialize("CCsV65azRRrpRQHyuHBXdbjWHFHtsTg3YGXDdcML", "7vftCEgw7ANHT8KxD2g1kWWFFr636NGumX14o1SD");

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend("Music");

// Create a new instance of your Music class 
// var musicItem = new Music();

// // Set a property 'band' equal to a band name
// musicItem.set('band', 'The Killers');

// // Set a property 'website' equal to the band's website
// musicItem.set('website', 'www.thekillersmusic.com/');
    
// // Set a property 'song' equal to a song
// musicItem.set('song', 'Mr. Brightside');

// // Save your instance of your song -- and go see it on parse.com!
// musicItem.save();

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var musicItem = new Music();

	// For each input element, set a property of your new instance equal to the input's value
	musicItem.set('band', $("#bandname").val());
	musicItem.set('website', $("#website").val());
	musicItem.set('song', $("#bestsong").val());

	$(this).find('input').each(function () {
		musicItem.set($(this).attr('id'), $(this).val());
		$(this).val('');
	});

	// After setting each property, save your new instance back to your database
	musicItem.save();
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


