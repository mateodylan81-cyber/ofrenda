import * as THREE from "../js/three.module.js";

export default function E14({x,y,z}){



//OBJETOS  ✏️✏️✏️✏️  🪶


// PETALO 1
var geometry01 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material01 = new THREE.MeshBasicMaterial({
    color: 0x41062E,
    side: THREE.DoubleSide
});

var mesh01 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh01);
mesh01.position.set(0, 4, 1);
mesh01.scale.set(3,1,1);
mesh01.rotation.y = Math.PI / 2;

// PETALO 2
var geometry02 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material02 = new THREE.MeshBasicMaterial({
    color: 0x41062E,
    side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh02);
mesh02.position.set(0, 4, -1);
mesh02.scale.set(3,1,1);
mesh02.rotation.y = Math.PI / -2;
// PETALO 3
var geometry03 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material03 = new THREE.MeshBasicMaterial({
    color: 0x41062E,
    side: THREE.DoubleSide
});

var mesh03 = new THREE.Mesh(geometry03, material03);
//scene.add(mesh03);
mesh03.position.set(1, 4, 0);
mesh03.scale.set(3,1,1);
// PETALO 4
var geometry04 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material04 = new THREE.MeshBasicMaterial({
    color: 0x41062E,
    side: THREE.DoubleSide
});

var mesh04 = new THREE.Mesh(geometry04, material04);
//scene.add(mesh04);
mesh04.position.set(-1, 4, 0);
mesh04.scale.set(3,1,1);


//petalo 6
var geometry06 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material06 = new THREE.MeshBasicMaterial({
    color: 0x950F6A
,
    side: THREE.DoubleSide
});

var mesh06 = new THREE.Mesh(geometry06, material06);
//scene.add(mesh06);
mesh06.position.set(-1, 4, 1);
mesh06.scale.set(3,1.2,1);
mesh06.rotation.y = Math.PI / 4;
//petalo 7
var geometry07 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material07 = new THREE.MeshBasicMaterial({
    color: 0x950F6A
,
    side: THREE.DoubleSide
});

var mesh07 = new THREE.Mesh(geometry07, material07);
//scene.add(mesh07);
mesh07.position.set(-1, 4, -1);
mesh07.scale.set(3,1.2,1);
mesh07.rotation.y = Math.PI / -4;

//petalo 8
var geometry08 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material08 = new THREE.MeshBasicMaterial({
    color: 0x950F6A
,
    side: THREE.DoubleSide
});

var mesh08 = new THREE.Mesh(geometry08, material08);
//scene.add(mesh08);
mesh08.position.set(1, 4, 1);
mesh08.scale.set(3,1.2,1);
mesh08.rotation.y = Math.PI / -4;

//petalo 9

var geometry09 = new THREE.CylinderGeometry(0.5, 0.5, .5, 16);
var material09 = new THREE.MeshBasicMaterial({
    color: 0x950F6A
,
    side: THREE.DoubleSide
});

var mesh09 = new THREE.Mesh(geometry09, material09);
//scene.add(mesh09);
mesh09.position.set(1, 4, -1);
mesh09.scale.set(3, 1.2, 1);
mesh09.rotation.y = Math.PI / 4;

const ESC14 =new THREE.Group();
ESC14.add(mesh01,mesh02,mesh03,mesh04,mesh06,
    mesh07,mesh08,mesh09
);
ESC14.position.set(x,y,z);

return ESC14;

}