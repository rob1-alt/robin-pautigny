import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();

/* Vous devez télécharger votre propre modèle .gltf et le référencer ci-dessous.
   Si vous ne le voyez pas, le modèle peut être trop petit, essayez d'ajuster
   les valeurs d'échelle ci-dessous. */
let modelUrl = './golf_course.gltf'

loader.load( modelUrl, function ( gltf ) {

    console.log(gltf.scene);
    gltf.scene.scale.x = .4
    gltf.scene.scale.y = .4
    gltf.scene.scale.z = .4

    gltf.scene.rotation.x = 1
    gltf.scene.rotation.y = .4
    gltf.scene.rotation.z = 0

    scene.add( gltf.scene );

    window.addEventListener('scroll', onScroll);

    function onScroll() {
      const scrollY = window.scrollY;
      const rotationSpeed = 0.001;
      gltf.scene.rotation.x = scrollY * rotationSpeed;
      gltf.scene.rotation.y = scrollY * rotationSpeed;
    }
  
  }, undefined, function ( e ) {
    console.error( e );
  });

const light = new THREE.AmbientLight( 0xffffff ); // lumière blanche douce
light.intensity = 3;

scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

animate();
