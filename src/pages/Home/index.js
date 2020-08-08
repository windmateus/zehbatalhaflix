import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'; // Pois está no index.js
// import dadosiniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
// import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
        // console.log(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <Menu />

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* {JSON.stringify(dadosIniciais)} */}

      {/* <BannerMain
        videoTitle={dadosiniciais.categorias[0].videos[0].titulo}
        url={dadosiniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosiniciais.categorias[0]}
      />

      <Carousel
        category={dadosiniciais.categorias[1]}
      />

      <Carousel
        category={dadosiniciais.categorias[2]}
      />

      <Carousel
        category={dadosiniciais.categorias[3]}
      />

      <Carousel
        category={dadosiniciais.categorias[4]}
      /> */}

      {/* <Footer /> */}

    </PageDefault>
  );
}

export default Home;
