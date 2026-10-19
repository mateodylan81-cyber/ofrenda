
import * as THREE from "../js/three.module.js";

export default function E7({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶



var geometry02 = new THREE.CylinderGeometry(0.6, 0.4, 3, 11);
var material02 = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh02);
mesh02.position.set(0, 1.5, 0);
mesh02.castShadow = true;
mesh02.receiveShadow = true;

//mecha
var flameGeometry = new THREE.ConeGeometry(0.2, 0.7, 16);
var flameMaterial = new THREE.MeshLambertMaterial({
    color: 0xffaa00,
    transparent: true,
    opacity: 0.9
});
var flame = new THREE.Mesh(flameGeometry, flameMaterial);
flame.position.set(0, 3.4, 0);
//scene.add(flame);


const ESC5 = new THREE.Group();
ESC5.add(mesh02, flame);
ESC5.position.set(x, y, z);

return ESC5;

}
