const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const themeButton = document.querySelector('.theme-button');
const glow = document.querySelector('.cursor-glow');

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.innerHTML = `<i class="ri-${open ? 'close' : 'menu-3'}-line"></i>`;
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeButton.innerHTML = `<i class="ri-${document.body.classList.contains('light') ? 'sun' : 'moon'}-line"></i>`;
});

document.addEventListener('mousemove', event => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

function updateClock() {
  document.querySelector('#clock').textContent = new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date());
}
updateClock();
setInterval(updateClock, 1000);
