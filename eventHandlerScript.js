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
    var communication = (this.name + ' is estimated to sell ' + Math.round(this.orderPerHour) + ' donuts per hour, ' + Math.round(daily) + ' donuts per day, ' + Math.round(weekly) + ' donuts per week, and ' + Math.round(monthly) + ' donuts per month.');
    return communication;
	};
}

$(document).ready(function() {

function userSubmit() {
  var location = $('#location').val();
  var min = $('#min-traffic').val();
  var max = $('#max-traffic').val();

	var userStoreSubmit = new Locations(location, min, max);
	userStoreSubmit.donutsSold();

  $('#summary').html(function() {
    return '<h2>Projections Are: </h2>' + userStoreSubmit.report();
  });
}

$('#submit').on('click', function() {
	$(this).css({'background': 'red'});
  userSubmit();
});
$('#clear').on('click', function() {
  history.go(0);
});

});// end Document.Ready!!!
