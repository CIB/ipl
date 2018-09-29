let Stats = require('stats-js');
let THREE = require('three');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
        for (let z = 0; z < 1; z++) {
            let n = new THREE.Mesh(geometry, material);
            n.position.x += x*2;
            n.position.y += y*2;
            n.position.z += z*2;
            scene.add(n);
        }
    }
}

scene.add( cube );

camera.position.z = 5;

var stats = new Stats();
console.log(stats)
document.body.appendChild( stats.domElement );

function animate() {
	stats.begin();
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	stats.end();
}
animate();
