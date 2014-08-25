// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('resumeApp', ['ngTouch', 'ngAnimate']).controller('headerRowCtrl', function() {
    return this.toggleContactInfo = false;
  }).controller('skillSelector', [
    '$scope', '$http', function($scope, $http) {
      return $http.get('js/api/skill-list.json').success(function(data) {
        var vm;
        vm = $scope;
        vm.category = data.cat;
        return vm.skillList = data.list;
      });
    }
  ]);

  $(function() {
    return $.getJSON('js/api/work.json', function(data) {
      var $workList;
      $workList = $('#work');
      return $(data.work).each(function(i, value) {
        return $workList.append('<div class="row section__entry"><div class="three col"><dl><dt class="section__item--bold">' + value.location + '</dt><dd>' + value.dates + '</dd></dl></div><div class="four col"><dl><dt class="section__item--bold">' + value.company + '</dt><dd>' + value.title + '<br><em>' + value.description + '</em></dd></dl></div><div class="three col"><img class="company-logo" src="img/' + value.logo + '" alt="" /></div></div>');
      });
    });
  });

}).call(this);
