document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const nome = document.getElementById('name').value;

  alert('Formulário enviado com sucesso, obrigado pela mensagem ' + nome + '!');

  document.getElementById('contact-form').reset();
});