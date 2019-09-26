// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// import './global.css';
// import App from './components/App';

// const container = document.getElementById('app');

// ReactDOM.render(<App />, container);

    // -----sin react------
    // const element = document.createElement('h1');
    // element.innerText = 'Buenas tardes, se;ores de luz';

    // const container = document.getElementById('app');

    // container.appendChild(element);
    // ------- sin react-------

import React from 'react';// importante - siempre importar las libreias de react para que funcion el .js
import ReactDOM from 'react-dom';

// const element = <h1>Prubeas con react</h1>;
// const element= React.createElement('a',{href: 'https://munisantiago.gob.pe'},'Hol soy los children');

const name = 'Gonzalo'
// const element=React.createElement('h1',{},`Hola soy ${name}`);
// const jsx = <h1>Hola soy, {name}</h1>;


const jsx = (<div>
    <h1>Holas soy {name}</h1>
    <p>soy ingeniero de sistemas</p>
</div>);

const container= document.getElementById('app');






// ReactDOM.render( que, donde)
ReactDOM.render(jsx,container);
