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
	//this function calculates the donuts sold by the hour depending on the traffic
	this.donutsSold = function() {
		this.orderPerHour += ((((Math.random() * (this.maxTraffic - this.minTraffic)) + this.minTraffic) * this.entering * this.orderPerEntrant));
	};
	//this function returns the report of each location with the # of donuts sold
  this.dailyDonuts = function() {
    this.dailyDonutsNeeded += this.orderPerHour * 11;
    return this.dailyDonutsNeeded;
  };
	this.weeklyTotal = function() {
		this.weeklyDonutsNeeded += (this.dailyDonutsNeeded * 7);
		return this.weeklyDonutsNeeded;
	/*this.monthlyTotal = function() {
		this.monthlyDonutsNeeded += (this.weeklyDonutsNeeded * 4);
		return this.monthlyDonutsNeeded;*/
	};
	/*var total = 0;
	for (var  i = 0; i < 308; i++) {
		var eachHour = this.donutsSold();
		total += eachHour;
		return total;*/

	/*var weekAverage = total / 4;
	var dailyAverage = total / 28;*/

	this.report = function() {
		/*console.log(this.name + " has " + Math.floor(this.orderPerHour) + " donuts per hour.");
    console.log("Total for the day: " + Math.floor(this.dailyDonuts()));*/
    var daily = this.dailyDonuts();
    var weekly = this.weeklyTotal();
    //var monthly = this.monthlyTotal();
    var communication = (this.name + ' is estimated to sell ' + Math.floor(this.orderPerHour) + ' donuts per hour, ' + Math.floor(daily) + ' donuts per day, ' + Math.floor(weekly) + ' weekly, and ' /*+ Math.floor(monthly) + ' donuts per month.')*/);
    return communication;
    /*return (this.name + "is estimated to sell " this.orderPerHour +  " per Hour " + xx);*/

    /*console.log(this.total);*/
	};
}

var button = document.getElementById('submit');
var summary = document.getElementById('summary');

function userSubmit() {
	var location = document.getElementById('location').value;
	var min = document.getElementById('min-traffic').value;
	var max = document.getElementById('max-traffic').value;
	var userStoreSubmit = new Locations(location, min, max);
	userStoreSubmit.donutsSold();
	var msg = '<h2>Projections Are: </h2>';
	msg += userStoreSubmit.report();
	summary.innerHTML = msg; 
}

button.addEventListener('click', userSubmit, false);




