// Bouton de thème clair/sombre
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Formulaire local (simulation)
function submitForm(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  alert(`Merci ${email} !\nTon message a bien été pris en compte.`);
  document.getElementById('contact-form').reset();
}

