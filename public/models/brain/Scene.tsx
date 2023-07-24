/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 -T -t scene.gltf --shadows
Author: Versal (https://sketchfab.com/versal)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/brain-areas-d64608a3978b47d8a39c5a15795ca8c4
Title: Brain Areas
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Brain_Part_01_BRAIN_TEXTURE_blinn2_0: THREE.Mesh
    Brain_Part_03_BRAIN_TEXTURE_blinn2_0: THREE.Mesh
  }
  materials: {
    BRAIN_TEXTURE_blinn2: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Brain_Part_01_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
      <mesh castShadow receiveShadow geometry={nodes.Brain_Part_03_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
