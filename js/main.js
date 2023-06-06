const plazoFijo = {
    monto: 0,
    tasa: 0,
    plazo: 0,
    calcularInteres: function() {
      return this.monto * this.tasa * this.plazo;
    },
    calcularTotal: function() {
      return this.monto + this.calcularInteres();
    }
  };
  
  const plazosFijos = [];
  
  function agregarPlazoFijo(monto, tasa, plazo) {
    const nuevoPlazoFijo = Object.create(plazoFijo);
    nuevoPlazoFijo.monto = monto;
    nuevoPlazoFijo.tasa = tasa;
    nuevoPlazoFijo.plazo = plazo;
    plazosFijos.push(nuevoPlazoFijo);
  }
  
  function calcularInteresesTotales() {
    let interesesTotales = 0;
    for (const plazoFijo of plazosFijos) {
      interesesTotales += plazoFijo.calcularInteres();
    }
    return interesesTotales;
  }
  
  agregarPlazoFijo(1000, 0.05, 12);
  agregarPlazoFijo(2000, 0.04, 6);
  
  console.log("Plazos fijos:");
  for (const plazoFijo of plazosFijos) {
    console.log("Monto:", plazoFijo.monto);
    console.log("Intereses:", plazoFijo.calcularInteres());
    console.log("Total:", plazoFijo.calcularTotal());
  }
  