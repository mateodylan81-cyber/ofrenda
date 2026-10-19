import * as THREE from "../js/three.module.js";

export default function E4({x,y,z}){


//OBJETOS  ✏️✏️✏️✏️  🪶

// CUERPO DEL TAMAL

var geometry01 = new THREE.CylinderGeometry(1, 1, 2, 16);
var material01 = new THREE.MeshPhysicalMaterial({
    color: 0x006400,
    side: THREE.DoubleSide,
    transmission: 1,
    roughness: 0,
    ior: 1.5,
    thickness: 0.5
});

var mesh01 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh01);
mesh01.position.set(0, 1.5, -1);
mesh01.rotation.z = Math.PI / 2;


var geometry02 = new THREE.CylinderGeometry(.8, .8, 3, 16);
var material02 = new THREE.MeshBasicMaterial({
    color: 0xFFFFFFF,
    side: THREE.DoubleSide,
    
});

var mesh02 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh02);
mesh02.position.set(0, 1.5,-1);
mesh02.rotation.z = Math.PI / 2;

//tamal2
var geometry03 = new THREE.CylinderGeometry(1, 1, 2, 16);
var material03 = new THREE.MeshPhysicalMaterial({
    color: 0x006400,
    side: THREE.DoubleSide,
    transmission: 1,
    roughness: 0,
    ior: 1.5,
    thickness: 0.5
});

var mesh03 = new THREE.Mesh(geometry03, material03);
//scene.add(mesh03);
mesh03.position.set(0, 1.5, 1.5);
mesh03.rotation.z = Math.PI / 2;


var geometry04 = new THREE.CylinderGeometry(.8, .8, 3, 16);
var material04= new THREE.MeshBasicMaterial({
    color: 0xFFFFFFF,
    side: THREE.DoubleSide,
    
});

var mesh04 = new THREE.Mesh(geometry04, material04);
//scene.add(mesh04);
mesh04.position.set(0, 1.5, 1.5);
mesh04.rotation.z = Math.PI / 2;

// Plato hondo - parte exterior

var geometry05 = new THREE.CylinderGeometry(4, 3, 1, 32);
var material05 = new THREE.MeshBasicMaterial({
   color:0xFFFFFF, 
   side: THREE.DoubleSide
});

var mesh05 = new THREE.Mesh(geometry05, material05);
//scene.add(mesh05);
mesh05.position.set(0, 1, 0);

var geometry06 = new THREE.CylinderGeometry(3.5, 2.5, 0.9, 32);
var material06 = new THREE.MeshBasicMaterial({
    color: 0x4C090B, side: THREE.DoubleSide, 
});

var mesh06 = new THREE.Mesh(geometry06, material06);
//scene.add(mesh06);
mesh06.position.set(0, 1.2, 0);



const ESC4 =new THREE.Group();
ESC4.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06);
ESC4.position.set(x,y,z);

return ESC4;

}