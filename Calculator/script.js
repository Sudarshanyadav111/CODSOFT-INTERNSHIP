let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;
        if (value === '=') {
            try {
                string = Function(`return ${string.replace('x', '*')}`)();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'RESET') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});



