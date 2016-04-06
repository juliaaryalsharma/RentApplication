var app = angular.module("myapp", [
    'mobile-angular-ui',


    'mobile-angular-ui.gestures',
    'uiGmapgoogle-maps'
])

app.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});

app.controller("mycontroller", function ($scope, uiGmapGoogleMapApi) {
    angular.extend($scope, {
        init: function () {
            uiGmapGoogleMapApi.then($scope.mapsReady);
            document.addEventListener('deviceready', $scope.deviceReady, false);
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition($scope.positionReady);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }

        },
        deviceReady: function(){
        },
        mapsReady: function (maps) {
        },
        map: { center: { latitude: 45, longitude: -73 }, zoom: 12 },
        positionReady: function(position){
            $scope.map.center.latitude = position.coords.latitude;
            $scope.map.center.longitude = position.coords.longitude;
            $scope.$apply();
        },
        refresh: function(){
        navigator.geolocation.getCurrentPosition($scope.positionReady);
        }
    }).init();


});
