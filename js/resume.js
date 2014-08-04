// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('resumeApp', ['ngTouch']).controller('headerRowCtrl', function() {
    return this.toggleContactInfo = false;
  });

  $(function() {
    return $.getJSON('js/work.json', function(data) {
      var $workList;
      $workList = $('#work');
      return $(data.work).each(function(i, value) {
        return $workList.append('<div class="row section__entry"><div class="three col"><dl><dt class="section__item--bold">' + value.location + '</dt><dd>' + value.dates + '</dd></dl></div><div class="four col"><dl><dt class="section__item--bold">' + value.company + '</dt><dd>' + value.title + '<br><em>' + value.description + '</em></dd></dl></div><div class="three col"><img class="company-logo" src="img/' + value.logo + '" alt="" /></div></div>');
      });
    });
  });

}).call(this);
