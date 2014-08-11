angular
    .module 'resumeApp', ['ngTouch']
    .controller 'headerRowCtrl', ->
        this.toggleContactInfo = false

    .controller 'skillSelector', ->
      this.catagory = "Top 12"
      this.skillList = [
        { name: "Angular.js",   cat: "Top 12" },
        { name: "Bootstrap 3",  cat: "Top 12" },
        { name: "CoffeeScript", cat: "Top 12" },
        { name: "Compass",      cat: "Top 12" },
        { name: "CSS3",         cat: "Top 12" },
        { name: "Foundation 5", cat: "Top 12" },
        { name: "HTML5",        cat: "Top 12" },
        { name: "Illustrator",  cat: "Top 12" },
        { name: "jQuery",       cat: "Top 12" },
        { name: "Less",         cat: "Top 12" },
        { name: "Photoshop",    cat: "Top 12" },
        { name: "Sass",         cat: "Top 12" }
      ]
      return true


$ ->

  $.getJSON 'js/work.json', (data) ->

    $workList = $('#work')

    $(data.work).each (i, value) ->
      $workList.append '<div class="row section__entry"><div class="three col"><dl><dt class="section__item--bold">' + value.location + '</dt><dd>' + value.dates + '</dd></dl></div><div class="four col"><dl><dt class="section__item--bold">' + value.company + '</dt><dd>' + value.title + '<br><em>' + value.description + '</em></dd></dl></div><div class="three col"><img class="company-logo" src="img/' + value.logo + '" alt="" /></div></div>'
