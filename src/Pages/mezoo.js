
import React from 'react';
import Layout from './components/layout';



export default function home() {
   
   

    return (
        <Layout>
          <div className="projeto">
            <div className="intro-projeto">Mezoo App</div>
                        <div className="projeto-intro">
                            <div className="projeto-intro-left">
                            <div className="about-text projeto-intro-left-type">Estágio</div>
                            <div className="projeto-intro-left-equipa">
                            </div>
                            <div className="projeto-intro-left-data">
                                <div className="info-projeto projeto-intro-left-data-nome">Data</div>
                                <div className="projeto-intro-left-equipa-nome2">
                                    <div className="about-text">jul/2020</div>
                                    
                                </div>
                            </div>
                            </div>
                        <div className="about-text projeto-intro-right">Branding e Protótipo feito durante o estágio feito no
mês de julho de 2020 na empresa LIM9.
Consiste num jogo feito para os mais novos, como forma
de exploração e aprendizagem sobre os animais que estão
expostos no museu. Estes exploram todos os pontos
indicados apontando a câmera, visualizando os animais e
os objetos em AR que necessitam de recolher para
concluir o jogo.</div>
                </div>
          </div>
          <div className='projeto-content'>
        <img className="projeto-content-images" src="images/banner-a&b.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/ab1.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/ab2.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/ab3.jpg" alt="cover"></img>
          </div>
          <div className="projeto-content-link">
            <div className="info-projeto">Link de simulação do protótipo:</div>
            <div className='info-projeto projeto-content-link-video'>
            <a target="_blank" href="https://www.youtube.com/watch?v=co2IX0Ycl_c&ab_channel=AlexandreLucas">Vídeo</a>
            </div>
          </div>
        </Layout>
    )
} 
