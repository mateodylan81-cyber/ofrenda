import * as THREE from "../js/three.module.js";

export default function E3({x,y,z}){


//OBJETOS  ✏️✏️✏️✏️  🪶

var geometry02 = new THREE.CylinderGeometry(1, 0.7, 3, 11);
var material02 = new THREE.MeshLambertMaterial({
    color:0xFAFF80,
    side: THREE.DoubleSide

});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(-3,1.5,3);
mesh02.castShadow = true;
mesh02.receiveShadow = true;

//vaso transparente
var geometry03 = new THREE.CylinderGeometry(1.5, 1, 3.4, 22);
var material03 = new THREE.MeshPhysicalMaterial({ 
    color:0xFFF9CF, side: THREE.DoubleSide, transmission:1, 
    roughness:0, ior:1.5, thickness:0.5

});

var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(-3,1.5,3);
mesh03.castShadow = true;
mesh03.receiveShadow = true;

//botella 
var geometry04 = new THREE.CylinderGeometry(0.7, 0.7, 3, 11);
var material04 = new THREE.MeshLambertMaterial({
    color:0xFAFF80,
    side: THREE.DoubleSide

});

var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,2.5,0);
mesh04.scale.set(4, 1.4, 1.5);
mesh04.castShadow = true;
mesh04.receiveShadow = true;
//
var geometry05 = new THREE.CylinderGeometry(0.7, 0.7, 3, 11);
var material05 = new THREE.MeshPhysicalMaterial({ 
    color:0xFFF9CF, side: THREE.DoubleSide, transmission:1, 
    roughness:0, ior:1.5, thickness:0.5
});
var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(0,2.5,0);
mesh05.scale.set(4.5, 1.5, 2);
mesh05.castShadow = true;
mesh05.receiveShadow = true;

//
var geometry06 = new THREE.SphereGeometry(3, 16, 16);
var material06 = new THREE.MeshLambertMaterial({
    color: 0xFAFF80,
    side: THREE.DoubleSide
});

var mesh06 = new THREE.Mesh(geometry06, material06);
//scene.add(mesh06);
mesh06.position.set(0, 4.5, 0);
mesh06.scale.set(.9, 0.5, 0.4);
mesh06.castShadow = true;
mesh06.receiveShadow = true;
//
var geometry07 = new THREE.SphereGeometry(3, 16, 16);
var material07 = new THREE.MeshPhysicalMaterial({ 
    color:0xFFF9CF, side: THREE.DoubleSide, transmission:1, 
    roughness:0, ior:1.5, thickness:0.5
});

var mesh07 = new THREE.Mesh(geometry07, material07);
//scene.add(mesh07);
mesh07.position.set(0, 4.5, 0);
mesh07.scale.set(1, 0.5, 0.4);
mesh07.castShadow = true;
mesh07.receiveShadow = true;

//tapa
var geometry08 = new THREE.CylinderGeometry(0.7, 0.7, 3, 11);
var material08 = new THREE.MeshPhysicalMaterial({ 
    color:0xFFF9CF, side: THREE.DoubleSide, transmission:1, 
    roughness:0, ior:1.5, thickness:0.5
});

var mesh08 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh08);
mesh08.position.set(0,5.7,0);
mesh08.castShadow = true;
mesh08.receiveShadow = true;


var geometry09 = new THREE.CylinderGeometry(0.8, 0.8, .5, 11);
var material09 = new THREE.MeshLambertMaterial({ 
    color:0x8B4513
});

var mesh09 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh09);
mesh09.position.set(0,7,0);
mesh09.castShadow = true;
mesh09.receiveShadow = true;



var geometry10 = new THREE.PlaneGeometry(4, 3.5);
var textura10 = new THREE.TextureLoader().load("imagenes/ton.png");

var material10 = new THREE.MeshLambertMaterial({
    map: textura10,
    side: THREE.DoubleSide
});

var mesh10 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh10);
mesh10.position.set(0,2.5,1.4);
mesh10.castShadow = true;
mesh10.receiveShadow = true;





const ESC3 =new THREE.Group();
ESC3.add(mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10);
ESC3.position.set(x,y,z);

return ESC3;

}