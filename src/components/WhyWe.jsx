import React from 'react';
import whywe1 from '../assets/whywe1.jpg';
import whywe2 from '../assets/whywe2.jpg';
import whywe3 from '../assets/whywe3.jpg';

const WhyWe = () => {
  return (
    <div id="whywe-section" className="flex justify-center items-center min-h-screen px-4 py-28">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-center text-2xl font-bold mb-8">Scratch</h2>
        <p className="mt-2 leading-normal text-gray-600 dark:text-gray-300 text-xl">
          Scratch — это визуальный язык программирования, разработанный в Массачусетском технологическом институте (MIT).
          Он создан специально для того, чтобы дети могли легко и увлекательно осваивать основы программирования, создавая игры, анимации и интерактивные истории. 
          Scratch помогает детям развивать креативность, логическое мышление и навыки решения задач через практическое обучение.
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
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Развивает креативность и воображение</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Scratch позволяет детям создавать свои собственные истории, анимации и игры, превращая их идеи в интерактивные проекты. 
              Такой подход вдохновляет на творчество и помогает выражать себя через программирование.
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
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Учит решать задачи и логически мыслить</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Постепенное создание проектов помогает детям разбивать сложные задачи на этапы, логически мыслить и находить ошибки. 
              Эти навыки важны не только в программировании, но и в повседневной жизни.
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
              <h3 className="font-sans text-xl font-bold leading-relaxed text-blue-gray-900">Формирует прочную базу в основах программирования</h3>
              <p className="font-sans text-sm leading-normal text-gray-700 opacity-75 text-xl">
              Scratch знакомит детей с основными концепциями программирования, такими как циклы, условия и переменные, в простой и наглядной форме. 
              Дети осваивают эти понятия естественно, создавая проекты, что подготавливает их к более сложным языкам в будущем.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;

