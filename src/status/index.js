import React from "react";
import "./index.css";
import * as THREE from "three";

class Status3DComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // canvas , render 지정
    const width = 400;
    const height = 200;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    // camera 각도 조정
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 5);
    camera.position.z = 2;

    this.element.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa);

    const makeInstance = (geometry, color, x) => {
      const material = new THREE.MeshPhongMaterial({ color });

      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      cube.position.x = x;
      return cube;
    };

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cubes = [
      makeInstance(geometry, 0x44aa88, 0),
      makeInstance(geometry, 0x8844aa, -2),
      makeInstance(geometry, 0xaa8844, 2),
    ];

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.cubes = cubes;
    this.animate();
  }

  animate = () => {
    this.renderer.render(this.scene, this.camera);

    this.cubes.forEach((cube) => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    });

    requestAnimationFrame(this.animate);
  };

  render() {
    return <div ref={(el) => (this.element = el)} />;
  }
}

function StatusComponent() {
  return (
    <div>
      <div id="status-section">
        <div class="status-title">
          <span>AGV STATUS</span>
        </div>
        <Status3DComponent />
      </div>
      <div id="command-section">
        <div class="status-title">
          <span>COMMAND</span>
        </div>
      </div>
    </div>
  );
}

export default StatusComponent;
