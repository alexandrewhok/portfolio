
import React from 'react';
import Layout from './components/layout';



export default function home() {
   
   

    return (
        <Layout>
          <div className="projeto">
            <div className="intro-projeto">Alta&Baixa</div>
                        <div className="projeto-intro">
                            <div className="projeto-intro-left">
                            <div className="about-text projeto-intro-left-type">Académico</div>
                            <div className="projeto-intro-left-equipa">
                                <div className="info-projeto projeto-intro-left-equipa-nome">Equipa</div>
                                <div className="projeto-intro-left-equipa-nome2">
                                    <div className="about-text">Alexandre Pinho</div>
                                    <div className="about-text">Carlota Silva</div>
                                </div>
                            </div>
                            <div className="projeto-intro-left-data">
                                <div className="info-projeto projeto-intro-left-data-nome">Data</div>
                                <div className="projeto-intro-left-equipa-nome2">
                                    <div className="about-text">jan/2022</div>
                                    
                                </div>
                            </div>
                            </div>
                        <div className="about-text projeto-intro-right">Alta Baixa deve apresentar-se como uma revista que se propõe a reflectir sobre todos os aspectos da tipografia, incluindo a sua história, e cujo conteúdo é deliberadamente eclético. Visa explorar as estruturas de organização e apresentação de conteúdos e desenvolver um conhecimento profundo das possibilidades do tipo utilizado, bem como da composição.</div>
                </div>
          </div>
          <div className='projeto-content'>
        <img className="projeto-content-images" src="images/banner-a&b.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/ab1.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/ab2.jpg" alt="cover"></img>
        <img className="projeto-content-images" src="images/ab3.jpg" alt="cover"></img>     
          </div>
          <div className="projeto-content-link">
            <div className="info-projeto">Link para o PDF:</div>
            <div className='info-projeto projeto-content-link-video'>
            <a target="_blank" href="https://drive.google.com/file/d/1vPr-tAymQ6zLx3Mj8irG-DPzA4PXAxMq/view?usp=sharing">Revista</a>
            </div>
          </div>
          <div className="projeto-content-link">
            <div className="info-projeto">Link para o repositório do website:</div>
            <div className='info-projeto projeto-content-link-video'>
            <a target="_blank" href="https://github.com/alexandrewhok/website-ODC">Github</a>
            </div>
          </div>
        </Layout>
    )
} 
