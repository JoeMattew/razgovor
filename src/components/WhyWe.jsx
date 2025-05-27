import React from 'react';
import whywe1 from '../assets/whywe1.jpg';
import whywe2 from '../assets/whywe2.jpg';
import whywe3 from '../assets/whywe3.jpg';

const WhyWe = () => {
  return (
    <div id="whywe-section" className="flex justify-center items-center min-h-screen px-4 py-28">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-center text-2xl font-bold mb-8">Почему мне доверяют ученики</h2>
        <p className="mt-2 leading-normal text-gray-600 dark:text-gray-300 text-xl">
          Мой подход — это не просто уроки, а путь к свободному и уверенному общению на английском.
          Каждый ученик для меня — это отдельная история, и я подбираю подход, который работает именно для вас.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          {/* Card 1 */}
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="relative overflow-hidden bg-white bg-clip-border rounded-t-xl h-40">
              <img
                src={whywe1}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-center leading-relaxed">
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Опыт</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              За 10+ лет преподавания я работал с людьми из разных стран и возрастов — от подростков до бизнесменов. 
              Знаю, как объяснить сложное простым языком и сделать урок живым и интересным.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="relative overflow-hidden bg-white bg-clip-border rounded-t-xl h-40">
              <img
                src={whywe2}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-center leading-relaxed">
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Почему я этим занимаюсь</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Я сам проходил путь изучения языков и понимаю, какие трудности могут быть. 
              Мне нравится помогать людям преодолевать языковой барьер и видеть, как у них появляется уверенность в общении.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="relative overflow-hidden bg-white bg-clip-border rounded-t-xl h-40">
              <img
                src={whywe3}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-center leading-relaxed">
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Подход</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Никаких скучных учебников — только живой разговор, реальные темы и персональный подход. 
              Мы говорим, слушаем, разбираем ситуации из жизни и сразу применяем язык на практике.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;

