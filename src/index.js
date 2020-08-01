import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>      
      {/* Rotas mais específicas acima */}
      {/* Ou coloca um exact e ele já pára aí */}
      <Route path="/" component={Home} exact />      
      <Route path="/cadastro/video" component={CadastroVideo} />    
      <Route path="/cadastro/categoria" component={CadastroCategoria} />    
      {/* Essa vai ser a última caso não entre em nenhuma das outras */}
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

