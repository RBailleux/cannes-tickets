var app = angular.module("Tickets", []);
app.controller('ticketController', ['$http', '$scope', function($http, $scope, ticketFactory){
	var ctrl = this;
	ctrl.newFilmName = '';
	this.myvar = "le respect";
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
						ctrl.debussy.push(film)
					}
					if(film['hall'] == 'Lumière'){
						ctrl.lumiere.push(film)
					}
				})
			})
		})
		console.log(ctrl.debussy, ctrl.lumiere)
	});
	
	
	

}]);

app.factory('ticketFactory', ['$http', '$q', function($http, $q){
	var obj = {};
	obj.getFilm = function(){
		return [];
	}
	return obj;
}]);