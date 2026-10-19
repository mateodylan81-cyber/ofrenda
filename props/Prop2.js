import * as THREE from "../js/three.module.js";

export default function E2({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

var geometry01 =new THREE.BoxGeometry(1,1);
var material01 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});

var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,4,0);
mesh01.castShadow = true;
mesh01.receiveShadow = true;

// Parte vertical de la cruz
var geometry02 = new THREE.CylinderGeometry(0.6, 0.6, 6, 20);
var material02 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh02);
mesh02.position.set(0, 3, 0);
mesh02.castShadow = true;
mesh02.receiveShadow = true;


// Parte horizontal de la cruz
var geometry03 = new THREE.CylinderGeometry(0.6, 0.6, 4, 20);
var material03 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03, material03);
//scene.add(mesh03);
mesh03.position.set(0, 4, 0);
mesh03.rotation.z = Math.PI / 2;
mesh03.castShadow = true;
mesh03.receiveShadow = true;

//
var geometry04 = new THREE.CylinderGeometry(0.15, 0.15, 4, 20);
var material04 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04, material04);
//scene.add(mesh04);
mesh04.position.set(0, 4, 0);
mesh04.rotation.z = Math.PI / 4;
mesh04.castShadow = true;
mesh04.receiveShadow = true;

//
var geometry05 = new THREE.CylinderGeometry(0.15, 0.15, 4, 20);
var material05 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05, material05);
//scene.add(mesh05);
mesh05.position.set(0, 4, 0);
mesh05.rotation.z = Math.PI / 4;
mesh05.castShadow = true;
mesh05.receiveShadow = true;

var geometry06 = new THREE.CylinderGeometry(0.15, 0.15, 4, 20);
var material06 = new THREE.MeshLambertMaterial({
    color: 0x8B4513,
    side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06, material06);
//scene.add(mesh06);
mesh06.position.set(0, 4, 0);
mesh06.rotation.z = Math.PI / -4;
mesh06.castShadow = true;
mesh06.receiveShadow = true;


const ESC2 =new THREE.Group();
ESC2.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06);
ESC2.position.set(x,y,z);

return ESC2;

}