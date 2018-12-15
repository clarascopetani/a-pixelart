var nombreColores = ['White', 'LightYellow',
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
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorColor = document.getElementById('indicador-de-color');
var colorPersonalizado = document.getElementById('color-personalizado');

/* ARMAR JUEGO */
function generarPaleta(){
  for(i = 0; i < nombreColores.length; i++){
    var agregarColor = document.createElement('div');
    agregarColor.style.backgroundColor = nombreColores[i];
    paleta.appendChild(agregarColor).className = "color-paleta" ;
  }
}

function generarGrilla(){
  var grilla = 1750;
  for(i = 0; i <= grilla; i++){
    var agregarPixel = document.createElement('div');
    grillaPixeles.appendChild(agregarPixel);
 }
}

function modificarColor(e){
  var color = e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = color;
  console.log("Cambio Color");
}

/* FUNCIONES PINTAR */ 

paleta.addEventListener("click", modificarColor);

grillaPixeles.addEventListener("mousemove", pintarPixel);

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
//var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual 
    indicadorColor.style.backgroundColor = colorActual;
  })
);

function pintarPixel(e){
  var nuevoColor = indicadorColor.style.backgroundColor;
  if(mouseApretado == true){
  e.target.style.backgroundColor  = nuevoColor;
  }
};


/* DETECTA EL MOUSE */ 
var mouseApretado = false;
grillaPixeles.addEventListener("mousedown", function(){
  console.log("aprieto mouse", mouseApretado);
  mouseApretado = true;
});

grillaPixeles.addEventListener("mouseup", function(){
  console.log("solto mouse", mouseApretado);
  mouseApretado = false;
});

generarGrilla();
generarPaleta();
