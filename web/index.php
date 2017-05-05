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
		<section ng-controller="ticketController as ctrl">
			<h1>Tickets</h1>
			<div class="row">
				<div class="col-sm-offset-2 col-sm-1">Debussy</div>
				<div class="col-sm-9">Lumière</div>
			</div>
			<div class="row" ng-repeat="dates in ctrl.dates">
				<div class="col-xs-12 col-sm-2 date">
					{{dates.date}}
				</div>
				<div class="col-sm-1" ng-repeat-end ng-repeat="hours in dates.hours">
					{{hours.hour}}
				</div>
			</div>
		</section>
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
					<tr ng-repeat="dates in ctrl.dates" class="colDates">
						<td>{{readableDate(dates.date)}}</td>
					</tr>
				</tbody>				
			</table>
		</div>
	</body>
</html>
