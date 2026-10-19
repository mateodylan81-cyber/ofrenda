import * as THREE from "../js/three.module.js";

export default function E11({x,y,z}){

//OBJETOS  ✏️✏️✏️✏️  🪶

    var geometry01= new THREE.CylinderGeometry(4, 3, 1, 32);
    var material01 = new THREE.MeshPhysicalMaterial({
        color: 0xFFF9CF, 
        side: THREE.DoubleSide, 
        transmission: 1,
        roughness: 0, 
        ior: 1.5, 
        thickness: 0.5 
    });
    var mesh01 = new THREE.Mesh(geometry01, material01);
    //scene.add(mesh01);
    mesh01.position.set(0, 3, 0);
    mesh01.castShadow = true;
    mesh01.receiveShadow = true;

    // Plato hondo)
    var geometry02 = new THREE.CylinderGeometry(3.5, 2.5, 0.9, 32);
    var material02 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF, 
        side: THREE.DoubleSide
    });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    //scene.add(mesh02);
    mesh02.position.set(0, 3, 0);
    mesh02.castShadow = true;
    mesh02.receiveShadow = true;
    
const ESC11 =new THREE.Group();
ESC11.add(mesh01,mesh02);
ESC11.position.set(x,y,z);

return ESC11;

}