const calculator = document.getElementById('calculator');
const display = document.getElementById('display');

calculator.addEventListener('click', (event) => {
    // Check if a button is clicked
    if (!event.target.matches('button'))
        return;

    const button = event.target;
    const num = button.dataset.num;
    const action = button.dataset.action;

    // 1. If it's a number
    if (num) {
        if (display.textContent === "0") {
            display.textContent = num;
        } else {
            display.textContent += num;
        }
    }

    // 2. If it's an action
    if (action) {
        if (action === 'clear') {
            display.textContent = '0';
        }

        if (action === 'delete') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        }

        if (action === 'operator') {
            display.textContent += button.textContent;
        }

        if (action === 'equal') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            }
        }
    }
});