const product = [
    {
        id: 0,
        image: '../assets/shoes1.jpg',
        title: 'Trailmaster Low "Tough Trails Tough Boots" - Cobalt Blue',
        price: 3850000,
    },
    {
        id: 1,
        image: '../assets/shoes2.jpg',
        title: 'Legatant Old - Cloe Horserump Overdyed Dark Brown',
        price: 5600000,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>Rp${price}</h2> <br>
                    <button onclick="change()" id="add">Add to cart</button>
                    <button id="added" style="visibility:hidden">Added</button>
                </div>
            </div>`
        )
    }).join('')
};

function change()
{
document.getElementById("add").style.visibility = 'hidden';
document.getElementById("added").style.visibility = 'visible';
}

displayItem(categories);