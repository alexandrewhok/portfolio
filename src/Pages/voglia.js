
import React from 'react';
import Layout from './components/layout';



export default function home() {
   
   

    return (
        <Layout>
          <div className="projeto">
            <div className="intro-projeto">Voglia App</div>
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
                        <div className="about-text projeto-intro-right">Branding e Protótipo feito durante o estágio realizado no mês de julho de 2020 na empresa LIM9. Consiste numa aplicação onde o utilizador explora e entra virtualmente numa série de restaurantes virtuais e visualiza a ementa através de realidade aumentada.</div>
                </div>
          </div>
          <div className='projeto-content'>
        <img className="projeto-content-images" src="images/vog1.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/vog2.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/vog3.jpg" alt="cover"></img>
          </div>
          <div className="projeto-content-link">
            <div className="info-projeto">Link de simulação do protótipo:</div>
            <div className='info-projeto projeto-content-link-video'>
            <a target="_blank" href="https://www.youtube.com/watch?v=Dz0UH-J2RjM">Vídeo</a>
            </div>
          </div>
          <div className="projeto-content-link">
            <div className="info-projeto">Link para testar o Protótipo:</div>
            <div className='info-projeto projeto-content-link-video'>
            <a target="_blank" href="https://www.figma.com/proto/8uKycfFlGXLTWTqe5O4xsb/rest-prototipo?page-id=0%3A1&node-id=1%3A2&viewport=241%2C48%2C0.07&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1">Voglia App</a>
            </div>
            </div>
        </Layout>
    )
} 
