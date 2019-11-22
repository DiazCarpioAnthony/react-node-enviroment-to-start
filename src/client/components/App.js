import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../public/css/main.css';
import '../../public/css/menuLateral.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      task: {
        title: 'My First component',
        done: true
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const task = this.state.task;
    task.done = !task.done;
    this.setState({
      task
    });
  }

  
  render() {
    return (
      <div style={{ 
        margin: 0, 
        padding: 0}}>
        <div className="menu-lateral" id="menuToggle">
          <a href="#" id="iconToggle" className="btn-trigger"><i className="fa fa-caret-left"></i></a>
          <div className="menu">
            <div className="contenido">
              <div className="header-contenido">
                <h1>Reunión de organización HuayroTech  <a href="#" className="visible"><i className="fa fa-pencil-alt"></i></a></h1>
                <img type="image/jpg" src="/img/evento.jpg" alt="asd"></img>
              </div>

              <div className="descripcion-contenido">

                <h1>Reunión de organización HuayroTech</h1>

                <div className="score">
                  <p className="puntaje">4.0</p>
                  <form>
                    <p className="clasificacion">
                      <input id="radio1" type="radio" name="estrellas" value="5"></input>
                      <label htmlFor="radio1">★</label>
                      <input id="radio2" type="radio" name="estrellas" value="4"></input>
                      <label htmlFor="radio2">★</label>
                      <input id="radio3" type="radio" name="estrellas" value="3"></input>
                      <label htmlFor="radio3">★</label>
                      <input id="radio4" type="radio" name="estrellas" value="2"></input>
                      <label htmlFor="radio4">★</label>
                      <input id="radio5" type="radio" name="estrellas" value="1"></input>
                      <label htmlFor="radio5">★</label>
                    </p>
                  </form>
                </div>
                <div className="descripcion">
                  <h1>Descúbrelo</h1>
                  <p>Lorem ipsum dolor srrupti asperiores quia illo facilis. Reiciendis,
                      eius laborum iste unde adipisci fugit, magni omnis ducimus dolore numquam molestias id
                      quisquam facere modi quia sit sint soluta! Harum sed quidem assumenda voluptatem vel. Enim
                      harum magni ipsum illo mollitia minima voluptate voluptatibus sapiente laborum voluptatem,
                            possimus est placeat excepturi modi perspiciatis!</p>
                </div>
                <div className="datos">
                  <div className="data">
                    <i className="fa fa-map-marker-alt"></i>
                    <p>Avenida S/N, Av. República de Venezuela, Bellavista</p>
                  </div>
                  <div className="data">
                    <i className="fa fa-globe"></i>
                    <p>-12.058841472227158, -77.08187032245993</p>
                  </div>
                  <div className="data">
                    <i className="fa fa-file-alt"></i>
                    <p>disamar.mil.pe</p>
                  </div>
                  <div className="data">
                    <i className="fa fa-phone-alt"></i>
                    <p>(01) 2071600</p>
                  </div>
                  <div className="data">
                    <i className="fa fa-phone-alt"></i>
                    <p>sáb., 23 dic. 18:00–dom</p>
                  </div>
                </div>
                <div className="comentarios">
                  <h1>Todas las reseñas</h1>
                  <div className="resena">
                    <div className="nombre">
                      <p>Trasgus Hide</p>
                      <p>29, Dic. 2019</p>
                    </div>
                    <div className="comentario">
                      <p>Es de vergüenza e indignante que la farmacia del hospital esté desabastecida, tantos
                          años
                          de un marino entregando su vida a la patria para que cuando llegue su retiro y
                          necesite
                                    ciertos medicamentos</p>
                    </div>
                  </div>
                  <div className="resena">
                    <div className="nombre">
                      <p>Trasgus Hide</p>
                      <p>29, Dic. 2019</p>
                    </div>
                    <div className="comentario">
                      <p>Es de vergüenza e indignante que la farmacia del hospital esté desabastecida, tantos
                          años
                          de un marino entregando su vida a la patria para que cuando llegue su retiro y
                          necesite
                                    ciertos medicamentos</p>
                    </div>
                  </div>
                  <div className="resena">
                    <div className="nombre">
                      <p>Trasgus Hide</p>
                      <p>29, Dic. 2019</p>
                    </div>
                    <div className="comentario">
                      <p>Es de vergüenza e indignante que la farmacia del hospital esté desabastecida, tantos
                          años
                          de un marino entregando su vida a la patria para que cuando llegue su retiro y
                          necesite
                                    ciertos medicamentos</p>
                    </div>
                  </div>
                  <div className="resena">
                    <div className="nombre">
                      <p>Trasgus Hide</p>
                      <p>29, Dic. 2019</p>
                    </div>
                    <div className="comentario">
                      <p>Es de vergüenza e indignante que la farmacia del hospital esté desabastecida, tantos
                          años
                          de un marino entregando su vida a la patria para que cuando llegue su retiro y
                          necesite
                                    ciertos medicamentos</p>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn">UNIRSE</a>

                <a href="#" className="crear">Crear mi evento <i className="fa fa-pencil-alt"></i></a>
              </div>

            </div>
          </div>
        </div>
        <div id="floating-panel">
          <a id="drop" onclick="drop()" className="btn-floating">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="change2"><i className="fa fa-search-location"></i> eventos</span>
          </a>
        </div>
        <div id="map"></div>
      </div>
    )
  }

}

export default App;