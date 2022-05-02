
import React from 'react';
import CardProject from './components/CardProject';
import Layout from './components/layout';

export default function home() {
    
    return (
        <Layout>
            <div className="home">
               <div  className="home-projects">

               <CardProject
                   number="Projeto profissional"
                   image="images/banner-QF22.jpg"
                   title="Queima das fitas '22"
                   location="/qf22"/> 
                
                
               <CardProject
                   number="Projeto académico"
                   image="images/banner-a&b.jpg"
                   title="Alta & Baixa" 
                   location="/altabaixa"/>

               <CardProject
                   number="Protótipo - Estágio Acin Group"
                   image="images/banner-acin.jpg"
                   title="Acin website"
                   location="/acin"/>

                <CardProject
                   number="Protótipo - Estágio LIM9"
                   image="images/banner-lavoglia.jpg"
                   title="La Voglia" 
                   location="/voglia"/>

                <CardProject
                   number="Protótipo - Estágio LIM9"
                   image="images/banner-mezzoo.jpg"
                   title="Mezzoo" />
                   
               
              
               </div>
            </div>
        </Layout>
    )
} 
