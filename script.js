// ⚠️ REPLACE THIS URL WITH YOUR OWN APPS SCRIPT WEB APP URL (see step 2)

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx8vWlaPy4HTnKb2N19-YwwL3RAE-JtvXHdaiyqoru3GgwHWLjjM8sn-UAr9vSEWH7Q_A/exec';


document.addEventListener('DOMContentLoaded', function() {
    const btnNo = document.getElementById('no-btn');
    const btnYes = document.getElementById('yes-btn');
    const memeImg = document.getElementById('meme-img');
    const caption = document.getElementById('caption');

    const contentList = [
        { 
            src: 'https://i.pinimg.com/564x/07/57/99/075799c53d9998fbc97cc6f070ac0243.jpg',
            text: "Will you be my valentine?",
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28smnesYkRrjFdwdVMcZ6JdQzXR-OdXcpkA&s',
            text:"Why 'No' man?",
        },
        {
            src: 'https://i.redd.it/thought-of-this-meme-when-i-saw-this-panel-v0-61hc5r8mz0pc1.jpg?width=353&format=pjpg&auto=webp&s=3e66f46adc26d6ba9a21e0c8e266eb22efe670c0',
            text: "Sure jud ka? Akong libre.",
        },
        {
            src: 'https://media.tenor.com/rIVI9zKfEcIAAAAM/puppy-dog-eyes-sad.gif',
            text: "Sige na please 🙏🙏🙏"
        },
    ];

    let no_count = 0;
    const item = contentList[no_count];

    btnNo.addEventListener('click', function() {
        // no_count = (no_count + 1) % contentList.length;
        no_count++;
        const item = contentList[no_count];
        memeImg.src = item.src;
        caption.textContent = item.text;
        console.log(no_count);
        if (no_count >= contentList.length - 1) {
            btnNo.style.display = 'none';
        }
        // btnNo.display = no_count == contentList.length ? true : false;
    });

    btnYes.addEventListener('click', function() {
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
            msg.textContent = 'Please check your email. heehehehehe';
            caption.textContent = 'YEY!!!!';
            msg.classList.remove('hidden');
            memeImg.src = "https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif";

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


});



// document.getElementById('yes-btn').addEventListener('click', function() {
//     const btn = this;
//     btn.disabled = true;
//     btn.style.opacity = '0.7';

//     fetch(APPS_SCRIPT_URL, {
//         method: 'POST',
//         mode: 'no-cors',        // Important: Apps Script requires no-cors
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: 'action=yes'      // Simple payload
//     })
//     .then(() => {
//         // Because of no-cors, we can't read the response, but we assume success
//         const msg = document.getElementById('message');
//         msg.textContent = '✅ Thank you! Your response has been recorded.';
//         msg.classList.remove('hidden');

//         setTimeout(() => {
//             btn.disabled = false;
//             btn.style.opacity = '1';
//         }, 2000);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Something went wrong. Please try again.');
//         btn.disabled = false;
//         btn.style.opacity = '1';
//     });
// });