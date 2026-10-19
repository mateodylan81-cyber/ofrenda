import * as THREE from "../js/three.module.js";

export default function E13({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶


//tapete
var geometry02 = new THREE.PlaneGeometry(11,30);
var textura02 = new THREE.TextureLoader().load("imagenes/tapete.jpeg");

var material02 = new THREE.MeshLambertMaterial({
    map: textura02,
    side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,1.5,0);
mesh02.rotation.x = Math.PI / 2;

mesh02.receiveShadow = true;
mesh02.castShadow = true;


const ESC13 =new THREE.Group();
ESC13.add(mesh02);
ESC13.position.set(x,y,z);

return ESC13;

}