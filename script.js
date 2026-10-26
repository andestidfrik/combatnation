// Menú móvil
const menu = document.getElementById('menu');
document.getElementById('burger').addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Aparición al hacer scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// Año del footer
document.getElementById('y').textContent = new Date().getFullYear();

// Formulario -> WhatsApp (sitio estático, sin backend)
const WHATSAPP = '570000000000'; // <- cambia por el número real, con indicativo y sin +
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const txt = `Hola Combat Nation, soy ${f.get('nombre')} (${f.get('tel')}). Quiero una clase de prueba de ${f.get('disciplina')}. ${f.get('msg') || ''}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, '_blank');
});
