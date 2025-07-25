function tieneProbabilidadDeGanar(numero) {
  const entre5y15 = numero > 5 && numero <= 15;
  const especiales = numero === 55 || numero === 70;
  return entre5y15 || especiales;
}

document.getElementById('verificarBtn').addEventListener('click', () => {
  const valor = parseInt(document.getElementById('numeroInput').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(valor)) {
    resultado.textContent = '⚠️ Ingresa un número válido.';
    resultado.className = 'mt-4 fw-semibold fs-5 text-warning';
    return;
  }

  if (tieneProbabilidadDeGanar(valor)) {
    resultado.textContent = `✅ El número ${valor} tiene alta probabilidad de ganar.`;
    resultado.className = 'mt-4 fw-semibold fs-5 text-success';
  } else {
    resultado.textContent = `❌ El número ${valor} no cumple las condiciones.`;
    resultado.className = 'mt-4 fw-semibold fs-5 text-danger';
  }
});
