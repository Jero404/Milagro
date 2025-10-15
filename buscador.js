const productosSection = `
<section class="productos">
	<div class="productos-row">
		<div class="card">
			<img src="assets/img/productos/bolso lila-gris.jpg" alt="Producto 1">
			<h3>Bolso Milagro - Lavanda y chocolate </h3>
			<button class="boton" onclick="document.getElementById('desc-1').classList.toggle('d-none')">Ver descripción</button>
			<p id="desc-1" class="d-none">
				28cm de ancho x 24cm  de alto y 1,34m de alto con el asa extendida<br><br>
				Este elegante bolso artesanal destaca por su fusión de colores suaves y profundos: lavanda al centro y chocolate en los laterales, creando un contraste sofisticado y armonioso. El detalle central de mariposa con brillo y la correa con eslabones dorados le añaden un aire delicado y femenino, perfecto para ocasiones especiales o para darle un toque chic a tu día a día.<br><br>
				Su cuerpo tejido a mano en técnica de crochet garantiza firmeza, textura única y gran estilo. Ideal para mujeres que buscan un accesorio versátil, con encanto y elaborado con dedicación.<br><br>
				✋ Hecho a mano con cuidado y precisión<br>
				✅ Comodidad, estilo y durabilidad en una sola pieza<br><br>
				Un bolso que mezcla ternura, elegancia y originalidad en cada detalle.
			</p>
		</div>
		<div class="card">
			<img src="assets/img/productos/bolso yel-cyan.jpg" alt="Producto 2">
			<h3>Bolso Milagro- modelo bicolor turquesa y amarillo</h3>
			<button class="boton" onclick="document.getElementById('desc-2').classList.toggle('d-none')">Ver descripción</button>
			<p id="desc-2" class="d-none">Descripción:<br>
								30 de ancho x 24 de alto y 40 de alto con el asa extendida<br><br>
Con un diseño llamativo, moderno y 100% artesanal, este bolso tejido en crochet es una pieza única que combina practicidad con estilo. Su estructura firme y su textura suave lo convierten en el complemento ideal para un look casual y creativo.<br><br>
La combinación vibrante de turquesa y amarillo aporta alegría y personalidad, mientras que el detalle metálico decorativo al frente le da un toque elegante. Su asa gruesa y cómoda lo hace perfecto para llevar a diario, ya sea en salidas informales o como un accesorio original para destacar tu outfit.<br><br>
✋ Elaboración completamente artesanal<br>
✅ Resistente, funcional y fácil de cuidar<br><br>
Un bolso versátil que refleja autenticidad y buen gusto en cada puntada.</p>
	</div>
			<div class="card">
			<img src="assets/img/productos/bolso lila-mor.jpg" alt="Producto 3">
			<h3>Bolso Milagro- lavanda con borla</h3>
			<button class="boton" onclick="document.getElementById('desc-3').classList.toggle('d-none')">Ver descripción</button>
			<p id="desc-3" class="d-none">Descripción:<br>
								25 de ancho x 22 de alto y 1,20 mts alto con el asa extendida<br><br>
Este hermoso bolso artesanal combina tonos lavanda y morado en un diseño femenino, delicado y único. Hecho completamente a mano en técnica de crochet, su estructura compacta y su textura suave lo convierten en el accesorio ideal para acompañarte con estilo en tu día a día.<br><br>
Cuenta con una borla lateral decorativa y un lazo frontal que aportan un toque coqueto y original. Su correa tejida en espiral asegura comodidad al llevarlo cruzado o al hombro, adaptándose perfectamente a looks casuales y relajados.<br><br>
✋ Hecho a mano con dedicación<br>
✅ Práctico, resistente y fácil de mantener<br><br>
Un bolso encantador para quienes aman los detalles artesanales y los colores suaves.</p>
	</div>
	</div>
</section>
`;

const shopcontent = document.getElementById ('productos-row');
const displayproduct = () => {
    productosSection.array.forEach(productosSection => {
    Content.innerHTML += productosSection;
    });
}