const productos = [
    { nombre: "Groot", precio: 7500, id: 1, img: "./img/Marvel/groot.png", categoria: "Marvel", stock: 10 },
    { nombre: "Black Panther", precio: 6200, id: 2, img: "./img/Marvel/blackPanther.png", categoria: "Marvel", stock: 6 },
    { nombre: "Elsa", precio: 6000, id: 3, img: "./img/Disney/elsa.png", categoria: "Disney", stock: 12 },
    { nombre: "Pinoccio", precio: 8000, id: 4, img: "./img/Disney/pinocchio.png", categoria: "Disney", stock: 5 },
    { nombre: "Batman", precio: 6000, id: 5, img: "./img/DC Comics/batman.png", categoria: "DC", stock: 6 },
    { nombre: "Flash", precio: 6200, id: 6, img: "./img/DC Comics/flash.png", categoria: "DC", stock: 3 },
    { nombre: "Harley Quinn", precio: 9200, id: 7, img: "./img/DC Comics/harley.png", categoria: "DC", stock: 4 },
    { nombre: "Robin", precio: 6200, id: 8, img: "./img/DC Comics/robin.png", categoria: "DC", stock: 8 },
    { nombre: "Superman", precio: 8500, id: 9, img: "./img/DC Comics/superman.png", categoria: "DC", stock: 2 },
    { nombre: "Mujer Maravilla", precio: 9200, id: 10, img: "./img/DC Comics/wonderWoman.png", categoria: "DC", stock: 2 },
    { nombre: "Cenicienta", precio: 9500, id: 11, img: "./img/Disney/cindirella.png", categoria: "Disney", stock: 4 },
    { nombre: "Minnie", precio: 12000, id: 12, img: "./img/Disney/minnie.png", categoria: "Disney", stock: 5 },
    { nombre: "Tinkerbell", precio: 13500, id: 13, img: "./img/Disney/tinkerbell.png", categoria: "Disney", stock: 5 },
    { nombre: "Ursula", precio: 9300, id: 14, img: "./img/Disney/ursula.png", categoria: "Disney", stock:4 },
    { nombre: "Black Widow", precio: 9000, id: 15, img: "./img/Marvel/blackWidow.png", categoria: "Marvel", stock: 8 },
    { nombre: "Bruja Escarlata", precio: 12500, id: 16, img: "./img/Marvel/scarletwitch.png", categoria: "Marvel", stock: 3 },
    { nombre: "Spiderman", precio: 10000, id: 17, img: "./img/Marvel/spiderman.png", categoria: "Marvel", stock: 9 },
    { nombre: "Thor", precio: 8300, id: 18, img: "./img/Marvel/thor.png", categoria: "Marvel", stock: 11 },
    { nombre: "Darth Vader", precio: 15000, id: 19, img: "./img/Peliculas/darthVader.png", categoria: "Pelicula", stock: 4 },
    { nombre: "Dobby", precio: 9000, id: 20, img: "./img/Peliculas/dobby.png", categoria: "Pelicula", stock: 8 },
    { nombre: "Dustin", precio: 10500, id: 21, img: "./img/Peliculas/dustin.png", categoria: "Pelicula", stock: 3 },
    { nombre: "Gigantosaurus", precio: 14500, id: 22, img: "./img/Peliculas/gigantosaurus.png", categoria: "Pelicula", stock: 2 },
    { nombre: "Harry Potter", precio: 11300, id: 23, img: "./img/Peliculas/harryPotter.png", categoria: "Pelicula", stock: 5 },
    { nombre: "Zorro", precio: 8200, id: 24, img: "./img/Peliculas/zorro.png", categoria: "Peliculas", stock: 7 }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Funcion que retorne toda una categoría de productos: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}