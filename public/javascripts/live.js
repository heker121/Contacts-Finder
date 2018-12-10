$(document).ready(function() {

  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' results');


  $("#search-text").keyup(function () {

    var searchTerm = $("#search-text").val();
    var listItem = $('#list').children('li');

    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")



      //extends :contains to be case insensitive and special charaters can be used
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
                                                     .replace(/À|Á|Â|Ã|Ä|Å/g, "A")
                                                     .replace(/à|á|â|ã|ä|å/g, "a")
                                                     .replace(/Ò|Ó|Ô|Õ|Õ|Ö|Ø/g, "O")
                                                     .replace(/ò|ó|ô|õ|ö|ø/g, "o")
                                                     .replace(/È|É|Ê|Ë/g, "E")
                                                     .replace(/è|é|ê|ë/g, "e")
                                                     .replace(/č|Č/g, "c")
                                                     .replace(/Ç|ç/g, "c")
                                                     .replace(/Ì|Í|Î|Ï/g, "I")
                                                     .replace(/ì|í|î|ï/g, "i")
                                                     .replace(/Ù|Ú|Û|Ü/g, "U")
                                                     .replace(/ù|ú|û|ü/g, "u")
                                                     .replace(/ľ|Ľ|ĺ|Ĺ/g, "l")
                                                     .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});


    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });

    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });


      var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' found');

    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }

  });

  (function() {
    var $note     = $( '.note' ),
        $colors   = $note.find( '.colors' ),
        $date     = $note.find( '.date' ),
        $closeBtn = $note.find( '.close' );

    $date.css( 'right', '1.5rem' );
    $closeBtn.show();

    $colors.find( '.color' ).css( 'opacity', .5 );
    $colors.find( '.color:first-child' ).css( 'opacity', 1 );

    $colors.show().on( 'click', '.color', function( e ) {
      var $this = $(this),
          $colorSel = $this.css( 'background-color' );

      $this
      .parents( '.note' )
        .find( 'header' )
          .css( 'border-color', $colorSel );

      $this
      .parents( '.note' )
        .find( '.author' )
          .css( 'background-color', $colorSel );

      $this
      .parents( '.note' )
        .find( 'a' )
          .css( 'color', $colorSel );

      $this
      .siblings( '.color' )
        .each(function( e ) {
          $(this).css( 'opacity', .5 );
        });

      $this.css( 'opacity', 1 );
    });

    $closeBtn.on( 'click', function( e ) {
      $(this).parents( '.note' ).fadeOut( 300 );
    });
  })();



});
