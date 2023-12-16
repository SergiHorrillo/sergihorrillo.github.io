function conversorUnitats() {
  // Obtiene el valor en kilómetros
  var kilometres = document.getElementById("kilometres").value;

  // Convierte kilómetros a millas (1 kilómetro = 0.621371 millas)
  var milles = kilometres * 0.621371;

  // Muestra el resultado en el campo de millas
  document.getElementById("milles").value = milles.toFixed(3);
}

  