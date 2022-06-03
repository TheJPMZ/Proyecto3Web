import React from 'react';
import './PageContainer.scss';
import '../assets/Animation.gif';
import '../assets/Animation2.gif';
import '../assets/Animation3.gif';
import '../assets/Animation4.gif';
import iconos from './iconos';

function PageContainer({
  nombre, link, tecnologias, descripcion,
}) {
  return (

    <div id="demo" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" />
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" />
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" />
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3" />
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="http://52.7.129.145:3306/">
            <img src="https://cdn.discordapp.com/attachments/859345540117299220/982162797934805002/Animation.gif" alt="Memorias del Cosmere" className="d-block w-100" />
          </a>
          <div className="carousel-caption">
            <h3> Memorias del Cosmere</h3>
            <p> Un juego de memoria hecho utilizando react desde cero, sin utilizar create-react-app, por lo que fue necesario crear todo el ambiente con webpack y babel</p>
            <div className="d-inline-flex p-3">
              {['JavaScript', 'Webpack', 'Babel', 'Sass', 'React'].map((x) => (
                <div className="p-2">{iconos[x]}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <a href="http://52.7.129.145:3307/">
            <img src="https://cdn.discordapp.com/attachments/859345540117299220/982163253469802536/Animation2.gif" alt="Recrear una pagina web" className="d-block w-100" />
          </a>
          <div className="carousel-caption">
            <h3> Recrear una pagina web</h3>
            <p> Se tomo una pagina web a nuestra eleccion y la recreamos lo mas similar posible, en mi caso escogi la pagina de WWE Network</p>
            <div className="d-inline-flex p-3 text-white">
              {['JavaScript', 'Webpack', 'Babel', 'Sass', 'Bootstrap', 'React', 'EsLint'].map((x) => (
                <div className="p-2">{iconos[x]}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <a href="http://52.7.129.145:3304/">
            <img src="https://cdn.discordapp.com/attachments/859345540117299220/982162811486617620/Animation3.gif" alt="Calculadora" className="d-block w-100" />
          </a>
          <div className="carousel-caption">
            <h3> Calculadora</h3>
            <p> Es una calculadora, calcula cosas... como es de esperarse realiza operaciones matematicas y detecta errores matematicos para lo que se realizaron pruebas unitarias en JEST. Su diseno intenta recrear el presentado por la calculadora de Windows 10.</p>
            <div className="d-inline-flex p-3 text-white">
              {['JavaScript', 'Webpack', 'Babel', 'Sass', 'React', 'EsLint', 'Jest'].map((x) => (
                <div className="p-2">{iconos[x]}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <a href="http://52.7.129.145:3308/">
            <img src="https://cdn.discordapp.com/attachments/859345540117299220/982162830709096448/Animation4.gif" alt="E-Commerce" className="d-block w-100" />
          </a>
          <div style={{ height: '1.5vw' }}>A</div>
          <div className="carousel-caption">
            <h3> E-Commerce</h3>
            <p> Junto a un equipo de 35 personas creamos un simulador de E-Commerce. El equipo que yo lidere se enfoco especialmente en el apartado de carrito por lo que tuvimos que crear endpoint conectandonos a una base de datos en firebase para guardar los datos de compra.</p>
            <div className="d-inline-flex p-3 text-white">
              {['Git', 'JavaScript', 'Webpack', 'Babel', 'Sass', 'React', 'EsLint', 'Firebase'].map((x) => (
                <div className="p-2">{iconos[x]}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>

  );
}

export default PageContainer;
