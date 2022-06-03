import React from 'react';
import './LanguageContainer.scss';
import iconos from './iconos';

const mainSkills = ['Python', 'JavaScript', 'React', 'Sass', 'Git'];
const subSkills = ['Java', 'Webpack', 'Babel', 'HTML', 'CSS', 'EsLint', 'Rust'];
const otherSkills = ['Bootstrap', 'Jest', 'Firebase', 'Kotlin', 'C', 'CPP', 'CSharp', 'Lua', 'Flutter'];

function LanguageContainer() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>My SkillSet</h1>
      <h2 style={{ textAlign: 'center' }}>Main Skills</h2>
      <div className="d-flex flex-wrap" style={{ justifyContent: 'center' }}>
        {mainSkills.map((x) => (
          <a data-bs-toggle="collapse" data-bs-target={`#${x}`} style={{ textDecoration: 'None' }} className="m-1">
            {iconos[x]}
            <div id={x} className="collapse" style={{ textAlign: 'center', color: 'white' }}>
              {x}
            </div>
          </a>
        ))}
      </div>
      <h2 style={{ textAlign: 'center' }}>Secondary Skills</h2>
      <div className="d-flex flex-wrap" style={{ justifyContent: 'center' }}>
        {subSkills.map((x) => (
          <a data-bs-toggle="collapse" data-bs-target={`#${x}`} style={{ textDecoration: 'None' }} className="m-1">
            {iconos[x]}
            <div id={x} className="collapse">
              {x}
            </div>
          </a>
        ))}
      </div>
      <h2 style={{ textAlign: 'center' }}>Other Skills</h2>
      <div className="d-flex flex-wrap" style={{ justifyContent: 'center' }}>
        {otherSkills.map((x) => (
          <a data-bs-toggle="collapse" data-bs-target={`#${x}`} style={{ textDecoration: 'None' }} className="m-1">
            {iconos[x]}
            <div id={x} className="collapse">
              {x}
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}

export default LanguageContainer;
