const product = [
    {
        id: 0,
        image: '../assets/s1.webp',
        title: 'Cordmaster Domestic Black Tea Core',
        price: 100000,
     },
    {
        id: 1,
        image: '../assets/s2.webp',
        title: 'Tough Trailmaster - WaxedThe Boondockers - Waxed Flesh',
        price: 200000,
    },
    {
        id: 2,
        image: '../assets/s3.webp',
        title: 'The Boondockers Cloe Nuda - Naturale',
        price: 30000,
    },
    {
        id: 3,
        image: '../assets/s4.webp',
        title: 'The Shoe',
        price: 40000,
    }
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
                        <h2>$ ${price}</h2>
                        <button>Add to cart</button>
                    </div>
                </div>`
            )
        }).join('')
    };
    displayItem(categories);