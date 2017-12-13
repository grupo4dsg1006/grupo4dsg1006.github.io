$(function() {
    $('#justifica').hide();
    $('#releva').hide();
    $('#oport').hide();
    $('#alter').hide();
    $('#param').hide();
    $('#parti').hide();
    $('#public').hide();
    $('#aborda').hide();
    $('#filtro').hide();
    $('#considera').hide();
    $('#experi').hide();
    $('#tat').hide();
  });
  
  $('#mostrar_primeiros_passos').on('click', function(e){
    $('#context').fadeToggle(250);
    $('#releva').fadeToggle(250);
    $('#oport').fadeToggle(250);
  });
  
  $('#mostrar_desenvolvimento').on('click', function(e){
    $('#alter').fadeToggle(250);
    $('#param').fadeToggle(250);
    $('#parti').fadeToggle(250);
    $('#aborda').fadeToggle(250);
    $('#filtro').fadeToggle(250);
    $('#considera').fadeToggle(250);
    $('#public').fadeToggle(250);
    $('#tat').fadeToggle(250);
  });

  /*scroll*/

  var $doc = $('html, body');
  $('.scroll').click(function() {
      $doc.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });