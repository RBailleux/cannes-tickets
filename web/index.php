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
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="dates in ctrl.dates">
						<td class="colDate">{{readableDate(dates.date)}}</td>
						<td class="filmCol"  ng-repeat="film in ctrl.debussy" ng-if="dates.date==film.date">
							<div class="filmEntry">
    							<p class="filmInfo">
        							<b>{{film.title}}</b><br>
        							{{film.director}}<br>
        							<br>
        							<span class="hour">{{film.hour}}</span>
        							<span class="askInfo"></span>
        							<span class="highDemand" ng-if="film.isHighDemand==true"></span>
    							</p>
							</div>
						</td>
						<td class="filmCol" ng-repeat="n in ['8:30', '11:00', '13:30', '15:00', '18:30', '22:00', '23:59']">
							<div class="filmEntry" ng-repeat="film in ctrl.lumiere" ng-if="dates.date==film.date">
    							<p class="filmInfo" ng-if="film.hour==n">
        							<b>{{film.title}}</b><br>
        							{{film.director}}<br>
        							<br>
        							<span class="hour">{{film.hour}}</span>
        							<span class="askInfo"></span>
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
