import React from 'react';

const About = () => {
  return (
    <main id="about-section" className="mt-8 px-8 py-28 text-center"> {/* Added text-center to center text */}
      <h2 className="mt-6 text-gray-700 font-bold dark:text-gray-200 text-2xl">Обо мне</h2>

      <p className="mt-2 leading-normal text-gray-600 dark:text-gray-300 text-xl ">
      Привет! Меня зовут Марат, и я репетитор по Scratch для детей. 
      Я работаю в сфере образования уже более 10 лет, в основном обучая английскому языку в странах Азии.  
      Около трёх лет назад я начал заниматься программированием, и сразу появилась мысль — почему бы не поделиться этим увлечением с детьми? 
      Год назад я стал сооснователем школы программирования в Ханое, Вьетнам.
      </p>

      <div className="flex justify-center my-10"> {/* Centering the iframe */}
        <iframe 
          className="w-full max-w-screen-md h-64 md:h-80 rounded-lg"  // Width set to 2/3
          src="https://www.youtube.com/embed/r1IT6aAPYUE" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
      
     
    </main>
  );
};

export default About;
