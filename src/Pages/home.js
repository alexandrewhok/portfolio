
import React from 'react';
import CardProject from './components/CardProject';
import Layout from './components/layout';



export default function home() {
   
   

    return (
        <Layout>
            <div className="home">
               <div  className="home-projects">
                
                 <CardProject
                   number="Protótipo - Estágio LIM9"
                   image="images/banner-mezzoo.jpg"
                   title="Mezzoo" />

                <CardProject
                   number="Protótipo - Estágio LIM9"
                   image="images/banner-lavoglia.jpg"
                   title="La Voglia" />
                   
                <CardProject
                   number="Protótipo - Estágio Acin Group"
                   image="images/banner-acin.jpg"
                   title="Acin website" />
              
               </div>
            </div>
        </Layout>
    )
} 
