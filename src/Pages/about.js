import React from 'react'
import Layout from './components/layout';


export default function about() {
    return (
        <Layout>
            <div className="about">
                <div className="about-hero">
                    <div className="about-hero-intro">
                        <div className="big-text-contact">Hello!</div>
                        <div className="about-text">Sou o Alexandre Lucas, nascido e criado na ilha da Madeira, atual estudante universitário da Universidade de Coimbra. Recentemente Licenciado em Design e Múltimédia pela Universidade de Coimbra. Fascinado pela tecnologia, pelo mundos das artes e no poder creativo quando juntamos estes dois campos de conhecimento, tornando qualquer coisa possível. Atualmente a tirar o Mestrado em Design e Multimédia.</div>
                    </div>
                    <img src="images/alex.jpg" className="about-hero-photo" alt="hello" />
                </div>
                <div className="about-experience">
                    <div className="subtitle-text">Experiência</div>
                    <div className="about-experience-info">
                        <div className="experience-text">Secretário de Imagem - Queima das fitas Coimbra</div>
                        <div className="experience-text">jan de 2022 - atualmente</div>
                    </div>
                    <div className="about-experience-info">
                        <div className="experience-text">Colaborador de Imagem Shift Appens </div>
                        <div className="experience-text">set de 2021 - atualmente</div>
                    </div>
                    <div className="about-experience-info">
                        <div className="experience-text">Núcleo de Estudantes de Informática</div>
                        <div className="experience-text">set de 2019 - atualmente</div>
                    </div>
                    <div className="about-experience-info">
                        <div className="experience-text">Estágio UX/UI Design na Acin</div>
                        <div className="experience-text">jul de 2021 - ago de 2021 · 2 meses</div>
                    </div>
                    <div className="about-experience-info">
                        <div className="experience-text">Estágio UX/UI, AR e VR Design na LIM9</div>
                        <div className="experience-text">jul de 2020 - ago de 2020 · 2 meses</div>
                    </div>
                    <div className="about-experience-info"></div>
                </div>
            </div>
        </Layout>
    )
} 
