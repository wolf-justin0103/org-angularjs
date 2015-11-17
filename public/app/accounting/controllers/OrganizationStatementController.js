angular.module('oraApp.accounting')
	.controller('OrganizationStatementController', ['$scope', '$stateParams', 'accountService',
		function ($scope, $stateParams, accountService) {
			var limit = 0;
			$scope.statement = null;
			$scope.initialBalance = 0;
			$scope.isAllowed = accountService.isAllowed.bind(accountService);

			this.loadMore = function() {
				limit += 10;
				accountService
					.organizationStatement({ orgId: $stateParams.orgId, limit: limit })
					.$promise.then(function(result) {
						$scope.statement = result;
						$scope.initialBalance = accountService.getInitialBalance(result.transactions);
					});
			};
			this.loadMore();
		}]);