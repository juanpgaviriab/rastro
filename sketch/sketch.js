
import data from '/sketch/contenido/contenido.json' assert { type: 'json' };

// const boton = document.getElementById("b" + 1);
// const botonIndex = document.querySelectorAll('.boton').length;
const botonIndex = 4;

let element = [];
let rastro = [];
let artists = [];

// let img = [];

let details = [];

let x = [];
let y = [];

let x_rastro = [];
let y_rastro = [];

let x_artist = [];
let y_artist = [];



let switch_button = [];

for (let index = 0; index < botonIndex; index++) {

    element[index] = document.getElementById("button" + index);
    let main_random_x = Math.random() * 70;
    let main_random_y = Math.random() * 80 + 10;
    element[index].style.left = `${main_random_x}%`;
    element[index].style.top = `${main_random_y}%`;

    rastro[index] = document.getElementById("rastro" + index);
    rastro[index].style.left = `${main_random_x}%`;
    rastro[index].style.top = `${main_random_y + 10}%`;

    artists[index] = document.getElementById("artist" + index);
    artists[index].style.left = `${main_random_x}%`;
    artists[index].style.top = `${main_random_y + 4}%`;

    x[index] = 0;
    y[index] = 0;

    x_rastro[index] = 0;
    y_rastro[index] = 0;

    x_artist[index] = 0;
    y_artist[index] = 0;

    switch_button[index] = false;

}


function button_info(num) {
    for (let i = 0; i < botonIndex; i++) {
        rastro[i].style.display = `none`;
        artists[i].style.display = `none`;
    }
    // img.classList.remove('active');

    // for (let i = 0; i < botonIndex; i++) {
    //     element[i].onblur = function(){
    //         console.log('onblur');
    //         t.innerHTML = '';
    //         d.innerHTML = '';
    //         a.innerHTML = '';
    //     };
    //     element[i].focus = function(){
    //         console.log('focus');
    //         t.innerHTML = data[i].titulo;
    //         d.innerHTML = data[i].description;
    //         a.innerHTML = data[i].artistas;
    //     };
    // }
        img.src = 'images/img_00' + num + '.jpeg';
        // img.classList.add('active'); 
        console.log('clicked∫');
        t.innerHTML = data[num].titulo;
        d.innerHTML = data[num].description;
        a.innerHTML = data[num].artistas;

        rastro[num].style.display = `inline`;
        artists[num].style.display = `inline`;

        switch_button[num] = true;
}

document.addEventListener("click", function () {
    let img = document.getElementById("img");
    let t = document.getElementById("t");
    let d = document.getElementById("d");
    let a = document.getElementById("a");

        console.log(switch_button);
        if (switch_button.includes(true)) {
            console.log('yes');
            let index = switch_button.indexOf(true);
            console.log(index);
            button_info(index);
            for (let i = 0; i < botonIndex; i++) {
                switch_button[i] = false;
            }
        }else{
            for (let i = 0; i < botonIndex; i++) {
                rastro[i].style.display = `none`;
                artists[i].style.display = `none`;
            }
            console.log('no');
            t.innerHTML = '';
            d.innerHTML = '';
            a.innerHTML = '';
        }
});


for (let i = 0; i < botonIndex; i++) {
    document.getElementById("button" + i).addEventListener("click", function () {
        button_info(i);
    });
}


for (let index = 0; index < botonIndex; index++) {
    interact(element[index])
        .draggable({
            modifiers: [
                interact.modifiers.snap({
                    targets: [
                        interact.snappers.grid({ x: 1, y: 1 })
                    ],
                    range: Infinity,
                    relativePoints: [{ x: 0, y: 0 }]
                }),
                interact.modifiers.restrict({
                    restriction: element[index].parentNode,
                    elementRect: { top: 0, left: 0, bottom: 1.1, right: 1.1 },
                    endOnly: true
                })
            ],
            inertia: true
        })
        .on('dragmove', function (event) {
            x[index] += event.dx
            y[index] += event.dy

            event.target.style.transform = 'translate(' + x[index] + 'px, ' + y[index] + 'px)'
        })

    // details[index].addEventListener("toggle", (event) => {
    //     if (details[index].open) {
    //         // img[index].classList.add('active');
    //         for (let i = 0; i < botonIndex; i++) {
    //             if (i != index) {
    //                 details[i].removeAttribute('open');
    //             }
    //         }
    //     } else {
    //         // img[index].classList.remove('active');
    //     }
    // });
}

for (let index = 0; index < botonIndex; index++) {
    interact(rastro[index])
        .draggable({
            modifiers: [
                interact.modifiers.snap({
                    targets: [
                        interact.snappers.grid({ x_rastro: 1, y_rastro: 1 })
                    ],
                    range: Infinity,
                    relativePoints: [{ x_rastro: 0, y_rastro: 0 }]
                }),
                interact.modifiers.restrict({
                    restriction: rastro[index].parentNode,
                    elementRect: { top: 0, left: 0, bottom: 1.1, right: 1.1 },
                    endOnly: true
                })
            ],
            inertia: true
        })
        .on('dragmove', function (event) {
            x_rastro[index] += event.dx
            y_rastro[index] += event.dy
            switch_button[index] = true;

            event.target.style.transform = 'translate(' + x_rastro[index] + 'px, ' + y_rastro[index] + 'px)'
        })
}

for (let index = 0; index < botonIndex; index++) {
    interact(artists[index])
        .draggable({
            modifiers: [
                interact.modifiers.snap({
                    targets: [
                        interact.snappers.grid({ x_artist: 1, y_artist: 1 })
                    ],
                    range: Infinity,
                    relativePoints: [{ x_artist: 0, y_artist: 0 }]
                }),
                interact.modifiers.restrict({
                    restriction: artists[index].parentNode,
                    elementRect: { top: 0, left: 0, bottom: 1.1, right: 1.1 },
                    endOnly: true
                })
            ],
            inertia: true
        })
        .on('dragmove', function (event) {
            x_artist[index] += event.dx
            y_artist[index] += event.dy
            switch_button[index] = true;

            event.target.style.transform = 'translate(' + x_artist[index] + 'px, ' + y_artist[index] + 'px)'
        })
}



/////////////////////////

// BLOTTER - Example 2
var text = new Blotter.Text("CAPTCHA", {
    family: "'IBM Plex Mono'",
    size: 20,
    fill: "red",
    paddingLeft: 20,
    paddingRight: 20
});

var material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.25;
material.uniforms.uVolatility.value = 0.1;

var blotter = new Blotter(material, {
    texts: text
});

var elem = document.getElementById("home");
var scope = blotter.forText(text);

scope.appendTo(elem);
