import * as THREE from "../js/three.module.js";

export default function E12({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

//agua
var geometry02 = new THREE.CylinderGeometry(1.2, 0.5, 3, 11);
var material02 = new THREE.MeshBasicMaterial({
   color:0xFFFFFF,
   side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,1.5,0);
mesh02.castShadow = true;
mesh02.receiveShadow = true;

//vaso transparente
var geometry03 = new THREE.CylinderGeometry(1.7, 0.9, 3.4, 22);
var material03 = new THREE.MeshPhysicalMaterial({
   color:0xffff, side: THREE.DoubleSide, transmission:1,
   roughness:0, ior:1.5, thickness:0.5,
   side: THREE.DoubleSide
});

var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,1.5,0);
mesh03.castShadow = true;
mesh03.receiveShadow = true;

const ESC12 = new THREE.Group();
ESC12.add(mesh03,mesh02);
ESC12.position.set(x,y,z);

return ESC12;

}