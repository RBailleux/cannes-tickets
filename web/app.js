var app = angular.module("Tickets", []);
app.controller('ticketController', ['$http', '$scope', function($http, $scope, ticketFactory){
	this.dates = [];
	this.seances = [];
	this.debussy = [];
	this.lumiere = [];
	
	var ctrl = this;
	this.booking = [];
	var promise = $http.get("data/data.json");
	promise.then(function(data){
		ctrl.dates = data.data[0]["dates"];
		ctrl.dates.forEach(function(date){
			date['films'].forEach(function(film){
				if(film['hall'] == 'Debussy'){
					var temp = null;
					film.date = date["date"]
					temp = film;
					ctrl.debussy.push(temp)
				}
				if(film['hall'] == 'Lumière'){
					var temp = null;
					film.date = date["date"]
					temp = film;
					ctrl.lumiere.push(temp)
				}
			})
		})
		console.log(ctrl.debussy, ctrl.lumiere)
	});
	
	$scope.readableDate = function(date){
		var weekday = new Array(7);
		weekday[0] = "Dimanche";
		weekday[1] = "Lundi";
		weekday[2] = "Mardi";
		weekday[3] = "Mercredi";
		weekday[4] = "Jeudi";
		weekday[5] = "Vendredi";
		weekday[6] = "Samedi";
		var d = new Date(date);
		return weekday[d.getDay()]+" "+d.getDate();
	}
	
	$scope.clickFilm = function(film){
		if(ctrl.booking.includes(film.title)){
			var conf = confirm("Souhaitez-vous vraiment annuler la réservation sur ce film ?")
			if(conf === true){
				unbook(film);
			}
		}
		else{
			book(film);
		}
		console.log(ctrl.booking)
	}
	
	function book(film){
		if(!ctrl.booking.includes(film.title)){
			ctrl.booking.push(film.title)
		}
	}
	
	function unbook(film){
		if(ctrl.booking.includes(film.title)){
			ctrl.booking.splice(ctrl.booking.indexOf(film.title), 1);
		}
	}
	
	

}]);

app.filter('range', function() {
	return function(input, total) {
		total = parseInt(total);
	    for (var i=0; i<total; i++) {
	      input.push(i);
	    }
	    return input;
	};
});

app.factory('ticketFactory', ['$http', '$q', function($http, $q){
	var obj = {};
	obj.getFilm = function(){
		return [];
	}
	return obj;
}]);