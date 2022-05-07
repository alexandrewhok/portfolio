
import React from 'react';
import Layout from './components/layout';



export default function home() {
   
   

    return (
        <Layout>
          <div className="projeto">
            <div className="intro-projeto"> Queima das fitas</div>
                        <div className="projeto-intro">
                        <div className="projeto-intro-left">
                            <div className="about-text projeto-intro-left-type">profissional</div>
                            <div className="projeto-intro-left-equipa">
                                <div className="info-projeto projeto-intro-left-equipa-nome">Equipa</div>
                                <div className="projeto-intro-left-equipa-nome2">
                                    <div className="about-text">Ana Catarina</div>
                                    <div className="about-text">Carla Gomes</div>
                                    <div className="about-text">Jorge Santos</div>
                                    <div className="about-text">Margarida Sousa</div>
                                </div>
                            </div>
                            <div className="projeto-intro-left-data">
                                <div className="info-projeto projeto-intro-left-data-nome">Data</div>
                                <div className="projeto-intro-left-equipa-nome2">
                                    <div className="about-text">jan/2022</div>
                                    
                                </div>
                            </div>
                            </div>
                        <div className="about-text projeto-intro-right">A identidade desta edição é inspirada na cultura Portuguesa e na cidade de Coimbra. Recorremos à calçada e aos azulejos portugueses, tão nossos característicos, para encontrar as diferentes formas que se encontram presentes no logótipo, merch, credenciais, etc, assim como à arquitetura da cidade, para retirar as formas utilizadas na divulgação realizada nas redes sociais. Os gradientes utilizam as diferentes cores das oito Faculdades da Universidade e o preto e o branco são as cores predominantes do projeto. O restante material gráfico encontra-se a ser desenvolvido à data da entrega deste documento, pelo que náo poderá ser divulgado.</div>
                </div>
          </div>
          <div className='projeto-content'>
          <div className='projeto-content-incompleted about-text'> Em processo :)</div>
          </div>
        </Layout>
    )
} 
