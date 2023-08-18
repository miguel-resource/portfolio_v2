"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const ModelThree = () => {
  // load a model from asset add load to scene
  useEffect(() => {
    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    loader.load(
      "models/bmo/scene.gltf",
      function (gltf) {
        console.log("loaded", gltf);
        scene.add(gltf.scene);
        console.log("scene", scene);
      },
      undefined,
      function (error) {
        console.error(error);
        console.log("error");
      }
    );
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
        );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const element = document.getElementById("model");
    if (element) {
      element.appendChild(renderer.domElement);
    }
    camera.position.z = 5;
    camera.position.y = 1;
    camera.position.x = 1;
    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

    }
    animate();
  }, []);

  return (
    <>
      <div id="model" />
    </>
  );
};

export default ModelThree;
