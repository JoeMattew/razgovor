import React from 'react';
import whywe1 from '../assets/whywe1.jpg'
import whywe2 from '../assets/whywe2.jpg'
import whywe3 from '../assets/whywe3.jpg'

const WhyWe = () => {
  return (
    <div id="whywe-section" className="flex justify-center items-center min-h-screen px-4 py-28"> {/* Added px-4 for padding */}
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">Почему мы</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12"> {/* Updated grid system */}
          {/* Card 1 */}
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="relative overflow-hidden bg-white bg-clip-border rounded-t-xl h-40">
              <img
                src={whywe1}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Курс от эксперта</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Программа разработана преподавателем с более чем 10-летним опытом в обучении и практическом программировании. 
              Мы объединяем увлекательное обучение с реальными навыками, чтобы дети легко и эффективно осваивали программирование.
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
            <div className="p-6 text-center">
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Двуязычное обучение</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Мы предлагаем уникальную возможность изучать программирование на английском языке, что помогает развивать как технические, так и языковые навыки. 
              Это открывает детям двери к глобальным возможностям в будущем.
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
            <div className="p-6 text-center">
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Увлекательное обучение</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Наши курсы построены так, чтобы увлечь юных учеников практическими проектами, такими как создание игр. 
              Это помогает поддерживать мотивацию и превращает обучение в веселое и творческое приключение!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
