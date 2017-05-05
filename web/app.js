var app = angular.module("Tickets", []);
app.controller('ticketController', ['$http', '$scope', function($http, $scope, ticketFactory){
	var ctrl = this;
	ctrl.newFilmName = '';
	this.a = false;
	this.b = true;
	
	this.dates = [];
	this.seances = [];
	this.debussy = [];
	this.lumiere = [];
	var promise = $http.get("data/data.json");
	promise.then(function(data){
		ctrl.dates = data.data[0]["dates"];
		ctrl.dates.forEach(function(date){
			date['hours'].forEach(function(hour){
				hour['films'].forEach(function(film){
					if(film['hall'] == 'Debussy'){
						var temp = [];
						temp[date["date"]] = film;
						ctrl.debussy.push(temp)
					}
					if(film['hall'] == 'Lumière'){
						var temp = [];
						temp[date["date"]] = film;
						ctrl.lumiere.push(temp)
					}
				})
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
	
	

}]);

app.factory('ticketFactory', ['$http', '$q', function($http, $q){
	var obj = {};
	obj.getFilm = function(){
		return [];
	}
	return obj;
}]);