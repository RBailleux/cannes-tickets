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
		<div class="row" ng-controller="ticketController as ctrl">
			<div class="col-xs-12 col-sm-10 col-sm-offset-1">
				<img src="images/logo-festival-de-cannes.png" alt="Festival de Cannes">
				<h3>Crédits restant : {{ctrl.credit}}</h3>
			</div>
			<div class="col-xs-12 col-sm-10 col-sm-offset-1">
        		<div class="table-responsive">
        			<table class="table">
        				<thead>
        					<tr>
        						<td style="background-color:transparent;"></td>
        						<td>Debussy</td>
        						<td colspan="7">Lumière</td>
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
        						<td class="filmCol" ng-repeat="n in ctrl.filmSeances">
        						
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
        	</div>
		</div>
	</body>
</html>
