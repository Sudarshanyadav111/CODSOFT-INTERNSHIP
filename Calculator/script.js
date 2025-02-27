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









































































/*let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = Function(`return ${string}`)(); // Safer alternative to eval()
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (value === 'AC') {
            string = "";
            input.value = string;
        } 
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += value;
            input.value = string;
        }
    });
});






























































/*let input = document.getElementById('inputBox');
let buttons= document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHtml=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHtml == 'AC'){
            string="";
            input.value = string;
        }
        else if(e.target.innerHtml == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value=string;
        }
        else{
        string += e.target.innerHtml;
        input.value=string;
        }
    })
})*/