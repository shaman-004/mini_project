import React from 'react';
import Navbar from '@/app/Components/Navbar';

const Home = () => {
  return (
    <div className="bg-blue-500 h-screen text-white">
      <Navbar />
      <div className="text-center justify-center max-w-2xl mx-auto p-4 pt-24">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight text-yellow-300">
          Welcome to Comment Analyzer
        </h1>
        <p className="text-lg leading-relaxed text-justify">
          Unleash the power of conversation with Comment Analyzer. Harnessing advanced sentiment analysis, toxicity detection, and keyword extraction, our tool dives deep into comments, unveiling emotional tones, identifying potential harm, and highlighting core discussion topics. With an intuitive interface and cutting-edge machine learning, empower yourself to curate online spaces that foster respect and positivity. Whether you're deciphering sentiments, spotting toxicity, or elevating content moderation, Comment Analyzer is your all-in-one solution for cultivating meaningful online dialogues.
        </p>
      </div>
      <footer className="text-center text-gray-300 mt-8 ">
        © 2024 Comment Analyzer. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
