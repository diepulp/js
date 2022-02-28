//Assignment: Chapter 4 Practice
//Author: Vladimir Ivanov
//Date: 02/01/26
window.onload = () => {
    let btn = document.querySelector("button");
    let input = document.querySelector('input').value.toLowerCase();
    const output = document.getElementById('output')
    const data = [
        '{"Name": "Jane Doe", "Sex": "f", "Born": "1876", "Died": "1956", "Father": "Petreus de Milliano", "Mother": "Sophia van Damme"}',
        '{"Name": "Jane Ramirez", "Sex": "f", "Born": "1102", "Died": "--", "Father": "Themistocles Merovech", "Mother": "Amara Flores"}',
        '{"Name": "Aldous Huxley", "Sex": "m", "Born": "1984", "Died": "1963", "Father": "Leonard Huxley", "Mother": "Julia Arnold"}',
        '{"Name": "Charles Bukowsky", "Sex": "m", "Born": "1984", "Died": "1963", "Father": "Leonard Bukowsky", "Mother": "Emilie Krauze"}',
        '{"Name": "Carl Gustav Jung", "Sex": "m", "Born": "1984", "Died": "1963", "Father": "Sigmund Freud", "Mother": "Emilie Preiswerk"}'
    ];


    const array = [];

    //parse the JSON data and add it to array
    for (let obj of data){
        obj = JSON.parse(obj)
        array.push(obj)
    }
    console.log(array)

   //wait for input
    btn.addEventListener('click', () => {
        printJson(array)
    }, false);


}

function printJson(array) {
    let output = document.getElementById('output');
    let input = document.querySelector('input').value.toLowerCase()
    output.innerHTML = ""
    for (const field of array){
        if (field["Name"].toLowerCase().startsWith(input)){
            output.innerHTML += generateOutput(field)
        }
    }
    if (output.innerHTML === ""){
        output.innerHTML += " Not found"
    }
}

function generateOutput(field){
    let string = "<p>"
    for (let key in field){
        string += key + ": " + field[key] + '<br>';
    }
    string += "</p>"
    return string;
}


