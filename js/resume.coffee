app = angular.module 'resumeApp', []

app.controller 'headerRowCtrl', ($scope) ->
    $scope.toggleContactInfo = false


$ ->

  $.getJSON 'js/work.json', (data) ->

    $workList = $('#work')

    $(data.work).each (i, value) ->
      $workList.append '<div class="row section__entry"><div class="three col"><dl><dt class="section__item--bold">' + value.location + '</dt><dd>' + value.dates + '</dd></dl></div><div class="four col"><dl><dt class="section__item--bold">' + value.company + '</dt><dd>' + value.title + '</dd></dl></div><div class="three col"><img class="company-logo" src="img/' + value.logo + '" alt="" /></div></div>'
