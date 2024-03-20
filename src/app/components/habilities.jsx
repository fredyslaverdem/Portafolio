import Image from 'next/image';
import React from 'react';


const Habilities = () => {
    const testimonials = [
        {
          name: 'JavaScript',
          role: 'Lenguaje de Programación',
          img: '/images/js.jpg',
          testimonial: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico."
        },
        {
          name: 'React',
          role: 'Framework',
          img: '/images/react.jpg',
          testimonial: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres."
        },
        {
          name: 'Node JS',
          role: 'Framework',
          img: '/images/node.jpg',
          testimonial: "Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google."
        },
        {
          name: 'Express JS',
          role: 'Framework',
          img: '/images/express.jpg',
          testimonial: "Express.js o simplemente Express es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs. El autor original es TJ Holowaychuk y la primera versión se lanzó el 2010."
        },
        {
          name: 'Tailwind CSS',
          role: 'Framework',
          img: '/images/tail.jpg',
          testimonial: "Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas."
        },
        {
          name: 'Next JS',
          role: 'Framework',
          img: '/images/nextt.jpg',
          testimonial: "Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel que habilita funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React."
        },
      ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className='my-9 '>
            <h1 className='text-black font-black text-2xl'>
                Principales habilidades adquiridas en el bootcamp
            </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 relative"
                  src={testimonial.img}
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">{testimonial.testimonial}</p>
                <span className="inline-block h-1 w-10 rounded bg-gray-800 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilities;
