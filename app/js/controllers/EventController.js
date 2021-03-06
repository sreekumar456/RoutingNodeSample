'use strict';

eventsApp.controller('EventController', 
    function EventController($scope, eventData, $anchorScroll,$routeParams, $route) {
        $scope.sortorder = 'name';
        $scope.reload = function() {
            $route.reload();
        }
        eventData.getEvent($routeParams.eventId)
            .$promise
            .then(function(event) { $scope.event = event; })
            .catch(function(response) { console.log(response);}
        );

        $scope.upVoteSession = function(session) {
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
          session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);