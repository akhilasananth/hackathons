

var app = angular.module('ccdhApp',['ui.router']);
        //app config
        app.config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                        .state('/home',{
                            url: '/home',
                            templateUrl: '../views/homePage/home.html',
                            controller: 'indexCtrl'
                        })
                        .state('/babyInformation',{
                            url:'/babyInformation',
                            templateUrl: '../views/babyInformation/babyInformation.html',
                            controller:'indexCtrl'
                        })
                        .state('/hospitalInformation', {
                            url:'/hospitalInformation',
                            templateUrl:'../views/hospitalInfo/hospitalInfo.html',
                            controller:'indexCtrl'
                        })
                        .state('/eligibility', {
                            url:'/eligibility',
                            templateUrl:'../views/Eligibility/eligibility.html',
                            controller:'indexCtrl'
                        })
                        .state('/testRepeat', {
                            url:'/testRepeat',
                            templateUrl:'../views/TestRepeatScreen/testRepeatScreen.html',
                            controller:'indexCtrl'
                        })
                        .state('/reviewInfo', {
                            url:'/reviewInfo',
                            templateUrl:'../views/reviewFormInformation/reviewInfo.html',
                            controller:'indexCtrl'
                        })
                        
            
        });
        app.controller('indexCtrl', function($scope){
            var testCount = 0;

            $scope.r_hand = 0;
            $scope.foot =0;
            $scope.time;
            $scope.displayFirstScreen = true;
            $scope.displayRepeatedTestDisplay = false;
            //range function
            function findRange(x, min, max){
                return x>=min && x<=max;
            }
            //finding the difference
            var difference = function(hand, foot){
                return Math.abs(hand-foot)
            }

            //
            //screentest function
            $scope.screenTest = function(righthand, foot){
                if (testCount  >= 3){
                    $scope.displayFailedMessage=failedTest();
                    return;
                }

                if (rightHandFootTest_1(righthand, foot)){
                    $scope.displayFailedMessage=failedTest();
                    return;
                }

                if (rightHandFootTest_3(righthand, foot)){
                    $scope.displayPassedMessage=testPassed();
                    return;
                }

                if (rightHandFootTest_2(righthand, foot)){
                    $scope.displayRepeatedTestDisplay = true;
                    $scope.displayFirstScreen = false;
                }
                else{
                    $scope.displayIndeterminate = true;
                }

                testCount ++;
            }

            function tellUserToEnterValuesAgain(){

            }

            function rightHandFootTest_1(righthand, foot){
                return righthand<90 || foot <90
            }

            function rightHandFootTest_2(righthand, foot){
                var range = findRange(righthand, 90,94);
                var diff = difference(righthand,foot);
                return range ? foot>3||diff>3 : false;
            }

            function rightHandFootTest_3(righthand, foot){
                return righthand >95||foot>95 && difference(righthand, foot) <= 3;
            }

            function failedTest(){
               $scope.displayPassedMessage=false;
               return true;
                // clear the values
            }

            function testPassed(){
              $scope.displayFailedMessage=false;
              return true;
            }
            
        });
