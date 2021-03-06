const container = document.querySelector('.container');
const url = 'resources/images.json';

// OFFLINE ONLY
const myJSONFile = {
    "results": [
        {
            "id": "01",
            "img": "img/01.jpg",
            "author": "Slayer",
            "title": "Reign In Blood"
        },
        {
            "id": "02",
            "img": "img/02.jpg",
            "author": "Sepultura",
            "title": "Arise"
        },
        {
            "id": "03",
            "img": "img/03.jpg",
            "author": "Sodom",
            "title": "Agent Orange"
        },
        {
            "id": "04",
            "img": "img/04.jpg",
            "author": "Destruction",
            "title": "Infernal Overkill"
        },
        {
            "id": "05",
            "img": "img/05.jpg",
            "author": "Megadeth",
            "title": "Rust In Peace"
        },
        {
            "id": "06",
            "img": "img/06.jpg",
            "author": "Testament",
            "title": "The Legacy"
        },
        {
            "id": "07",
            "img": "img/07.jpg",
            "author": "Overkill",
            "title": "The Years of Decay"
        },
        {
            "id": "08",
            "img": "img/08.jpg",
            "author": "Forbidden",
            "title": "Forbidden Evil"
        },
        {
            "id": "09",
            "img": "img/09.jpg",
            "author": "Exhorder",
            "title": "Slaughter In The Vatican"
        },
        {
            "id": "10",
            "img": "img/10.jpg",
            "author": "Demolition Hammer",
            "title": "Tortured Existence"
        },
        {
            "id": "11",
            "img": "img/11.jpg",
            "author": "XentriX",
            "title": "Shattered Existence"
        },
        {
            "id": "12",
            "img": "img/12.jpg",
            "author": "Municipal Waste",
            "title": "The Art of Partying"
        },
        {
            "id": "13",
            "img": "img/13.jpg",
            "author": "DRI",
            "title": "Thrash Zone"
        },
        {
            "id": "14",
            "img": "img/14.jpg",
            "author": "Violator",
            "title": "Scenarios of Brutality"
        },
        {
            "id": "15",
            "img": "img/15.jpg",
            "author": "Tankard",
            "title": "The Morning After"
        },
        {
            "id": "16",
            "img": "img/16.jpg",
            "author": "Toxic Holocaust",
            "title": "An Overdose of Death"
        },
        {
            "id": "17",
            "img": "img/17.jpg",
            "author": "Razor",
            "title": "Violent Restitution"
        },
        {
            "id": "18",
            "img": "img/01.jpg",
            "author": "Havok",
            "title": "Time Is Up"
        },
        {
            "id": "19",
            "img": "img/19.jpg",
            "author": "Exumer",
            "title": "Possessed By Fire"
        },
        {
            "id": "20",
            "img": "img/20.jpg",
            "author": "Onslaught",
            "title": "The Force"
        }
    ]
}

const buildMyCards = () => {
    let outputHTML = '';
    myJSONFile.results.forEach(e => {
                    outputHTML += `
                    <div class="album">
                        <div class="album__cover">
                            <img src="${e.img}" alt="${e.author} - ${e.title}">
                        </div>
                        <div class="album__text">
                            <p>${e.author} - ${e.title}</p>
                        </div>
                    </div>
                    `
                })
    const albumContainer = document.createElement('div');
    container.appendChild(albumContainer);
    albumContainer.classList.add('albums');
    albumContainer.innerHTML = outputHTML;

    const cards = document.querySelectorAll('.album__cover img');
    // console.log(cards);

    cards.forEach(e => {
        e.addEventListener('mouseenter', () => {
            cards.forEach(f => {
                f.classList.add('darken');
            })
            e.classList.remove('darken');
            e.classList.add('grow');
        })
        e.addEventListener('mouseleave', () => {
            cards.forEach(e => {
                e.classList.remove('darken');
            })
            e.classList.remove('grow');
        })
    })
}

buildMyCards();

// ONLINE ONLY (using AJAX)
// document.addEventListener("DOMContentLoaded", () => {
//     let outputHTML = '';
//     fetch(url).then(response => {return response.json()}).then(data => {
//         data.results.forEach(e => {
//             outputHTML += `
//             <div class="album">
//                 <div class="album__cover">
//                     <img src="${e.img}" alt="${e.author} - ${e.title}">
//                 </div>
//                 <div class="album__text">
//                     <p>${e.author} - ${e.title}</p>
//                 </div>
//             </div>
//             `
//         })
//         const albumContainer = document.createElement('div');
//         container.appendChild(albumContainer);
//         albumContainer.classList.add('albums');
//         albumContainer.innerHTML = outputHTML;

//         const cards = document.querySelectorAll('.album__cover img');
//         // console.log(cards);

//         cards.forEach(e => {
//             e.addEventListener('mouseenter', () => {
//                 cards.forEach(f => {
//                     f.classList.add('darken');
//                 })
//                 e.classList.remove('darken');
//                 e.classList.add('grow');
//             })
//             e.addEventListener('mouseleave', () => {
//                 cards.forEach(e => {
//                     e.classList.remove('darken');
//                 })
//                 e.classList.remove('grow');
//             })
//         })
//     })
// });