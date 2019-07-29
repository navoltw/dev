import React from 'react';


import './styles.css'

const About = () => {
    return(
        <>
        <section id="main">
            <div class="container">
                <article id="main-col">
                    <h1 class="page-title">About</h1>
                    <p>
                        This site was developed using react. Utilizing the Bored API
                    </p>
                    <p class="dark">
                    Its easy to say this site was a fluke and maybe it was. But a fluke is one of the most common fish in the sea. If you go fishing for a fluke, chances are you'll catch one.
                    </p>
                </article>

            <aside id="sidebar">
                <div class="dark">
                    <h3>What Tings does</h3>
                    <p>It gives you tings to do. </p>
                </div>
            </aside>
            </div>
        </section>   
        </>
    )
}

export default About