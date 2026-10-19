import * as THREE from "../js/three.module.js";

export default function E15({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

// TAMAL 1
var geometry01 = new THREE.CylinderGeometry(.8, .8, 1, 32);
var material01 = new THREE.MeshStandardMaterial({
    color: 0x632612,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1
});

var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(-2, 1.2, 0);
mesh01.rotation.z = Math.PI / 2;
mesh01.castShadow = true;
mesh01.receiveShadow = false;


// TAMAL 2
var geometry02 = new THREE.CylinderGeometry(.8, .8, 1, 32);
var material02 = new THREE.MeshStandardMaterial({
    color: 0x632612,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1
});

var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(0, 1.2, -2);
mesh02.rotation.z = Math.PI / 2;
mesh02.castShadow = true;
mesh02.receiveShadow = false;


// TAMAL 3
var geometry03 = new THREE.CylinderGeometry(.8, .8, 1, 32);
var material03 = new THREE.MeshStandardMaterial({
    color: 0x632612,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1
});

var mesh03 = new THREE.Mesh(geometry03, material03);
mesh03.position.set(2, 1.2, 0);
mesh03.rotation.z = Math.PI / 2;
mesh03.castShadow = true;
mesh03.receiveShadow = false;


// TAMAL 4
var geometry04 = new THREE.CylinderGeometry(.8, .8, 1, 32);
var material04 = new THREE.MeshStandardMaterial({
    color: 0x632612,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1
});

var mesh04 = new THREE.Mesh(geometry04, material04);
mesh04.position.set(0, 1.2, 1.5);
mesh04.rotation.z = Math.PI / 2;
mesh04.castShadow = true;
mesh04.receiveShadow = false;


// Plato hondo - parte exterior
var geometry05 = new THREE.CylinderGeometry(4, 3, 1, 32);
var material05 = new THREE.MeshStandardMaterial({
    color: 0xffffff, 
    side: THREE.DoubleSide,
    roughness: 0.3,
    metalness: 0.1
});

var mesh05 = new THREE.Mesh(geometry05, material05);
mesh05.position.set(0, 1, 0);
mesh05.castShadow = true;
mesh05.receiveShadow = true;


// Plato hondo - parte interior
var geometry06 = new THREE.CylinderGeometry(3.5, 2.5, 0.9, 32);
var material06 = new THREE.MeshStandardMaterial({
    color: 0xE3D266, 
    side: THREE.DoubleSide, 
    roughness: 0.5,
    metalness: 0.1
});

var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(0, 1.2, 0);
mesh06.castShadow = true;
mesh06.receiveShadow = true;


const ESC15 = new THREE.Group();
ESC15.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06);
ESC15.position.set(x, y, z);

return ESC15;

}