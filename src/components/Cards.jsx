import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/three';

const Card = ({ position, question, options, solution }) => {
  const [flipped, setFlipped] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // Card rotation animation
  const { rotation } = useSpring({
    rotation: flipped ? [0, Math.PI, 0] : [0, 0, 0],
    config: { mass: 5, tension: 400, friction: 80 }
  });

  const handleCardClick = () => {
    setFlipped(!flipped);  // Toggle flip on click
    setShowSolution(false); // Reset solution on flip
  };

  const handleDoubleClick = () => {
    setShowSolution(true);  // Show solution on double-tap
  };

  return (
    <a.mesh
      position={position}
      rotation={rotation}
      onClick={handleCardClick}
      onDoubleClick={handleDoubleClick}
    >
      {/* Card Front */}
      {!flipped && (
        <boxBufferGeometry args={[1.5, 2.5, 0.1]} attach="geometry" />
      )}

      {/* Card Back (Quiz Question and Options) */}
      {flipped && (
        <boxBufferGeometry args={[1.5, 2.5, 0.1]} attach="geometry" />
      )}

      {/* Material */}
      <meshStandardMaterial color={!flipped ? 'white' : 'lightblue'} />

      {/* Question or Solution Text */}
      {flipped && (
        <Html position={[0, 0, 0.1]}>
          {!showSolution ? (
            <div style={{ color: 'black', textAlign: 'center' }}>
              <h2>{question}</h2>
              {options.map((option, idx) => (
                <p key={idx}>{option}</p>
              ))}
            </div>
          ) : (
            <div style={{ color: 'green', textAlign: 'center' }}>
              <p>{solution}</p>
            </div>
          )}
        </Html>
      )}
    </a.mesh>
  );
};

export default Card;
