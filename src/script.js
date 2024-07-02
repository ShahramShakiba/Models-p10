import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/Addons.js';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const gui = new GUI({ title: 'Physics' });

let width = window.innerWidth;
let height = window.innerHeight;

//=================== Loader ==========================
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./draco/');
// The DracoLoader will be able to use a faster version with WebAssembly and the Worker because the file is separated

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

let mixer = null;
gltfLoader.load('./models/Fox/glTF/Fox.gltf', (gltf) => {
  /* const children = [...gltf.scene.children];
  for (const child of children) {
    scene.add(child);
  } */

  // OR

  console.log(gltf.animations);

  mixer = new THREE.AnimationMixer(gltf.scene);
  const action = mixer.clipAction(gltf.animations[1]);
  action.play();

  gltf.scene.scale.set(0.025, 0.025, 0.025);
  scene.add(gltf.scene);
});

//=================== Floor ==========================
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({
    color: '#c1e499',
    metalness: 0.8,
    roughness: 0.8,
  })
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

//=================== Lights ========================
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

//================= Camera ==========================
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.set(4, 3, 4);
scene.add(camera);

//============== Orbit Controls =====================
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.75, 0);
controls.enableDamping = true;

//================= Renderer ========================
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//=================== Animate ========================
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  //====== Update Animation
  if (mixer !== null) {
    mixer.update(deltaTime);
  }

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
