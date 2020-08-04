import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      setValues({
        ...values, 
        [chave]: valor,   //nome: 'valor'   -  com os colchetes a chave é criada de forma dinâmica
      })
    }

    function handleChange(infoEvento) {
      const { getAttribute, value } = infoEvento.target;  // refatoração bacana mas não funcionou...
      setValue(
        infoEvento.target.getAttribute('name'), 
        infoEvento.target.value
      );
    }    

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infoEvento) {
            infoEvento.preventDefault();
            //console.log('tentou enviar o form');
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais);
        }}>

          <FormField 
            label="Nome da Categoria"
            type="text"
            name="nome"          
            value={values.nome}
            onChange={handleChange}
          />

          <div>            
            <label>
              Descrição:
              <textarea 
                type="text" 
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
            </div>            

          <FormField 
            label="Cor"          
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            //console.log(categoria);
            //O indice evita que dê o problema de erro ao cadastrar itens duplicados
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          }
          )}
        </ul>

        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
    )
}
  
export default CadastroCategoria;