import * as THREE from "../js/three.module.js";

export default function E8({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

// MARCO DE MADERA
var geometry02 = new THREE.CylinderGeometry(0.15, 0.15, 2.5, 16);
var textura02 = new THREE.TextureLoader().load("imagenes/madera.jpg");

var material02 = new THREE.MeshLambertMaterial({
    map: textura02,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(0, 3, 0.6);
mesh02.rotation.z = Math.PI / 2;
mesh02.castShadow = true;
mesh02.receiveShadow = false;

//
var geometry03 = new THREE.CylinderGeometry(0.15, 0.15, 2.5, 16);
var textura03 = new THREE.TextureLoader().load("imagenes/madera.jpg");

var material03 = new THREE.MeshLambertMaterial({
    map: textura03,
    side: THREE.DoubleSide
});

var mesh03 = new THREE.Mesh(geometry03, material03);
mesh03.position.set(0, 5, 0.6);
mesh03.rotation.z = Math.PI / 2;
mesh03.castShadow = true;
mesh03.receiveShadow = false;

//
var geometry04 = new THREE.CylinderGeometry(0.15, 0.15, 2.2, 16);
var textura04 = new THREE.TextureLoader().load("imagenes/madera.jpg");

var material04 = new THREE.MeshLambertMaterial({
    map: textura04,
    side: THREE.DoubleSide
});

var mesh04 = new THREE.Mesh(geometry04, material04);
mesh04.position.set(1.1, 4, 0.6);
mesh04.castShadow = true;
mesh04.receiveShadow = false;

//
var geometry05 = new THREE.CylinderGeometry(0.15, 0.15, 2.2, 16);
var textura05 = new THREE.TextureLoader().load("imagenes/madera.jpg");

var material05 = new THREE.MeshLambertMaterial({
    map: textura05,
    side: THREE.DoubleSide
});

var mesh05 = new THREE.Mesh(geometry05, material05);
mesh05.position.set(-1.1, 4, 0.6);
mesh05.castShadow = true;
mesh05.receiveShadow = false;


// FOTO 
var geometry06 = new THREE.PlaneGeometry(1.9, 1.8);
var textura06 = new THREE.TextureLoader().load("imagenes/11.jpeg");

var material06 = new THREE.MeshBasicMaterial({
    map: textura06,
    side: THREE.DoubleSide
});

var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(0, 4, 0.6);
mesh06.castShadow = false;
mesh06.receiveShadow = false;

// FONDO NEGRO TRAS LA FOTO
var geometry07 = new THREE.PlaneGeometry(1.9, 1.8);
var material07 = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide
});

var mesh07 = new THREE.Mesh(geometry07, material07);
mesh07.position.set(0, 4, 0.5);
mesh07.castShadow = false;
mesh07.receiveShadow = false;


// HUESITOS DE ADORNO DEL MARCO
var geometry08 = new THREE.SphereGeometry(0.2, 16, 16);
var material08 = new THREE.MeshLambertMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide
});

var mesh08 = new THREE.Mesh(geometry08, material08);
mesh08.position.set(-0.6, 5.3, 0.7);
mesh08.castShadow = true;
mesh08.receiveShadow = false;

//
var geometry09 = new THREE.SphereGeometry(0.2, 16, 16);
var material09 = new THREE.MeshLambertMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide
});

var mesh09 = new THREE.Mesh(geometry09, material09);
mesh09.position.set(-0.6, 5, 0.7);
mesh09.castShadow = true;
mesh09.receiveShadow = false;

//
var geometry10 = new THREE.CylinderGeometry(0.13, 0.13, 1, 16);
var material10 = new THREE.MeshLambertMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide
});

var mesh10 = new THREE.Mesh(geometry10, material10);
mesh10.position.set(0, 5.1, 0.7);
mesh10.rotation.z = Math.PI / 2;
mesh10.castShadow = true;
mesh10.receiveShadow = false;

//
var geometry11 = new THREE.SphereGeometry(0.2, 16, 16);
var material11 = new THREE.MeshLambertMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide
});

var mesh11 = new THREE.Mesh(geometry11, material11);
mesh11.position.set(0.6, 5.3, 0.7);
mesh11.castShadow = true;
mesh11.receiveShadow = false;

//
var geometry12 = new THREE.SphereGeometry(0.2, 16, 16);
var material12 = new THREE.MeshLambertMaterial({
    color: 0xC4810E,
    side: THREE.DoubleSide
});

var mesh12 = new THREE.Mesh(geometry12, material12);
mesh12.position.set(0.6, 5, 0.7);
mesh12.castShadow = true;
mesh12.receiveShadow = false;


const ESC8 = new THREE.Group();
ESC8.add(mesh02, mesh03, mesh04, mesh05, mesh06,
    mesh07, mesh08, mesh09, mesh10, mesh11, mesh12);
ESC8.position.set(x, y, z);

return ESC8;

}