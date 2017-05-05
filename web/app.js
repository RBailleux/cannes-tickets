var app = angular.module("Tickets", []);
app.controller('ticketController', ['$http', '$scope', function($http, $scope, ticketFactory){
	this.dates = [];
	this.seances = [];
	this.debussy = [];
	this.lumiere = [];
	this.booking = [];
	this.creditHistory = [];
	this.credit = 7;
	
	var ctrl = this;
	
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
	
	$scope.clickFilm = function(event, film){
		if(ctrl.booking.includes(film.title)){
			var conf = confirm("Souhaitez-vous vraiment annuler la réservation sur ce film ?")
			if(conf === true){
				unbook(film);
			}
		}
		else{
			book(film);
		}
	}
	
	function book(film){
		if(!ctrl.booking.includes(film.title)){
			
			if(film.isHighDemand == true){
				if((ctrl.credit-2) < 0){
					alert("Vous n'avez plus asser de crédit.")
				}
				else{
					ctrl.booking.push(film.title)
					ctrl.creditHistory.push(2)
					ctrl.credit = ctrl.credit -2;
					elems = angular.element(document.querySelectorAll("[data-film='"+film.title+"']"));
					angular.forEach(elems, function(elem, key){
						var booked = document.createAttribute("class");
						booked.value = elem.attributes.getNamedItem("class").value + " booked";
						elem.attributes.setNamedItem(booked)
					})
				}
			}
			else{
				if((ctrl.credit-1) < 0){
					alert("Vous n'avez plus asser de crédit.")
				}
				else{
					ctrl.booking.push(film.title)
					ctrl.creditHistory.push(1)
					ctrl.credit = ctrl.credit -1;
					elems = angular.element(document.querySelectorAll("[data-film='"+film.title+"']"));
					angular.forEach(elems, function(elem, key){
						var booked = document.createAttribute("class");
						booked.value = elem.attributes.getNamedItem("class").value + " booked";
						elem.attributes.setNamedItem(booked)
					})
				}
			}
		}
	}
	
	function unbook(film){
		if(ctrl.booking.includes(film.title)){
			var historyIndex = ctrl.booking.indexOf(film.title);
			ctrl.credit = ctrl.credit+ctrl.creditHistory[historyIndex];
			ctrl.booking.splice(historyIndex, 1);
			ctrl.creditHistory.splice(historyIndex, 1);
			elems = angular.element(document.querySelectorAll("[data-film='"+film.title+"']"));
			angular.forEach(elems, function(elem, key){
				var classes = elem.attributes.getNamedItem("class").value;
				var arrClasses = classes.split(" ");
				var unBookedClasses = ''
				arrClasses.forEach(function(classe){
					if(classe != "booked"){
						unBookedClasses += classe+" "
					}
				})
				var unBooked = document.createAttribute("class");
				unBooked.value = unBookedClasses;
				elem.attributes.setNamedItem(unBooked)
			})
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