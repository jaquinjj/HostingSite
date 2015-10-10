var app=angular.module("hosting",["ngRoute"])

.config(["$routeProvider",function($routeProvider){
  
  $routeProvider.when("/main",{
      templateUrl:"main.html",
      controller:"MainCtrl"
 })
.when("/services",{
      templateUrl:"service.html",
      controller:"serviceCtrl"
 })
 .when("/about",{
      templateUrl:"about.html",
      controller:"aboutCtrl"
 })
 .when("/contact",{
      templateUrl:"contact.html",
      controller:"contactCtrl"
 })
  
  .otherwise({redirectTo:"/main"});
  
  
  
}])

.controller("MainCtrl",[function(){
  console.log("This is MainCtrl");
  
  
}
  ])
  
.controller("serviceCtrl",["$scope","$http",function($scope,$http){
  $http.get("service.json").then(function(response){
    $scope.services=response.data
  })

}])
.controller("contactCtrl",["$scope","$http",function($scope,$http){
  $http.get("contacts.json").then(function(response){
    $scope.contacts=response.data
  })

}])
    
