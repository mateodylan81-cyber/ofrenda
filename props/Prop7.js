import * as THREE from "../js/three.module.js";

export default function E7({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

// CUERPO DEL PAN DE MUERTO
var geometry01 = new THREE.SphereGeometry(3, 16, 16);
var material01 = new THREE.MeshStandardMaterial({
    color: 0xF2B344,
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1,
    shadowSide: THREE.BackSide // 👈 ESTA LÍNEA ELIMINA LAS RAYAS DE SOMBRA EN EL PAN
});

var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(0, 1, 0);
mesh01.scale.set(1, 0.5, 1);
mesh01.castShadow = true;
mesh01.receiveShadow = true;


// HUESITO HORIZONTAL
var geometry02 = new THREE.CylinderGeometry(0.25, 0.25, 4, 8);
var material02 = new THREE.MeshStandardMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide,
    roughness: 0.7
});

var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(0, 2.2, 0);
mesh02.rotation.z = Math.PI / 2;
mesh02.castShadow = true;
mesh02.receiveShadow = true;


// HUESITO VERTICAL
var geometry03 = new THREE.CylinderGeometry(0.25, 0.25, 4, 8);
var material03 = new THREE.MeshStandardMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide,
    roughness: 0.7
});

var mesh03 = new THREE.Mesh(geometry03, material03);
mesh03.position.set(0, 2.2, 0);
mesh03.rotation.x = Math.PI / 2;
mesh03.castShadow = true;
mesh03.receiveShadow = true;


// BOLITA DEL CENTRO
var geometry04 = new THREE.SphereGeometry(0.5, 12, 12);
var material04 = new THREE.MeshStandardMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide,
    roughness: 0.7
});

var mesh04 = new THREE.Mesh(geometry04, material04);
mesh04.position.set(0, 2.5, 0);
mesh04.castShadow = true;
mesh04.receiveShadow = true;

//
var geometry05 = new THREE.SphereGeometry(0.5, 12, 12);
var material05 = new THREE.MeshStandardMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide,
    roughness: 0.7
});

var mesh05 = new THREE.Mesh(geometry05, material05);
mesh05.position.set(-2.5, 1.5, 0);
mesh05.castShadow = true;
mesh05.receiveShadow = true;

//
var geometry06 = new THREE.SphereGeometry(0.5, 12, 12);
var material06 = new THREE.MeshStandardMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide,
    roughness: 0.7
});

var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(2.5, 1.5, 0);
mesh06.castShadow = true;
mesh06.receiveShadow = true;

//
var geometry07 = new THREE.SphereGeometry(0.5, 12, 12);
var material07 = new THREE.MeshStandardMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide,
    roughness: 0.7
});

var mesh07 = new THREE.Mesh(geometry07, material07);
mesh07.position.set(0, 1.5, -2.5);
mesh07.castShadow = true;
mesh07.receiveShadow = true;

//
var geometry08 = new THREE.SphereGeometry(0.5, 12, 12);
var material08 = new THREE.MeshStandardMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide,
    roughness: 0.7
});

var mesh08 = new THREE.Mesh(geometry08, material08);
mesh08.position.set(0, 1.5, 2.5);
mesh08.castShadow = true;
mesh08.receiveShadow = true;




const ESC7 = new THREE.Group();
ESC7.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08);
ESC7.position.set(x, y, z);

return ESC7;

}