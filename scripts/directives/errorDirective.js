/**
 * Created by lblyweer on 2015-02-25.
 */

app.directive('alert',function(){
    return {
        // <alert></alert>
        restrict: "E",
        // isolated scope
        scope: {
            // <alert when="the data we need"></alert>
            // we could have written the following : when: "=when"
            when: "="
        },
        // enable transclusion
        transclude: true,
        // our template
        // we specify where to transclude the <alert> tag
        template: "<div ng-show='when' ng-transclude></div>",
        // for demo purposes
        link: function (scope) {
            // watch for "when" value
            scope.$watch("when", function(when) {
                // as soon as a value is assigned to our "when" attribute
                if(typeof when != "undefined") {
                    console.log(when);
                }
            });
        }
    };
});