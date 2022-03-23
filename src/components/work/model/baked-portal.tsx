/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF, useTexture } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    立方体077: THREE.Mesh;
    立方体078: THREE.Mesh;
    立方体079: THREE.Mesh;
    立方体080: THREE.Mesh;
    立方体006: THREE.Mesh;
    立方体007: THREE.Mesh;
    立方体008: THREE.Mesh;
    立方体009: THREE.Mesh;
    立方体010: THREE.Mesh;
    立方体011: THREE.Mesh;
    立方体012: THREE.Mesh;
    立方体013: THREE.Mesh;
    立方体014: THREE.Mesh;
    立方体015: THREE.Mesh;
    立方体020: THREE.Mesh;
    立方体021: THREE.Mesh;
    立方体022: THREE.Mesh;
    立方体023: THREE.Mesh;
    立方体031: THREE.Mesh;
    立方体032: THREE.Mesh;
    立方体033: THREE.Mesh;
    立方体034: THREE.Mesh;
    立方体035: THREE.Mesh;
    立方体036: THREE.Mesh;
    平面: THREE.Mesh;
    円柱: THREE.Mesh;
    円柱001: THREE.Mesh;
    円柱002: THREE.Mesh;
    円柱003: THREE.Mesh;
    円柱004: THREE.Mesh;
    円柱005: THREE.Mesh;
    円柱006: THREE.Mesh;
    円柱007: THREE.Mesh;
    立方体024: THREE.Mesh;
    立方体025: THREE.Mesh;
    立方体026: THREE.Mesh;
    立方体027: THREE.Mesh;
    立方体028: THREE.Mesh;
    立方体029: THREE.Mesh;
    立方体030: THREE.Mesh;
    立方体001: THREE.Mesh;
    立方体002: THREE.Mesh;
    立方体003: THREE.Mesh;
    立方体004: THREE.Mesh;
    立方体005: THREE.Mesh;
    立方体038: THREE.Mesh;
    立方体039: THREE.Mesh;
    立方体040: THREE.Mesh;
    立方体041: THREE.Mesh;
    立方体042: THREE.Mesh;
    立方体043: THREE.Mesh;
    立方体044: THREE.Mesh;
    立方体045: THREE.Mesh;
    立方体046: THREE.Mesh;
    立方体047: THREE.Mesh;
    立方体048: THREE.Mesh;
    立方体049: THREE.Mesh;
    立方体050: THREE.Mesh;
    立方体051: THREE.Mesh;
    立方体053: THREE.Mesh;
    立方体054: THREE.Mesh;
    立方体055: THREE.Mesh;
    立方体056: THREE.Mesh;
    立方体057: THREE.Mesh;
    立方体058: THREE.Mesh;
    立方体059: THREE.Mesh;
    立方体060: THREE.Mesh;
    立方体061: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    poleLightB: THREE.Mesh;
    portalLight: THREE.Mesh;
    poleLightA: THREE.Mesh;
  };
  materials: {
    wood: THREE.MeshStandardMaterial;
    grass: THREE.MeshStandardMaterial;
    マテリアル: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
    rock: THREE.MeshStandardMaterial;
    poleLightEmission: THREE.MeshStandardMaterial;
    ['マテリアル.001']: THREE.MeshStandardMaterial;
  };
};

export default function BakedPortal({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF(
    'https://res.cloudinary.com/dso4npatn/image/upload/v1647845930/portal_efi1pe.glb',
  ) as GLTFResult;
  const bakedTexture = useTexture(
    'https://res.cloudinary.com/dso4npatn/image/upload/v1647845915/portal-baked_dnedas.jpg',
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <meshBasicMaterial map={bakedTexture} />
      <mesh
        geometry={nodes.立方体077.geometry}
        position={[-0.6, 0.28, 1.87]}
        rotation={[0, 0.15, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体078.geometry}
        position={[-0.7, 0.28, 1.2]}
        rotation={[0, 0.15, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体079.geometry}
        position={[-0.6, 0.43, 1.52]}
        rotation={[Math.PI / 2, 0, -0.15]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体080.geometry}
        position={[-0.6, 0.21, 1.52]}
        rotation={[Math.PI / 2, 0, -0.15]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体006.geometry}
        position={[0.91, 0.28, 1.2]}
        rotation={[-Math.PI, 0.11, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体007.geometry}
        position={[0.84, 0.28, 1.87]}
        rotation={[-Math.PI, 0.11, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体008.geometry}
        position={[0.82, 0.43, 1.54]}
        rotation={[Math.PI / 2, 0, -3.04]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体009.geometry}
        position={[0.82, 0.21, 1.54]}
        rotation={[Math.PI / 2, 0, -3.04]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体010.geometry}
        position={[0.78, 0.28, -1.08]}
        rotation={[-Math.PI, -0.04, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体011.geometry}
        position={[0.81, 0.29, -0.41]}
        rotation={[-Math.PI, -0.04, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体012.geometry}
        position={[0.74, 0.43, -0.73]}
        rotation={[Math.PI / 2, 0, 3.1]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体013.geometry}
        position={[0.74, 0.21, -0.73]}
        rotation={[Math.PI / 2, 0, 3.1]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体014.geometry}
        position={[0.85, 0.28, -0.04]}
        rotation={[-Math.PI, -0.03, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体015.geometry}
        position={[0.87, 0.28, 0.63]}
        rotation={[-Math.PI, -0.03, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体020.geometry}
        position={[0.81, 0.43, 0.31]}
        rotation={[Math.PI / 2, 0, 3.11]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体021.geometry}
        position={[0.81, 0.21, 0.31]}
        rotation={[Math.PI / 2, 0, 3.11]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体022.geometry}
        position={[-0.72, 0.28, -0.37]}
        rotation={[0, 0.16, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体023.geometry}
        position={[-0.83, 0.28, -1.03]}
        rotation={[0, 0.16, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体031.geometry}
        position={[-0.73, 0.43, -0.72]}
        rotation={[Math.PI / 2, 0, -0.16]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体032.geometry}
        position={[-0.73, 0.21, -0.72]}
        rotation={[Math.PI / 2, 0, -0.16]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体033.geometry}
        position={[-0.8, 0.29, 0.68]}
        rotation={[0, 0.02, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体034.geometry}
        position={[-0.82, 0.28, 0.01]}
        rotation={[0, 0.02, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体035.geometry}
        position={[-0.76, 0.43, 0.33]}
        rotation={[Math.PI / 2, 0, -0.02]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体036.geometry}
        position={[-0.76, 0.21, 0.33]}
        rotation={[Math.PI / 2, 0, -0.02]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.平面.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.円柱.geometry} position={[1.27, 0.12, 0.87]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.円柱001.geometry} position={[1.64, 0.09, 0.25]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.円柱002.geometry} position={[1.82, 0.06, 1.41]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.円柱003.geometry} position={[1.21, 0.1, 1.59]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.円柱004.geometry}
        position={[1.26, -0.01, 1.32]}
        rotation={[0.53, 0, -Math.PI / 2]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.円柱005.geometry}
        position={[1.72, 0.11, 0.75]}
        rotation={[0, 0.1, 1.05]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.円柱006.geometry}
        position={[1.64, -0.01, 0.98]}
        rotation={[2.57, -0.59, 1.23]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.円柱007.geometry}
        position={[1.71, 0, 0.67]}
        rotation={[Math.PI / 2, 1.05, Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体024.geometry}
        position={[1.26, 0.31, 0.94]}
        rotation={[Math.PI / 2, -1.32, Math.PI / 2]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体025.geometry}
        position={[1.43, 0.47, 0.94]}
        rotation={[Math.PI, 0, 2.9]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体026.geometry} position={[1.11, 0.24, 0.23]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体027.geometry} position={[1.1, 1.18, 0.22]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体028.geometry}
        position={[0.79, 1.76, 0.22]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体029.geometry} position={[0.59, 1.64, 0.22]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体030.geometry} position={[0.58, 1.36, 0.22]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体001.geometry}
        position={[-1.07, 0.25, 0.33]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体002.geometry}
        position={[-1.07, 1.19, 0.33]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体003.geometry}
        position={[-0.76, 1.76, 0.33]}
        rotation={[-Math.PI, 0, -1.57]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体004.geometry}
        position={[-0.55, 1.65, 0.33]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体005.geometry}
        position={[-0.55, 1.37, 0.33]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体038.geometry}
        position={[-1.5, 0.27, -1.61]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.55}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体039.geometry}
        position={[-1.61, 0.28, -0.01]}
        rotation={[-Math.PI, -0.21, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体040.geometry}
        position={[1.69, 0.33, -0.74]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体041.geometry}
        position={[1.53, 0.46, -1.54]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体042.geometry}
        position={[-1.36, 0.17, 1.48]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体043.geometry}
        position={[-1.61, 0.16, 0.85]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体044.geometry}
        position={[1.84, 0.15, -0.14]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体045.geometry}
        position={[-1.06, 0.13, 0.93]}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体046.geometry} position={[1.1, 0.33, -1.15]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体047.geometry}
        position={[-1.17, 0.17, -0.79]}
        rotation={[1.88, -0.1, 1.26]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体048.geometry}
        position={[-1.1, 0.24, -0.16]}
        rotation={[-Math.PI, 0.7, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体049.geometry}
        position={[-1.13, 0.17, -1.2]}
        rotation={[0, Math.PI / 6, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体050.geometry}
        position={[-1.69, 0.23, -0.79]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体051.geometry}
        position={[1.23, 0.25, -0.38]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体053.geometry}
        position={[0, 1.01, -1.62]}
        rotation={[0, 0, -0.66]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体054.geometry}
        position={[0, 1.01, -1.62]}
        rotation={[0, 0, -1.28]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体055.geometry} position={[0, 1.01, -1.62]} rotation={[0, 0, -1.9]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.立方体056.geometry}
        position={[0, 1.01, -1.62]}
        rotation={[0, 0, -2.52]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体057.geometry} position={[0, 1.01, -1.62]} rotation={[0, 0, 3.14]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体058.geometry} position={[0, 1.01, -1.62]} rotation={[0, 0, 2.52]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体059.geometry} position={[0, 1.01, -1.62]} rotation={[0, 0, 1.9]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体060.geometry} position={[0, 1.01, -1.62]} rotation={[0, 0, 1.28]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.立方体061.geometry} position={[0, 1.04, -1.62]} rotation={[0, 0, 0.66]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Cube.geometry} position={[0.01, 0.23, -1.58]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Cube001.geometry} position={[-0.05, 0.15, -1.23]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Cube002.geometry} position={[-0.05, 0.07, -0.96]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.poleLightB.geometry} position={[0.58, 1.36, 0.22]}>
        <meshBasicMaterial color={new THREE.Color(0xffd700)} />
      </mesh>
      <mesh
        geometry={nodes.portalLight.geometry}
        position={[0, 1.01, -1.71]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial color={new THREE.Color(0x66d9ff)} />
      </mesh>
      <mesh
        geometry={nodes.poleLightA.geometry}
        position={[-0.55, 1.37, 0.33]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <meshBasicMaterial color={new THREE.Color(0xffd700)} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/portal.glb');