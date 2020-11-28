'use strict';

App.factory('ProductService', ['$http', '$q', function($http, $q){

	return {
		
		     getApplication: function() {
		     var req = {
                method: 'GET',
                url: 'http://localhost:8090/myapp1/web/productsweb/',
                
            }
			 return $http(req)
					.then(
							function(response){
								return response.data._embedded.products;
							}, 
							function(errResponse){
								console.error('Error while fetching application');
								return $q.reject(errResponse);
							}
					);
	         }		
	};

}]);