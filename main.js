const spans = document.querySelectorAll('.selectable');

spans.forEach(span => {
    span.addEventListener('click', function() {
        // Remove a classe 'active' de todos os spans
        spans.forEach(s => s.classList.remove('active'));
        
        // Adiciona a classe 'active' no span clicado
        this.classList.add('active');
    });
});

const spans2 = document.querySelectorAll('.selectable2');

spans2.forEach(span => {
    span.addEventListener('click', function() {
        // Remove a classe 'active' de todos os spans
        spans2.forEach(s => s.classList.remove('active2'));
        
        // Adiciona a classe 'active' no span clicado
        this.classList.add('active2');
    });
});

function abbreviateText() {
    const spans = document.querySelectorAll('.changeText');
    const screenWidth = window.innerWidth;
    
    spans.forEach(span => {
      if (screenWidth <= 1072) {
        // Troca o texto para a forma abreviada
        const fullText = span.getAttribute('data-full');
        if (fullText.includes("Guidaste Articulado")) {
          span.textContent = "G. Articulado " + fullText.split(" ")[2];
        } else if (fullText.includes("Plataforma Elevatória")) {
          span.textContent = "P. Elevatória " + fullText.split(" ")[2];
        } else if (fullText.includes("Cavalo Mecânico")) {
          span.textContent = "C. Mecânico " + fullText.split(" ")[2];
        }
      } else {
        // Restaura o texto completo
        span.textContent = span.getAttribute('data-full');
      }
    });
  }
  
  // Executa a função quando a página carrega e ao redimensionar a tela
  window.onload = abbreviateText;
  window.onresize = abbreviateText;