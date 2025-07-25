function resultadoSet(m, n) {
  // Validación de valores fuera de rango
  if (m < 0 || n < 0 || m > 7 || n > 7) {
    return '❌ Resultado inválido';
  }

  // Combinaciones inválidas
  if ((m === 7 && n < 5) || (n === 7 && m < 5)) return '❌ Resultado inválido';
  if (m === 6 && n > 4) return '❌ Resultado inválido';
  if (n === 6 && m > 4) return '❌ Resultado inválido';

  // A gana
  if ((m === 6 && n <= 4) || (m === 7 && (n === 5 || n === 6))) {
    return '✅ Jugador A ganó el set';
  }

  // B gana
  if ((n === 6 && m <= 4) || (n === 7 && (m === 5 || m === 6))) {
    return '✅ Jugador B ganó el set';
  }

  // Set en progreso
  return '⏳ El set todavía no termina';
}

document.getElementById('verificarBtn').addEventListener('click', () => {
  const m = parseInt(document.getElementById('jugadorA').value);
  const n = parseInt(document.getElementById('jugadorB').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(m) || isNaN(n)) {
    resultado.textContent = '⚠️ Debes ingresar ambos valores.';
    resultado.className = 'mt-4 fw-semibold fs-5 text-warning text-center';
    return;
  }

  resultado.textContent = resultadoSet(m, n);

  resultado.className = 'mt-4 fw-semibold fs-5 text-center';

  if (resultado.textContent.includes('✅')) {
    resultado.classList.add('text-success');
  } else if (resultado.textContent.includes('❌')) {
    resultado.classList.add('text-danger');
  } else {
    resultado.classList.add('text-secondary');
  }
});
