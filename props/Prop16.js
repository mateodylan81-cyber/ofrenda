import * as THREE from "../js/three.module.js";

export default function E16({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

// CUERPO 1 
var geometry01 = new THREE.SphereGeometry(3, 32, 32);
var textura01 = new THREE.TextureLoader().load("imagenes/naranja.jpg");

var material01 = new THREE.MeshStandardMaterial({
    map: textura01,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1
});

var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(0, 2, 0);
mesh01.castShadow = true;
mesh01.receiveShadow = false; // 👈 Esto quita las sombras raras


// CUERPO 2
var geometry02 = new THREE.SphereGeometry(2, 32, 32);
var textura02 = new THREE.TextureLoader().load("imagenes/naranja.jpg");

var material02 = new THREE.MeshStandardMaterial({
    map: textura02,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1
});

var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(4.5, 1, 0);
mesh02.castShadow = true;
mesh02.receiveShadow = false; // 👈 Esto quita las sombras raras


const ESC16 = new THREE.Group();
ESC16.add(mesh01, mesh02);
ESC16.position.set(x, y, z);

return ESC16;

}