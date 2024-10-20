// Timeline.js (Updated)
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

const milestonesData = [
  { date: 'February 2024 ', event: 'Project Proposal' },
  { date: 'May 2024 ', event: 'Progress Presentation I' },
  { date: 'June 2024 ', event: 'Research Paper' },
  { date: 'September 2024', event: 'Progress Presentation II' },
  { date: 'August 2024', event: 'Website Assessment' },
  { date: 'October 2024', event: 'Logbook' },
  { date: 'October 2024', event: 'Final Report' },
  { date: 'November 2024', event: 'Final Presentation & Viva' },
];

function Milestone({ position, data }) {
  const ref = useRef();

  useEffect(() => {
    // Animate position using GSAP
    gsap.fromTo(
      ref.current.position,
      { y: position[1] + 5 }, // Start 5 units higher
      { y: position[1], duration: 1.5, ease: 'bounce.out' }
    );
  }, [position]);

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color='skyblue' />
      <Html position={[0, 0.5, 0]}>
        <div style={{ background: 'white', padding: '5px', borderRadius: '5px' }}>
          <p style={{ fontWeight: 'bold' }}>{data.date}</p>
          <p>{data.event}</p>
        </div>
      </Html>
    </mesh>
  );
}

function Timeline() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {milestonesData.map((milestone, index) => (
        <Milestone
          key={index}
          position={[0, index * -1.5, 0]} // Position each milestone along the Y-axis
          data={milestone}
        />
      ))}

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

export default Timeline;
