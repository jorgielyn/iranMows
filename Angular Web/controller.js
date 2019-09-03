var app = angular.module('myApp', []);
app.controller('myControl', function ($scope){

    $scope.studentsArray = [
        { 'name':'Eve', 'address':'Camotes', 'age':'21'}];
    $scope.Add = function() {
        if ($scope.name != undefined && $scope.address != undefined) {
            var student = []

            student.name = $scope.name;
            student.address = $scope.address;
            student.age = $scope.age;

            $scope.studentsArray.push(student);
            $scope.name = null;
            $scope.address = null;
            $scope.age = null;
        }
        // var flname = document.getElementById("fname").value;
        // var addrr = document.getElementById("addr").value;
        // var edad = document.getElementById("age").value;

    }   
});

angular.module("myApps", ["ngRoute"])
.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "homeController",
        controllerAs: "home",
        templateUrl: "views/home.html"
    })
    .when("/about", { 
        controller: "aboutController",
        controllerAs: "about",
        templateUrl: "views/about.html"
    })
    .when("/faq", {
        controller: "faqController",
        controllerAs: "faq",
        templateUrl: "views/faq.html"
    })
    .otherwise({ redirectTo: "/"})
})

    .controller("homeController", function($scope){
        $scope.messageHome = "Home controller";
    })
    .controller("aboutController", function($scope){
        $scope.messageAbout = "About controller";
    })
    .controller("faqController", function($scope){
        $scope.messageFaq = "Faq controller";
    }
);