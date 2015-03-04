/**
 * Created by lblyweer on 2015-02-25.
 */

app.controller('weatherCtrl', function($log, $scope, weatherService){

    init();

    function init() {
        $scope.foundCity = false;
        $scope.errorCity = false;
        $scope.cityNotFound = false;
        $scope.getWeatherByID = getWeatherByID;
        $scope.cityID = "Lille,FR";
    }

    function getWeatherByID() {
        var promise = weatherService.getWeather($scope.cityID);
        promise.then(
            function(payload) {

                if (payload.data.cod == 404) {
                    $scope.cityNotFound = true;
                    $scope.foundCity = false;
                    return;
                }

                $scope.foundCity = true;
                $scope.cityNotFound = false;
                $scope.errorCity = false;

                $scope.country = payload.data.sys.country;

                var cityCoord = {lat:payload.data.coord.lat, lon:payload.data.coord.lon};
                $scope.lat = cityCoord.lat;
                $scope.lon = cityCoord.lon;

                $scope.sunrise = timeStampConverter(payload.data.sys.sunrise);
                $scope.sunset = timeStampConverter(payload.data.sys.sunset);

                $scope.main = payload.data.weather[0].main;
                $scope.description = payload.data.weather[0].description;
                $scope.temp = payload.data.main.temp;

            },
            function (errorPayload){
                $log.error('failure getting weather', errorPayload);
                $scope.errorCity = true;
                $scope.cityNotFound = true;
                $scope.foundCity = false;
            });
    };

    function timeStampConverter (timeStamp) {
        var date = new Date(timeStamp*1000);
        var dateFormater = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
        return dateFormater;
    }
});