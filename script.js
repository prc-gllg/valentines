// ⚠️ REPLACE THIS URL WITH YOUR OWN APPS SCRIPT WEB APP URL (see step 2)

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx8vWlaPy4HTnKb2N19-YwwL3RAE-JtvXHdaiyqoru3GgwHWLjjM8sn-UAr9vSEWH7Q_A/exec';

document.getElementById('yes-btn').addEventListener('click', function() {
    const btn = this;
    btn.disabled = true;
    btn.style.opacity = '0.7';

    fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',        // Important: Apps Script requires no-cors
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'action=yes'      // Simple payload
    })
    .then(() => {
        // Because of no-cors, we can't read the response, but we assume success
        const msg = document.getElementById('message');
        msg.textContent = '✅ Thank you! Your response has been recorded.';
        msg.classList.remove('hidden');

        setTimeout(() => {
            btn.disabled = false;
            btn.style.opacity = '1';
        }, 2000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
        btn.disabled = false;
        btn.style.opacity = '1';
    });
});