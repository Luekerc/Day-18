var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		

		_.bindAll(
			this,
			'onButtonClick'
		);

		var $button = $('#my-button');
		$button.on('click', this.onButtonClick);

		this.$random1 = $('#random1');
		this.$random2 = $('#random2');
		this.$random3 = $('#random3');
	},

	onButtonClick: function(e) {
		var x = Math.floor(Math.random()*3);
		var y = Math.floor(Math.random()*3);
		var z = Math.floor(Math.random()*3);

		this.$random1.html(x);
		this.$random2.html(y);
		this.$random3.html(z);
	
	var slotMachine = function(){

  	if( x > y && y > z)
   	{
 
   	$('#results').append("YOU WIN");
   	}
   	else {

   	$('#results').append("Please try again, my friend.");
   	}
};
	slotMachine();

	}
});

// function onResultsReceived(data) {
// 	console.log(data);	
	
// 	for (var i=0; i<data.Search.length; i++){
// 		var movieInfo=data.Search[i];
// 		var newRow = makeRow(movieInfo);
// 		$('#results').append(newRow);
// 	}	
// 	function makeRow(data){
// 		console.log(data);
// 		return '<tr><td>' + data.Title + '</td>\
// 		<td>'+data.Year+'</td></tr>';
// 		}
// 		$("tr").click(function(){
// 			console.log(this);
// 			$('.towatch').append(this);
// 		})

// 	}