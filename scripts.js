document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada exitosamente.');

    activateMenuLinks();

    animateMessage();

    animateButtonClicks();

    smoothScrollToSections();

    implementFadeInOnScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('#nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

const nav = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});

});

function activateMenuLinks() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function animateMessage() {
    const animatedMessage = document.getElementById('mensaje-animado');
    if (animatedMessage) {
        animatedMessage.style.animation = 'desplazamiento-horizontal 5s infinite linear';
    }
}

function animateButtonClicks() {
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300);
        });
    });
}

function smoothScrollToSections() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function implementFadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada exitosamente.');

    generarProductos();
    agregarInteractividad();
    inicializarBotonesCarrito();
});

function generarProductos() {
    const productos = [
        { id: 1, name: "Consultoría Jurídica", description: "Asesoramiento en cuestiones legales para profesionales y negocios locales.", amount: 5000 },
        { id: 2, name: "Diseño Web", description: "Creación de sitios web modernos y funcionales adaptados a negocios locales.", amount: 12000 },
        { id: 3, name: "Marketing Digital", description: "Estrategias de promoción y posicionamiento online para pequeñas empresas.", amount: 8000 },
    ];

    console.log(productos);
    return productos;
}

const productos = generarProductos();

function agregarInteractividad() {
    const botonesDescripcion = document.querySelectorAll('.btn-descripcion');

    botonesDescripcion.forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const productoId = event.target.dataset.productoId;
            const producto = productos.find(p => p.id == productoId);
            const card = document.querySelector(`.card[data-producto-id="${productoId}"]`);

            if (card && producto) {
                let descripcionParrafo = card.querySelector('.descripcion-ampliada');

                if (!descripcionParrafo) {
                    descripcionParrafo = document.createElement('p');
                    descripcionParrafo.classList.add('descripcion-ampliada');
                    descripcionParrafo.textContent = producto.description;
                    card.appendChild(descripcionParrafo);
                }
            }
        });
    });
}

const carrito = [];

function actualizarCarrito() {
    const carritoElement = document.querySelector('#carrito');
    carritoElement.innerHTML = '';

    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.amount} (Cantidad: ${item.cantidad})`;
        
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => {
            eliminarDelCarrito(index);
        });
        
        li.appendChild(eliminarBtn);
        carritoElement.appendChild(li);
        
        total += item.amount * item.cantidad;
    });

    const totalElement = document.querySelector('#total');
    totalElement.textContent = `Total: $${total}`;

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id == productoId);
    if (producto) {
        const productoEnCarrito = carrito.find(item => item.id === producto.id);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        actualizarCarrito();
    }
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function limpiarCarrito() {
    carrito.length = 0;
    actualizarCarrito();
}

function inicializarBotonesCarrito() {
    const botonesCarrito = document.querySelectorAll('.btn-carrito');

    botonesCarrito.forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const productoId = event.target.dataset.productoId;
            agregarAlCarrito(productoId);
        });
    });

    const limpiarBtn = document.querySelector('#limpiar-carrito');
    limpiarBtn.addEventListener('click', limpiarCarrito);

    const comprarBtn = document.querySelector('#comprar-carrito');
    comprarBtn.addEventListener('click', realizarCompra);
}

function realizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de comprar.");
        return;
    }

    alert("¡Compra realizada exitosamente! =)");
    limpiarCarrito();
}

window.addEventListener('DOMContentLoaded', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        const carritoArray = JSON.parse(carritoGuardado);
        carrito.push(...carritoArray);
        actualizarCarrito();
    }
});