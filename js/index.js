document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const nome = document.getElementById('name').value;

  alert(`Obrigado por entrar em contato, ${nome}! Em breve retornaremos sua mensagem.`);

  document.getElementById('contact-form').reset();
});

document.getElementById('btn-troca-tema').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');

  const imgBtn = document.getElementById('btn-troca-tema').querySelector('img');
  if (document.body.classList.contains('dark-theme')) {
    imgBtn.src = 'src/img/moon.png';
    imgBtn.alt = 'Tema Escuro';
  } else {
    imgBtn.src = 'src/img/sun.png';
    imgBtn.alt = 'Tema Claro';
  }
});

const anoFooter = document.getElementById('ano-footer');
const anoAtual = new Date().getFullYear();
anoFooter.textContent = anoAtual;
