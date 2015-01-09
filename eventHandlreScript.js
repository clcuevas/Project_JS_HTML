function Locations(name, minTraffic, maxTraffic) {
	this.name = name;
	this.minTraffic = minTraffic;
	this.maxTraffic = maxTraffic;
	//percentage of traffic entering a Top Pot location
	this.entering = 0.226;
	this.orderPerEntrant = 2.9;
	this.orderPerHour = 0;
  this.dailyDonutsNeeded = 0;
	//this function calculates the donuts sold by the hour depending on the traffic
	this.donutsSold = function() {
		this.orderPerHour += ((((Math.random() * (this.maxTraffic - this.minTraffic)) + this.minTraffic) * this.entering * this.orderPerEntrant));
	};

	this.monthTotal = function () {
		var total = 0;
		for (var  i = 0; i < 308; i++) {
			var eachHour = this.donutsSold ();
			total += eachHour;
			return total;
		}
		var weekAverage = total / 4;
		var dailyAverage = total / 28; 
	};
	//this function returns the report of each location with the # of donuts sold
  this.dailyDonuts = function() {
    this.dailyDonutsNeeded += this.orderPerHour * 11;
    return this.dailyDonutsNeeded;
  };
	this.report = function() {
		console.log(this.name + " has " + Math.floor(this.orderPerHour) + " donuts per hour.");
    console.log("Total for the day: " + Math.floor(this.dailyDonuts()));

    /*console.log(this.total);*/
	};
}

/* var xxx = new Locations("Downtown", 4, 5);
xxx.monthTotal();
xxx.dailyDonuts();
xxx.report(); */
var button = document.getElementById('submit');
var summary = document.getElementById('summary');

function userSubmit() {
	var location = document.getElementById('location').value;
	var min = document.getElementById('min-traffic').value;
	var max = document.getElementById('max-traffic').value;
	var userStoreSubmit = new Locations(location, min, max);
	userStoreSubmit.donutsSold();
	userStoreSubmit.report();
	var msg = '<h2>This is to test our output with Per Hour & Total Day: </h2>';
	msg += userStoreSubmit.report;
	summary.innerHTML = msg; 
}

button.addEventListener('click', userSubmit, false);




