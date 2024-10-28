import React from 'react';
import './cv.css'; // Add custom styling here
import profileImage from './img/IMG_8523.jpeg'; // Adjust the path as necessary

const CV = () => {
  return (
    <div className="cv-section">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <h1>Сугаржав Ган Эрдэнэ</h1>
      <hr className="separator"/>
      <p>График дизайнер</p>
      <p><strong>Утас:</strong> 94553002</p>
      <p><strong>И-мэйл:</strong> annapinkudesu6@gmail.com</p>
      <p><strong>Байршил:</strong> Улаанбаатар хот, Баянгол дүүрэг</p>
      <p><strong>Төрсөн огноо:</strong> 2005-02-01</p>
      <p><strong>Мэргэжил:</strong> График дизайнер</p>

      <hr className="separator"/>

      <section className="education">
        <h2>Боловсрол</h2>
        <p><strong>Монгол-Солонгосын Политехник Коллеж</strong> (2020 - 2023)</p>
        <p>График дизайнер, үнэлгээ: 3.6</p>
      </section>

      <hr className="separator"/>

      <section className="experience">
        <h2>Ажлын Туршлага</h2>
        <p><strong>Ochir Press</strong> (2023/1 - ) - График дизайнер</p>
        <p><strong>К12</strong> (2022/5/1 - 2022/12/25) - Бүтэн цагийн ажилтан</p>
      </section>

      <hr className="separator"/>

      <section className="skills">
        <h2>Ур Чадвар</h2>
        <ul>
          <li><strong>Англи хэл:</strong> 40%</li>
           <li><strong>Франц хэл:</strong> 50%</li>
          <li><strong>Word:</strong> 100%</li>
          <li><strong>Excel:</strong> 100%</li>
          <li><strong>HTML/CSS:</strong> 100%</li>
          <li><strong>InDesign:</strong> 80%</li>
          <li><strong>Figma:</strong> 80%</li>
          <li><strong>JavaScript:</strong> 80%</li>
          <li><strong>Photoshop:</strong> 70%</li>
          <li><strong>React:</strong> 70%</li>
        </ul>
      </section>

      <hr className="separator"/>

      <section className="additional-skills">
        <h2>Нэмэлт Ур Чадвар</h2>
        <ul>
          <li><strong>Кибер спорт:</strong> Мэргэжлийн</li>
          <li><strong>Хөл бөмбөг:</strong> Ахисан түвшин</li>
          <li><strong>Холимог тулаан:</strong> Ахисан түвшин</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
