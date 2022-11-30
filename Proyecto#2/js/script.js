const monsters = () => {
    document.querySelector("table#monsters").innerHTML = "";
    fetch(`https://api.open5e.com/monsters/`)
        .then(response =>
            response.text())
        .then(data => {
            data = JSON.parse(data);
            var plantillafinal = " "
            for (var i = 0; i < 10; i++) {
                let monster = data.results[i].name;
                let hp = data.results[i].hit_points;
                let plantilla = `
                        <th>
                        <tr>
                        <th scope="row"> ${monster} </th>
                        <td> ${hp} </td>
                      </tr>
                          `;
                          plantillafinal = plantillafinal.concat(plantilla);
                
            }
            document.querySelector("table#monsters").innerHTML += plantillafinal;
        })


}

const spells = () => {
    document.querySelector("table#spells").innerHTML = "";
    fetch(`https://api.open5e.com/spells/`)
        .then(response =>
            response.text())
        .then(data => {
            data = JSON.parse(data);
            var plantillafinal = " "
            for (var i = 0; i < 10; i++) {
                let spell = data.results[i].name;
                let lvl = data.results[i].level_int;
                let plantilla = `
                        <th>
                        <tr>
                        <th scope="row"> ${spell} </th>
                        <td> ${lvl} </td>
                      </tr>
                          `;
                          plantillafinal = plantillafinal.concat(plantilla);
                
            }
            document.querySelector("table#spells").innerHTML += plantillafinal;
        })


}