import React from 'react';

const Timeline = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-28"> {/* Added padding on both x (horizontal) and y (vertical) axes */}
      {/* Vertical Timeline */}
      <div className="space-y-8 relative">
        {/* Phase 1 */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 md:pl-[3.75rem] flex justify-center md:justify-start"> {/* Centering on small screens */}
            <h3 className="text-4xl font-semibold text-white">1</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Провести консультацию: обговорить цели и ожидания, выбрать подходящую программу.
            </p>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"></div>

        {/* Phase 2 */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 md:pl-[3.75rem] flex justify-center md:justify-start"> {/* Centering on small screens */}
            <h3 className="text-4xl font-semibold text-white">2</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Оплатить курс.
            </p>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"></div>

        {/* Phase 3 */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 md:pl-[3.75rem] flex justify-center md:justify-start"> {/* Centering on small screens */}
            <h3 className="text-4xl font-semibold text-white">3</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              Включить компьютер и подключиться к Zoom для начала занятий.
            </p>
          </div>
        </div>
      </div>
      <div id="omnisend-embedded-v2-670a46ea518f7d3017ccebbd"></div>
    </div>
  );
};

export default Timeline;
