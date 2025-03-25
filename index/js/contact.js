// EmailJS Configuration
(function() {
    // Initialize EmailJS with your user ID
    // Nota: dovresti registrarti su EmailJS e sostituire 'YOUR_USER_ID' con il tuo ID
    emailjs.init("YOUR_USER_ID");
    
    // Contact form submission handler
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
                // Show sending status
                const statusElement = document.getElementById('form-status');
                if (statusElement) {
                    statusElement.textContent = 'Sending...';
                }
                
                // Get form data
                const firstName = document.getElementById('first-name').value;
                const lastName = document.getElementById('last-name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Prepare template parameters
                const templateParams = {
                    from_name: firstName + ' ' + lastName,
                    from_email: email,
                    message: message
                };
                
                // Send email using EmailJS
                // Nota: dovresti sostituire 'YOUR_SERVICE_ID' e 'YOUR_TEMPLATE_ID' con i tuoi ID
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        if (statusElement) {
                            statusElement.textContent = 'Message sent successfully!';
                            statusElement.style.color = 'green';
                        }
                        contactForm.reset();
                    }, function(error) {
                        console.log('FAILED...', error);
                        if (statusElement) {
                            statusElement.textContent = 'Failed to send message. Please try again.';
                            statusElement.style.color = 'red';
                        }
                    });
            });
        }
    });
})();
