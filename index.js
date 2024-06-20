const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



async function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const params = new URLSearchParams({
        fullName: form.querySelector('input[placeholder="Full Name"]').value,
        email: form.querySelector('input[placeholder="Email"]').value,
        phoneNumber: form.querySelector('input[placeholder="Phone Number"]').value,
        subject: form.querySelector('input[placeholder="Subject"]').value,
        message: form.querySelector('textarea[placeholder="Your Message"]').value,
    });

    const url = `https://script.google.com/macros/s/AKfycbxupymiPv3kzMMb5NXw93kBjiQSWPquBE91Mf1-m9fjFvXnRW-gYpA6cAwN5pb_sSEt/exec?${params.toString()}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        const result = await response.json();
        if (result.status) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('An error occurred. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}