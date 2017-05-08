<!DOCTYPE html>
<html lang="en" ng-app="Tickets">
	<head>
		<meta charset="UTF-8">
		<title>Cannes tickets</title>
		<script src="bower_components/angular/angular.min.js"></script>
		<script src="bower_components/jquery/dist/jquery.min.js"></script>
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		
		<script src="app.js"></script>
		
		<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />
		<link rel="stylesheet" href="app.css">
	</head>
	<body>
<!-- 	https://github.com/smwhr/cannes-tickets -->
		<div class="table-responsive" ng-controller="ticketController as ctrl">
			<table class="table">
				<thead>
					<tr>
						<td></td>
						<td>Debussy</td>
						<td>Lumière</td>
						<td>Crédits restant : {{ctrl.credit}}</td>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="dates in ctrl.dates">
						<td class="colDate">{{readableDate(dates.date)}}</td>
						<td class="filmCol"  ng-repeat="film in ctrl.debussy" ng-if="dates.date==film.date">
							<div class="filmEntry" ng-click="clickFilm($event, film)" data-film="{{film.title}}">
    							<p class="filmInfo">
        							<b>{{film.title}}</b><br>
        							{{film.director}}<br>
        							<br>
        							<span class="hour">{{film.hour}}</span>
        							<span class="askInfo isnotasked">demander</span>
        							<span class="askInfo isasked">demandée</span>
        							<span class="highDemand" ng-if="film.isHighDemand==true"></span>
    							</p>
							</div>
						</td>
						<td class="filmCol" ng-repeat="n in ctrl.filmHours track by $index">
							<div class="filmEntry" ng-repeat="film in ctrl.lumiere" ng-if="dates.date==film.date" ng-click="clickFilm($event, film)" data-film="{{film.title}}">
    							<p class="filmInfo" ng-show="filmInRangeHour(film,n)">
        							<b>{{film.title}}</b><br>
        							{{film.director}}<br>
        							<br>
        							<span class="hour">{{film.hour}}</span>
        							<span class="askInfo isnotasked">demander</span>
        							<span class="askInfo isasked">demandée</span>
        							<span class="highDemand" ng-if="film.isHighDemand==true"></span>
    							</p>
    						</div>
						</td>
					</tr>
				</tbody>				
			</table>
		</div>
	</body>
</html>
