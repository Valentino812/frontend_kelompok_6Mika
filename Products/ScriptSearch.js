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
                    <h2>Rp${price}</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);