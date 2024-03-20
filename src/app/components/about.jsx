import React from "react";
import Image from 'next/image';

const About = () => {
    return(
        <>
          <section className="text-gray-600 body-font z-0">
            <div className="container px-5 py-24 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden relative">
                  <Image alt="content" className="object-cover object-center h-full w-full z-0" src="/images/portada.jpg" layout="fill" />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                      <div className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 relative">
                          <Image src="/images/perfil.jpg" alt="Imagen de perfil" layout="fill" objectFit="cover" className="rounded-full" />
                      </div>
                    <div className="flex flex-col items-center text-center justify-center p-2">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Fredy Santiago Laverde</h2>
                      <div className="w-12 h-1 bg-gray-800 rounded mt-2 mb-4"></div>
                      <p className="text-sm">20 años</p>
                      <p className="text-sm">Estudiante | Ingenieria de sistemas</p>
                      <p className="text-sm">Universidad Jorge Tadeo Lozano</p>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4">
                      Mi nombre como ya es menciondo es Fredy Laverde, soy un estudiantes de la carrera de ingenieria de sistemas, apaciponado por las tecnologias
                      emergentes y de lo que depara el futuro en este mundillo.
                    </p>
                    <p className="leading-relaxed text-lg mb-4">
                      Actualmenete curso el 5to semestre al primer semestre de este año, dandome un gran numero de conocimeintos en lenguajes de programación y
                      algoritmia para el desarrollo de distintas actividades, con conocimeintos solidos en areas de soporte TI, bases de de datos con visualización e
                      interpretación de los mismos. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>
    );
};

export default About;

