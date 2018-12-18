var pixelArt = {
  grilla: 1750,
  colores: ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'],
  batman,
  wonder,
  flash,
  invisible,
}

$(document).ready(function(){
  var $paleta = $('#paleta');
  var $grillaPixeles = $('#grilla-pixeles');
  var $indicadorColor = $('#indicador-de-color');
  var $colorPersonalizado = document.getElementById('color-personalizado');
  var $superheroes = $('#superheroes');
  var mouseApretado = false;

/* ARMAR JUEGO */
  function generarPaleta(){
    for(i = 0; i < pixelArt.colores.length; i++){
    $paleta.append($('<div/>').addClass('color-paleta').css('backgroundColor', pixelArt.colores[i]));
    }
  }

  function generarGrilla(){
    for(i = 0; i <= pixelArt.grilla; i++){
    $grillaPixeles.append($('<div/>'));
    }
    $grillaPixeles.click(pintarPixel);
  }
  generarPaleta();
  generarGrilla();  

/* DETECTA EL MOUSE */ 
  $grillaPixeles.mousedown( function(){
    mouseApretado = true;
  });

  $grillaPixeles.mouseup(function(){
    mouseApretado = false;
  });

/* FUNCIONES PARA PINTAR */
  $colorPersonalizado.addEventListener('change', (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = $colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual 
    $indicadorColor.css('background-color', colorActual);
    })
  );  

  function pintarPixel(event){
    var nuevoColor = $indicadorColor.css('background-color');
    if(validaColor()){
      $(event.target).css('background-color', nuevoColor);
    }
  };

  $paleta.click(function(e){
    var color = $(e.target).css('background-color');
    $indicadorColor.css('background-color', color);
  });
  
  $grillaPixeles.mouseover(function(event){
    if(validaColor()){
      if (mouseApretado == true){
      var nuevoColor = $indicadorColor.css('background-color');
      $(event.target).css('background-color', nuevoColor);
    }
  }
  });

/* FUNCIONES BOTONES */
  $("#guardar").click(function(){
    guardarPixelArt();
  });
  
  $("#borrar").click(function(){
      $('#grilla-pixeles').children("div").animate({"backgroundColor": "white"}, 1000);
  });

  $superheroes.click(function(e){
    var superheroeElegido = $(e.target).data('superheroe');
    var superheroeACargar = pixelArt[superheroeElegido]
    cargarSuperheroe(superheroeACargar);
  });

/* VALIDACION */

  function validaColor() {
    return $indicadorColor.css('background-color') !== 'rgba(0, 0, 0, 0)';
  }

});





