
// set year
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('yr').innerText = new Date().getFullYear();

  // IntersectionObserver reveal
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('active');
    });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));

  // show scroll-top btn
  const topBtn = document.getElementById('topbtn');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) topBtn.style.display = 'block';
    else topBtn.style.display = 'none';
  });
  topBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  // profile image replace if exists
  const p = document.querySelector('.profile-photo img');
  if(p && p.complete) p.style.opacity = 1;
});

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if(!name || !email || !msg) return alert('Please fill all fields');
  alert('Thanks, ' + name + '! This portfolio is front-end only — I will integrate a backend later.');
  e.target.reset();
}
