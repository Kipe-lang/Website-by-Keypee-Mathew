document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    this.reset();
  });
  