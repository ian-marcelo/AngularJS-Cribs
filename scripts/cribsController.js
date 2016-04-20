angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory) {

		$scope.cribs;

		/* Fetch Data from Cribs Factory */
		cribsFactory.getCribs().success(function(data) {
			$scope.cribs = data;
		}).error(function(error) {
			console.log(error);
		});

		/* Default Price Range */
		$scope.priceInfo = {
			min: 0,
			max: 1000000
		}

		/* Add to listing */
		$scope.newListing = {};

		$scope.addCrib = function(newListing) {
			newListing.image = 'img-default'
			$scope.cribs.push(newListing);
			$scope.newListing = {};
			$scope.addListing = false;
		}

		/* Edit a list */
		$scope.editCrib = function(crib) {
			$scope.editListing = true;
			$scope.existingListing = crib;
		}

		$scope.saveCribEdit = function() {
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		/* Delete a list */
		$scope.deleteCrib = function(listing) {
			var index = $scope.cribs.indexOf(listing);
			$scope.cribs.splice(index, 1);
			$scope.existingListing = {};
			$scope.editListing = false;
		}

	});