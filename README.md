# Proywv4

Proyecto de Login

Este proyecto implementa una página de inicio de sesión simple utilizando tecnologías web estándar como HTML, CSS y JavaScript.

Archivos Principales
index.html: Contiene la estructura HTML de la página de inicio de sesión.
CSS/style.css: El archivo de estilo que proporciona el diseño visual para la página.
JS/login.js: El script JavaScript que maneja la validación del formulario y el inicio de sesión.

Funcionalidad
La página presenta un formulario de inicio de sesión con campos para el nombre de usuario (email) y contraseña.
La contraseña debe cumplir con ciertos requisitos definidos en la función validarContrasena.
Se proporciona retroalimentación visual y mensajes de error en caso de que el usuario no complete todos los campos o la contraseña no cumpla con los requisitos.
Se simula la validación del usuario mediante una función validarUsuario que compara el nombre de usuario y la contraseña con una lista de usuarios autorizados después de un retardo de 2 segundos.
Si las credenciales son válidas, se redirige al usuario a una página principal (/main.html) después de un breve retraso.

Uso
Abre el archivo index.html en un navegador web moderno.
Ingresa las credenciales de usuario para probar la funcionalidad de inicio de sesión.

//

Página de Elementos de Productos con Ventana de Detalles
Este segmento del proyecto presenta una página que muestra una serie de tarjetas de productos, cada una con su respectiva imagen, título, descripción, precio y cantidad. Además, permite filtrar los productos por título y descripción y proporciona una función de paginación para navegar a través de los productos.

Archivos Principales
productos.html: Contiene la estructura HTML de la página de elementos de productos.
CSS/estilos.css: El archivo de estilo que proporciona el diseño visual para la página.
JS/script.js: El script JavaScript que maneja la creación dinámica de tarjetas, filtrado, paginación y detalles de productos.

Funcionalidad
Tarjetas de Productos: Cada tarjeta muestra información sobre un producto específico, incluyendo imagen, título, descripción, precio y cantidad.
Filtrado de Productos: Se pueden aplicar filtros por título y descripción para encontrar productos específicos más fácilmente.
Paginación: Permite navegar a través de las distintas páginas de productos, mostrando un número específico de productos por página.
Ventana de Detalles: Al hacer clic en "Ver Detalle" en una tarjeta, se muestra una ventana emergente con detalles más específicos del producto, incluyendo la posibilidad de editar la descripción, cantidad y precio.

Uso
Abre el archivo productos.html en un navegador web moderno.
Explora la lista de productos y utiliza los botones de paginación para navegar entre las páginas.
Utiliza los campos de filtro para buscar productos específicos por título y descripción.
Haz clic en "Ver Detalle" en una tarjeta para obtener información más detallada y la opción de editar la descripción, cantidad y precio del producto.
