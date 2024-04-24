import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const AboutPage = () => {
    return (
        <div>
            <Header/>
        <main className="container mx-auto my-4 flex-grow-1">
            <section id="about" className="mb-8">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p>This website provides a platform for diagnosing mental health. Users can utilize its features to assess their mental well-being and gain insights into potential areas of concern. Through interactive tools and assessments, individuals can take proactive steps towards maintaining and improving their mental health.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://cymru-wales.unison.org.uk/content/uploads/sites/9/2021/08/32765504523_71b71c09e4_k.jpg" className="card-img-top" alt="Doctor appointment"/>
                                <div className="card-body">
                                    <h5 className="card-title">Appointment</h5>
                                    <p className="card-text">Save your future.</p>
                                    <a href="#" className="btn btn-secondary">Go to doctor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
            <Footer/>
        </div>
    );
};

export default AboutPage;
