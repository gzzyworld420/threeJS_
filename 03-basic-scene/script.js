// console.log(THREE);
// Creando la escena
const scene = new THREE.Scene();

// Creando un mesh (objeto visible)
// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
// Instantiate a MeshBasicMaterial with a color 
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); 

// Mesh
const mesh = new THREE.Mesh(geometry, material);

// Agregando el mesh a la escena
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
// Los parametros son:
// 1. Campo de vision (en grados) - fov (field of view)
// 2. Aspect ratio (ancho / alto)
// 3. Near plane 
// 4. Far plane
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
// console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

// Set the size
renderer.setSize(sizes.width, sizes.height);

// Render
renderer.render(scene, camera);




 





