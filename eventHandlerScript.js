function Locations(name, minTraffic, maxTraffic) {
  this.name = name;
  this.minTraffic = minTraffic;
  this.maxTraffic = maxTraffic;
  //percentage of traffic entering a Top Pot location
  this.entering = 0.226;
  this.orderPerEntrant = 2.9;
  this.orderPerMonth = 0;
  this.dailyDonutsNeeded = 0;
  this.weeklyDonutsNeeded = 0;
  this.monthlyDonutsNeeded = 0;

  //this function calculates the donuts needed each hour randomly over a month
  this.donutsSold = function() {
    //the for loop is used to run the function 308 times in order to increase accuracy of our final numbers
    for (i=0; i < 308; i++) {
    this.orderPerMonth += ((((Math.random() * (this.maxTraffic - this.minTraffic)) + this.minTraffic) * this.entering * this.orderPerEntrant));
    }
  };
  //this function calculates an estimate of daily donuts needed for purchase
  this.dailyDonuts = function() {
    this.dailyDonutsNeeded += this.orderPerMonth / 28;
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
    var communication = (this.name + ' is estimated to sell ' + Math.round(this.orderPerMonth) + ' donuts per month, ' + Math.round(weekly) + ' donuts per week, and ' + Math.round(daily) + ' donuts per day. ');
    return communication;
  };
}

var $button = $('#submit');
var $summary = $('#summary');

/* This function was created to access elements in our HTML file that contains
the user's inputs: location name, minimum traffic, and maximum traffic. Once 
the elements are accessed they will then be used to create a new store (
  constructor element) and the calculations that are triggered will send it
as an output (innerHTML) for the user to view. */

function userSubmit() {
  var userStoreSubmit = new Locations($('#location').val(), $('#min-traffic').val(), $('#max-traffic').val());
  userStoreSubmit.donutsSold();
  $summary.html("<h2>Projections are: </h2>" + "<p>" + userStoreSubmit.report() + "</p>"); //write output to HTML page
}

/* mouse event that 'listens' for a click behavior which triggers userSubmit function.*/
  $('#submit').on('click', function() {
    userSubmit();
  });

//clear button
$('#clear').click(function() {
  $('#explode').toggle('explode');
  setTimeout(function(){location.reload()},3000);
});


