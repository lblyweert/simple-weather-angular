/**
 * Created by lblyweer on 2015-02-25.
 */

app.factory('weatherService', function($http) {
   return {
       getWeather: function(id) {
           return $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + id + "&units=metric");
       }
   }
});