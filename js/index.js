document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const nome = document.getElementById('name').value;

  alert(`Obrigado por entrar em contato, ${nome}! Em breve retornaremos sua mensagem.`);

  document.getElementById('contact-form').reset();
});

const anoFooter = document.getElementById('ano-footer');
const anoAtual = new Date().getFullYear();
anoFooter.textContent = anoAtual;
