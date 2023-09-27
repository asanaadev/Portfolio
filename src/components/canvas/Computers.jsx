import React, { useState, Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Loader } from '../Loader'
import { useSelector, useDispatch } from 'react-redux'
import { mobile } from '../../store/features/computer/computerSlice'

const Computers = ({ isMobile }) => {

  // console.log(isMobile);


  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={2.5} />
      <spotLight
        position={[-55, 57, 10]}
        angle={0.12}
        penumbra={1}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.37 : 0.46}
        position={[0, -2, -1.11]}
        rotation={[0, -0.2, -0.13]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const dispatch = useDispatch()
  const { isMobile } = useSelector((state) => state.computer)
  if (isMobile === true) {
    console.log("The function isMobile is work!");
  } else {
    console.log("The function isMobile is turn-offed!");
  }

  const mobileHandler = (e) => {
    dispatch(mobile(e))
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 665px)')
    mobileHandler(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      mobileHandler(event.matches)
    }

    mediaQuery.addEventListener('change',
      handleMediaQueryChange
    )
    return () => {
      mediaQuery.removeEventListener('change',
        handleMediaQueryChange
      )
    }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas >
  )
}

export default ComputersCanvas
