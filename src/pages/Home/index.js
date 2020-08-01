import React from 'react';
import Menu from '../../components/Menu';   //Pois está no index.js
import dadosiniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'


function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosiniciais.categorias[0].videos[0].titulo}
        url={dadosiniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
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
      />            

      <Carousel
        category={dadosiniciais.categorias[5]}
      />            

      <Footer></Footer>

    </div>
  );
}

export default Home;
