    window.onload = () => {
        let btn = document.querySelector("button");
        btn.addEventListener('click', () => {
            printJson() }, false);

        let jSon = '{"name": "Jane Doe","Sex": "f", "Born": "1876", ' +
            '"Died": "1956", "Father": "Petreus De Milano","Mother":"Sophia Van Damme"}';
        let woman = JSON.parse(jSon);
        let array = [];
        array.push(woman);
        console.log(array);
        console.log(array[0].Sex);
        console.log(array[0].Born);
        console.log(array[0].Father);
        let output = document.querySelector('p');
        let name = array["Sex"];
        output.innerHTML = name;
        const data = [
            '{"Name": "Jane Doe", "Sex": "f", "Born": "1876", "Died": "1956", "Father": "Petreus de Milliano", "Mother": "Sophia van Damme"}',
            '{"Name": "Jane Ramirez", "Sex": "f", "Born": "1102", "Died": "--", "Father": "Themistocles Merovech", "Mother": "Amara Flores"}'
        ];

        for (let name of data){
            name = JSON.parse(name);

            for (let key in name){
                output.innerText ="<pre>" +  key + ":" + name.key + "</pre>";
            }
            output.innerHTML = JSON.stringify(name);
        }


    }

    function printJson() {
            let jSon = '{"name": "Jane Doe",' +
                '"Sex": "f", ' +
                '"Born": "1876", ' +
                '"Died": "1956", ' +
                '"Father": "Petreus De Milano",' +
                '"Mother":"Sophia Van Damme"}, {"name": Vladimir, "father": eugene}';
        let woman = JSON.parse(jSon);
        console.log(woman);

        let output = document.querySelector('p');
         output.textContent = jSon;

    }

