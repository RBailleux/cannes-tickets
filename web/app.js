var app = angular.module("Tickets", []);
app.controller('ticketController', ['$http', '$scope', function($http, $scope, ticketFactory){
	var ctrl = this;
	ctrl.newFilmName = '';
	this.myvar = "le respect";
	this.a = false;
	this.b = true;
	
	this.films = [];
	var promise = $http.get("data/data.json");
	promise.then(function(data){
		ctrl.films = data.data;
		console.log(ctrl.films)
	});

}]);

app.factory('ticketFactory', ['$http', '$q', function($http, $q){
	var obj = {};
	obj.getFilm = function(){
		return [];
	}
	return obj;
}]);