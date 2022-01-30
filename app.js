function betweenNumber() {
    let message, x;
    let input = document.getElementById('enterNumber');
    message = document.getElementById('error');
    x = document.getElementById('enterNumber').value;
    
    try {
        if(x == "") {
            input.classList.add('error-message');
            input.classList.remove('valid-message');
            throw 'bo\'sh';
        }
        if(isNaN(x)) {
            input.classList.add('error-message');
            input.classList.remove('valid-message');
            throw 'son emas';
        }
        if(x > 10) {
            input.classList.add('error-message');
            input.classList.remove('valid-message');
            throw '10 dan katta';
        }
        if(x < 5) {
            input.classList.add('error-message');
            input.classList.remove('valid-message');
            throw '5 dan kichik'
        }
        if(x >= 5 && x <= 10) {
            input.classList.add('valid-message');
            message.innerHTML = "";
        }
    } catch(e) {
        message.innerHTML = "!Qiymat: " + e;
    }
}