const calc = document.getElementById('calc');
const valueOne = document.getElementById('value1');
const valueTwo = document.getElementById('value2');

const options = document.getElementById('operation');
const resultValue = document.getElementById('result');

const clearButton = document.getElementById('clear');


function Result() {
    let valueMathOne = parseInt(valueOne.value, 10);
    let valueMathTwo = parseInt(valueTwo.value, 10);

    const selectOptions = options.value;
    
    if (selectOptions === 'selected') {
        alert('Please select operations!')
    } else if (selectOptions === 'plus') {
        const mathResult = valueMathOne + valueMathTwo
        generateValue(mathResult);
    
    } else if (selectOptions === 'minus') {
        const mathResult = valueMathOne - valueMathTwo;
        generateValue(mathResult);

    } else if ( selectOptions === 'multiply') {
        const mathResult = valueMathOne * valueMathTwo;
        generateValue(mathResult);

    } else if (selectOptions === 'divide') {
        const mathResult = valueMathOne / valueMathTwo;
        generateValue(mathResult);

    } else if (selectOptions === 'interest') {
        const mathResult = valueMathOne % valueMathTwo;
        generateValue(mathResult);
    }

};


const generateValue = (newResult) => {
    resultValue.className = 'visible';
    resultValue.innerHTML += newResult;
}


clearButton.addEventListener('click', function(e){
    valueOne.value = '';
    valueTwo.value = '';

    resultValue.className = '';
    resultValue.innerHTML = '';

    options.value = 'selected';

    
}, false);
