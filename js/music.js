// Initialize Parse app
Parse.initialize("qy2RLKMkO8x2VLNzwejI36e4SLxv4OuzISilPqtA", "1W4XlMhbQoBJePu8IXsdWAhe39x036zoUwEPfXhM")
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
	musicItem.save(null, function() {
        success:getData
    });
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class
    var query = new Parse.Query(Music);

	// Set a parameter for your query -- where the website property isn't missing
    query.exists('website');

	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
    query.find({
        success:function(response) {
            buildList(response)
        }
    });

}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	$('ol').empty();
	// Loop through your data, and pass each element to the addItem function
    data.forEach(function(d) {
        addItem(d);
    });
}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function
    var website = item.get("website");
    var band = item.get("band");
    var song = item.get("song");

	
	// Append li that includes text from the data item
    var li = $('<li>' + band + ' ' + website + ' ' + song + '</li>')
    var button = $('<button class="btn-xs btn-danger"><span class="glyphicon glyphicon-minus"></span></button>')
    button.on('click', function() {
        item.destroy({
            success:getData
        })
    })
    li.append(button);
    $("#list").append(li);

	
	// Time pending, create a button that removes the data item on click

}

// Call your getData function when the page loads
getData();

