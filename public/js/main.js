const numberInput = document.getElementById('number');
const textInput = document.getElementById('text');
const button = document.getElementById('button');

button.addEventListener('click', send, false);

function send() {
    const number = numberInput.value.replace(/\D/g, '');
    const text = textInput.value;

    fetch('/', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({number, text})
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
}