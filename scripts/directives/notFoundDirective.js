/**
 * Created by lblyweer on 2015-02-25.
 */

app.directive('alertNotFound', function() {
    return {
        restrict : 'E',
        scope : {
            when : '='
        },
        transclude : true,
        template : "<div ng-show='when' ng-transclude></div>"
    }
})