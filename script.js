document.addEventListener('DOMContentLoaded', function() {
    // 1. Encontra os elementos
    const botaoDetalhes = document.getElementById('mostrarDetalhes');
    const detalhesOcultos = document.getElementById('detalhesOcultos');

    // 2. Adiciona um "ouvinte de evento" (listener) no botão
    botaoDetalhes.addEventListener('click', function() {
        // 3. Verifica se os detalhes estão visíveis
        if (detalhesOcultos.classList.contains('hidden')) {
            // Se estiverem ocultos, remove a classe 'hidden' para exibi-los
            detalhesOcultos.classList.remove('hidden');
            // Altera o texto do botão
            botaoDetalhes.textContent = 'Ocultar Detalhes Técnicos';
        } else {
            // Se estiverem visíveis, adiciona a classe 'hidden' para ocultá-los
            detalhesOcultos.classList.add('hidden');
            // Altera o texto do botão de volta
            botaoDetalhes.textContent = 'Ver Detalhes Técnicos (Clique aqui)';
        }
    });
});