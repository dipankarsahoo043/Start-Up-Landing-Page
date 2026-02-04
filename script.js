
document.addEventListener('DOMContentLoaded', function(){
  
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', function(){
    nav && (nav.style.display = nav.style.display === 'block' ? '' : 'block');
  });

  
  const form = document.querySelector('.signup-form');
  if(form){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value;
      if(!email) return alert('Please enter your email');
      
      if(!/.+@.+\..+/.test(email)) return alert('Please enter a valid email');

      
      try{
        const action = form.action;
        const resp = await fetch(action, {
          method:'POST',
          headers:{'Accept':'application/json','Content-Type':'application/json'},
          body: JSON.stringify({email})
        });
        form.reset();
        alert('Thanks — we’ll be in touch!');
      }catch(err){
        console.error(err);
        alert('Submission failed — please try again or email hello@yourstartup.com');
      }
    });
  }
});