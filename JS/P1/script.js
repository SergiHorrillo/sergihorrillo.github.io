function conversorUnitats() {
  // Obtenir el valor de km
  var kilometres = document.getElementById("kilometres").value;

  // Convertir km a Milles (1 km = 0.621371 milles)
  var milles = kilometres * 0.621371;

  // Mostrar el resultat en camp amb Id milles
  document.getElementById("milles").value = milles.toFixed(3);
}

  
