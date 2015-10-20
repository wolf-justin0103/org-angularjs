angular.module('oraApp.collaboration')
	.factory('taskService', ['$resource', 'identity',
		function($resource, identity) {
			return $resource('api/:orgId/task-management/tasks/:taskId/:controller', { orgId: '@orgId' }, {
				query:  { method: 'GET', isArray: false, headers: { 'GOOGLE-JWT': identity.getToken() } },
				delete:  { method: 'DELETE', headers: { 'GOOGLE-JWT': identity.getToken() } },
				edit: { method: 'PUT', headers: { 'GOOGLE-JWT': identity.getToken() } },
				joinTask: { method: 'POST', params: { controller: 'members' }, headers: { 'GOOGLE-JWT': identity.getToken() } },
				unjoinTask: { method: 'DELETE', params: { controller: 'members' }, headers: { 'GOOGLE-JWT': identity.getToken() } },
				estimateTask: { method: 'POST', params: { controller: 'estimations' }, headers: { 'GOOGLE-JWT': identity.getToken() } },
				remindTaskEstimate: { method: 'POST', params: { controller: 'reminders' }, headers: { 'GOOGLE-JWT': identity.getToken() } },
				executeTask: { method: 'POST', params: { controller: 'transitions' }, headers: { 'GOOGLE-JWT': identity.getToken() } },
				completeTask: { method: 'POST', params: { controller: 'transitions' }, headers: { 'GOOGLE-JWT': identity.getToken() } },
				acceptTask: { method: 'POST', params: { controller: 'transitions' }, headers: { 'GOOGLE-JWT': identity.getToken() } },
				assignShares: { method: 'POST', params: { controller: 'shares' }, headers: { 'GOOGLE-JWT': identity.getToken() } }
			});
		}]);