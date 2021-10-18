function alertSomething() {
    alert('Something')
}

function consoleLogSomething() {
    console.log('Something')
}

document.getElementById('event-listener-1')
    .addEventListener('click', function () {
        console.log('Event listener 1 clicked')
    })

function eventListenerTwo () {
    console.log('Event Listener 2 clicked')
}

document.getElementById('event-listener-2')
    .addEventListener('click', eventListenerTwo);

function nameFieldButton() {
    let nameField = document.getElementById('name-field').value
    console.log('nameField button clicked, content of input(value):', nameField)

    let helloNameField = document.getElementById('hello-name-field')
    console.log(helloNameField)
    helloNameField.innerHTML = `<strong>Hej ${nameField}!</strong>`
}

function add(x, y) {
    return x + y
}

function addNumbers() {
    const number1 = Number(document.getElementById('num-field-1').value)
    const number2 = Number(document.getElementById('num-field-2').value)
    const sum = document.getElementById('sum-num-field')
    sum.innerText = add(number1, number2)
}

const morE = 'MORE'

function somethingMoreToLoadOnPageRender() {
    document.getElementById('more').innerText = morE
}
somethingMoreToLoadOnPageRender()