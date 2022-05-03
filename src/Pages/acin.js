
import React from 'react';
import Layout from './components/layout';



export default function home() {
   
   

    return (
        <Layout>
          <div className="projeto">
            <div className="intro-projeto">Acin website</div>
                        <div className="projeto-intro">
                            <div className="projeto-intro-left">
                            <div className="about-text projeto-intro-left-type">Estágio</div>
                            <div className="projeto-intro-left-equipa">
                            </div>
                            <div className="projeto-intro-left-data">
                                <div className="info-projeto projeto-intro-left-data-nome">Data</div>
                                <div className="projeto-intro-left-equipa-nome2">
                                    <div className="about-text">jul/2021</div>
                                    
                                </div>
                            </div>
                            </div>
                        <div className="about-text projeto-intro-right">Alta Baixa deve apresentar-se como uma revista que se propõe a reflectir sobre todos os aspectos da tipografia, incluindo a sua história, e cujo conteúdo é deliberadamente eclético. Visa explorar as estruturas de organização e apresentação de conteúdos e desenvolver um conhecimento profundo das possibilidades do tipo utilizado, bem como da composição.</div>
                </div>
          </div>
          <div className='projeto-content'>
        <img className="projeto-content-images" src="images/banner-acin.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/acin1.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/acin2.jpg" alt="cover"></img>

          </div>
        </Layout>
    )
} 
