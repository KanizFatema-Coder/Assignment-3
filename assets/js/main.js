
// year
document.getElementById('year').innerText = new Date().getFullYear();

// project filter
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',e=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project-item').forEach(p=>{
      p.style.display = (f==='all' || p.dataset.category === f) ? 'block' : 'none';
    });
  });
});

// simple contact form behavior
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Message submitted (demo).');
  this.reset();
});
