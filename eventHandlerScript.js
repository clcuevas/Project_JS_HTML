function Locations(name, minTraffic, maxTraffic) {
	this.name = name;
	this.minTraffic = minTraffic;
	this.maxTraffic = maxTraffic;
	//percentage of traffic entering a Top Pot location
	this.entering = 0.226;
	this.orderPerEntrant = 2.9;
	this.orderPerHour = 0;
  this.dailyDonutsNeeded = 0;
  this.weeklyDonutsNeeded = 0;
  this.monthlyDonutsNeeded = 0;

	//this function calculates the donuts needed by the hour depending on the traffic
	this.donutsSold = function() {
		this.orderPerHour += ((((Math.random() * (this.maxTraffic - this.minTraffic)) + this.minTraffic) * this.entering * this.orderPerEntrant));
	};

	//this function calculates an estimate of daily donuts needed for purchase
  this.dailyDonuts = function() {
    this.dailyDonutsNeeded += this.orderPerHour * 11;
    return this.dailyDonutsNeeded;
  };

  //this function calculates an estimate of weekly donuts needed for purchase
	this.weeklyTotal = function() {
		this.weeklyDonutsNeeded += (this.dailyDonutsNeeded * 7);
		return this.weeklyDonutsNeeded;
	};

	//this function calculates an estimate of monthly donuts needed for purchase
	this.monthlyTotal = function() {
		this.monthlyDonutsNeeded += (this.weeklyDonutsNeeded * 4);
		return this.monthlyDonutsNeeded;
	};

	//this function assist with returning a report for the hourly, daily, weekly, and monthly donuts needed
	this.report = function() {
    var daily = this.dailyDonuts();
    var weekly = this.weeklyTotal();
    var monthly = this.monthlyTotal();
    var communication = (this.name + ' is estimated to sell ' + Math.floor(this.orderPerHour) + ' donuts per hour, ' + Math.floor(daily) + ' donuts per day, ' + Math.floor(weekly) + ' donuts per week, and ' + Math.floor(monthly) + ' donuts per month.');
    return communication;
	};
}

var button = document.getElementById('submit');
var summary = document.getElementById('summary');

/* This function was created to access elements in our HTML file that contains
the user's inputs: location name, minimum traffic, and maximum traffic. Once 
the elements are accessed they will then be used to create a new store (
	constructor element) and the calculations that are triggered will send it
as an output (innerHTML) for the user to view. */
function userSubmit() {
	var location = document.getElementById('location').value;
	var min = document.getElementById('min-traffic').value;
	var max = document.getElementById('max-traffic').value;
	var userStoreSubmit = new Locations(location, min, max);
	userStoreSubmit.donutsSold();
	var msg = '<h2>Projections Are: </h2>';
	msg += userStoreSubmit.report();
	summary.innerHTML = msg; //write output to HTML page
}

/* mouse event that 'listens' for a click behavior which triggers userSubmit
function. the element used is the button variable with an id=submit*/
button.addEventListener('click', userSubmit, false);




