import * as THREE from "../js/three.module.js";

export default function E6({x,y,z}){
//OBJETOS  ✏️✏️✏️✏️  🪶

var geometry16 = new THREE.CylinderGeometry(18, 18, 3, 16);

var textura16 = new THREE.TextureLoader().load("imagenes/madera2.jpg");

var material16 = new THREE.MeshLambertMaterial({
    map: textura16,
    side: THREE.DoubleSide
});

var mesh16 = new THREE.Mesh(geometry16, material16);

//scene.add(mesh16);
mesh16.position.set(0, 0, 6);
mesh16.castShadow = false;
mesh16.receiveShadow = false;


const ESC6 =new THREE.Group();
ESC6.add(mesh16);
ESC6.position.set(x,y,z);

return ESC6;

}