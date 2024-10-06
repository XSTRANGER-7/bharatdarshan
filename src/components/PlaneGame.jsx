import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const PlaneGame = () => {
  const mountRef = useRef(null);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the primary gas in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Nitrogen",
    },
    {
      question: "What layer of the atmosphere do we live in?",
      options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
      answer: "Troposphere",
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: "Carbon Dioxide",
    },
  ];

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a plane (for demonstration, you can use a 3D model)
    const geometry = new THREE.BoxGeometry(1, 0.5, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Clean up
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  useEffect(() => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(randomQuestion.question);
    setOptions(randomQuestion.options);
  }, []);

  const handleAnswer = (option) => {
    if (option === questions.find(q => q.question === question).answer) {
      setScore(score + 1);
      alert('Correct!');
    } else {
      alert('Wrong answer!');
    }

    // Load the next question
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(randomQuestion.question);
    setOptions(randomQuestion.options);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4">
        <h1 className="text-3xl">Score: {score}</h1>
        <p className="text-lg">{question}</p>
        <div className="flex space-x-4 mt-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div ref={mountRef} className="w-full h-96" />
    </div>
  );
};

export default PlaneGame;
