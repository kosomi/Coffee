app.controller('MainCtrl', function(Person, $filter, $firebase, fbURL, $scope){
	
	$scope.Total = 0;  

	$scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');
 
	$scope.add = function(){

		var save = Person.$add({
			Morning : $scope.Morning,
			Afternoon : $scope.Afternoon,
			Night : $scope.Night,
			date : $scope.date,
			Total : $scope.Morning + $scope.Afternoon +$scope.Night 
		});

		$scope.Morning = '';
		$scope.Afternoon = '';
		$scope.Night = ''; 


	}


	$scope.remove = function(id){

		if(confirm('Do you want to delete it?')){
			Person.$remove(id);	
		} else {

		}
		
	};

	$scope.person = Person;
});

app.controller('EditCtrl', function ($scope, $location, $routeParams, $firebase, fbURL) { 
    var personURL = new Firebase(fbURL + $routeParams.id); 
    $scope.person = $firebase(personURL).$asObject(); 
    $scope.edit = function() { 
      $scope.person.$save(); 
      $location.path('/'); 
    }; 
  });
 
