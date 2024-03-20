import Image from 'next/image';
import React from 'react';

const Proyectos = () => {
    return (
    <section className="text-gray-600 body-font z-0">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        {/* Proyecto 1 */}
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="w-96 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 relative">
              <Image alt="content" className="object-cover object-center h-full w-full" src="/images/todoo.jpg" layout="fill" />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">To Do list</h2>
            <p className="leading-relaxed text-base">
                Un To do sensillo que podra ayudarte a gestionar tus tareas.
            </p>
            <a href="https://github.com/fredyslaverdem/ToDoList.git">
              <button className="flex mx-auto mt-6 text-white bg-gray-800 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">Ver en GitHub</button>
            </a>
          </div>
          {/* Proyecto 2 */}
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="w-96 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 relative">
              <Image alt="content" className="object-cover object-center h-full w-full" src="/images/cron.jpg" layout="fill" />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Cronometro en cuenta regresiva</h2>
            <p className="leading-relaxed text-base">
                Cronómetro de cuenta regresiva que permita la implementación de la técnica Pomodoro.
            </p>
            <a href="https://github.com/fredyslaverdem/Cronometro.git">
              <button className="flex mx-auto mt-6 text-white bg-gray-800 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">Ver en GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;