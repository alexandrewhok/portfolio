import React from 'react'
import CardProject from './components/CardProject';
import Layout from './components/layout';

export default function home() {
    return (
        <Layout>
            <div className="home">
               <div className="home-projects">
                
                 <CardProject
                   number="01"
                   image="images/banner-mezzoo.jpg"
                   title="Mezzoo" />

                <CardProject
                   number="02"
                   image="images/banner-lavoglia.jpg"
                   title="La Voglia" />
                   
                <CardProject
                   number="03"
                   image="images/banner-mezzoo.jpg"
                   title="Mezzoo" />

                <CardProject
                   number="03"
                   image="images/banner-mezzoo.jpg"
                   title="Mezzoo" />

                <CardProject
                   number="03"
                   image="images/banner-mezzoo.jpg"
                   title="Mezzoo" />
              
              
               </div>
            </div>
        </Layout>
    )
} 
