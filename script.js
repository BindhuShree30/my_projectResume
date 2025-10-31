// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  var name = this.name.value.trim();
  var email = this.email.value.trim();
  var subject = this.subject.value.trim();
  var message = this.message.value.trim();
  if(!name || !email || !subject || !message) {
    alert('Please fill all fields!');
    e.preventDefault();
    return false;
  }
  // Simple email regex
  if(!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert('Enter a valid email address!');
    e.preventDefault();
    return false;
  }
  alert('Thank you for your message!');
});
