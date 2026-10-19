import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){


//OBJETOS  ✏️✏️✏️✏️  🪶

var geometry03 = new THREE.SphereGeometry(9, 30, 32);
var material03 = new THREE.MeshBasicMaterial({
    color: 0xFFFfff, 
    side: THREE.DoubleSide
});

var mesh03 = new THREE.Mesh(geometry03, material03);
//scene.add(mesh03);
mesh03.position.set(0, 26, 0);

//2
var geometry01 =new THREE.BoxGeometry(12,6,4);
var material01 =new THREE.MeshBasicMaterial({
    color:0xFFffff,
    side: THREE.DoubleSide

});

var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,18,0);


//3
var geometry02 = new THREE.CylinderGeometry(2, 2, 9, 11);
var material02 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide

});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,5,0);
//4
var geometry04 = new THREE.CylinderGeometry(2, 2, 2, 11);
var material04 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide

});

var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,12,0);

//5
var geometry05 = new THREE.CylinderGeometry(1, 1, 18, 16);
var material05= new THREE.MeshBasicMaterial({
    color: 0xFFFFFFF,
    side: THREE.DoubleSide,
    
});

var mesh05 = new THREE.Mesh(geometry05, material05);
//scene.add(mesh05);
mesh05.position.set(0, 9, 0);
mesh05.rotation.z = Math.PI / 2;

//6
var geometry06 = new THREE.CylinderGeometry(1, 1, 13, 16);
var material06= new THREE.MeshBasicMaterial({
    color: 0xFFFFFFF,
    side: THREE.DoubleSide,
    
});

var mesh06 = new THREE.Mesh(geometry06, material06);
//scene.add(mesh06);
mesh06.position.set(0, 6, 0);
mesh06.rotation.z = Math.PI / 2;

//7
var geometry07 = new THREE.CylinderGeometry(1, 1, 9, 16);
var material07= new THREE.MeshBasicMaterial({
    color: 0xFFFFFFF,
    side: THREE.DoubleSide,
    
});

var mesh07 = new THREE.Mesh(geometry07, material07);
//scene.add(mesh07);
mesh07.position.set(0, 3, 0);
mesh07.rotation.z = Math.PI / 2;

//8 
var geometry08 = new THREE.CylinderGeometry(2, 2, 2, 16);
var material08= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh08 = new THREE.Mesh(geometry08, material08);
//scene.add(mesh08);
mesh08.position.set(-2, 26, 8);
mesh08.rotation.x = Math.PI / 2;


var geometry09 = new THREE.CylinderGeometry(2, 2, 2.5, 16);
var material09= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh09 = new THREE.Mesh(geometry09, material09);
//scene.add(mesh09);
mesh09.position.set(-2, 25, 8);
mesh09.rotation.x = Math.PI / 2;


//10 ojo der
var geometry10 = new THREE.CylinderGeometry(2, 2, 2, 16);
var material10= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh10 = new THREE.Mesh(geometry10, material10);
//scene.add(mesh10);
mesh10.position.set(2.3, 26, 8);
mesh10.rotation.x = Math.PI / 2;


var geometry11 = new THREE.CylinderGeometry(2, 2, 2.5, 16);
var material11= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh11 = new THREE.Mesh(geometry11, material11);
//scene.add(mesh11);
mesh11.position.set(2.3, 25, 8);
mesh11.rotation.x = Math.PI / 2;

//nariz
var geometry12 = new THREE.CylinderGeometry(0.6, 0.6, 2.5, 16);
var material12= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh12 = new THREE.Mesh(geometry12, material12);
//scene.add(mesh12);
mesh12.position.set(0, 22.4, 7.2);
mesh12.rotation.x = Math.PI / 2;
//
var geometry13 = new THREE.CylinderGeometry(0.7, 0.7, 2.5, 16);
var material13= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh13 = new THREE.Mesh(geometry13, material13);
//scene.add(mesh13);
mesh13.position.set(-0.6, 21.7, 7);
mesh13.rotation.x = Math.PI / 2;
//
var geometry20 = new THREE.CylinderGeometry(.6, 0.6, 2.5, 16);
var material20= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh20 = new THREE.Mesh(geometry20, material20);
//scene.add(mesh20);
mesh20.position.set(0.6, 21.7, 7.2);
mesh20.rotation.x = Math.PI / 2;


//dientes
var geometry21 = new THREE.CylinderGeometry(0.3, 0.3, 4, 16);
var material21= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh21 = new THREE.Mesh(geometry21, material21);
//scene.add(mesh21);
mesh21.position.set(0, 17, 2.4);
//
var geometry14 = new THREE.CylinderGeometry(0.3, 0.3, 4, 16);
var material14= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh14 = new THREE.Mesh(geometry14, material14);
//scene.add(mesh14);
mesh14.position.set(2, 17, 2.4);
//
var geometry15 = new THREE.CylinderGeometry(0.3, 0.3, 4, 16);
var material15= new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    
});

var mesh15 = new THREE.Mesh(geometry15, material15);
//scene.add(mesh15);
mesh15.position.set(-2, 17, 2.4);

//mesa
var geometry16 = new THREE.CylinderGeometry(18, 18, 3, 16);

var textura16 = new THREE.TextureLoader().load("imagenes/madera.jpg");

var material16 = new THREE.MeshLambertMaterial({
    map: textura16,
    side: THREE.DoubleSide
});

var mesh16 = new THREE.Mesh(geometry16, material16);
mesh16.castShadow = true;
mesh16.receiveShadow = true;

var mesh16 = new THREE.Mesh(geometry16, material16);

//scene.add(mesh16);
mesh16.position.set(0, 0, 6);

//ojos flama
var flameGeometry18 = new THREE.ConeGeometry(0.9, 1, 16);
var flameMaterial18 = new THREE.MeshBasicMaterial({
    color: 0xffa500,
    transparent: true,
    opacity: 0.9
});
var mesh18 = new THREE.Mesh(flameGeometry18, flameMaterial18);
mesh18.position.set(-2, 24, 9);
//scene.add(mesh18);
mesh18.rotation.x = Math.PI / 4;

var flameGeometry19 = new THREE.ConeGeometry(0.9, 1, 16);
var flameMaterial19 = new THREE.MeshBasicMaterial({
    color: 0xffa500,
    transparent: true,
    opacity: 0.9
});
var mesh19 = new THREE.Mesh(flameGeometry19, flameMaterial19);
mesh19.position.set(2.2, 24, 9);
//scene.add(mesh19);
mesh19.rotation.x = Math.PI / 4;

const ESC01 =new THREE.Group();
ESC01.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,
    mesh12,mesh13,mesh14,mesh15,mesh16,mesh18,mesh19,mesh20,mesh21);
ESC01.position.set(x,y,z);

return ESC01;


}
