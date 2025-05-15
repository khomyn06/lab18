import React from "react";
import "./MyFuture.css"; 

const MyFuture = () => (
  <div className="future-container">
    <h2>Мій розвиток</h2>

    <h3>План на майбутнє</h3>
    <ol>
      <li>Поглибити знання React, TypeScript</li>
      <li>Навчитися працювати з бекендом (Node.js, Express)</li>
      <li>Отримати роботу фронтенд-розробника</li>
    </ol>

    <blockquote>
      “Мрій — ніби житимеш вічно. Працюй — ніби помреш сьогодні.”
    </blockquote>

    <p className="dream-job">
      Моя робота мрії — бути частиною креативної команди, що створює корисні та красиві веб-додатки.
    </p>

    <div className="future-image-container">
      <img 
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
        alt="motivation" 
        className="future-image" 
      />
      <p className="image-caption">"Keep pushing forward 🚀"</p>
    </div>
  </div>
);

export default MyFuture;
