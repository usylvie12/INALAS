import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section id="about">
                
                       
                        <div className="col-12 text-center">
                            <h2 className="col-12 text-center">Who We Are</h2>
                            <hr  />
                            <p className="lead mb-4">
                            Legal representation, assistance, and advice by qualified counsel are important parts of any legal system. Providing these legal services to marginalized populations is a challenge faced by all societies based on the Rule of Law. These challenges are only magnified for the poor in developing countries. It is,
                             therefore, everyone’s duty to defend and protect the rights of these vulnerable populations living in these areas.

                            <br />
                            <Link to="/detail" className="rounded-pill text-capitalize">Read more</Link> <br />
                            </p>
                        </div>
                    
               
            </section>
        </div>
    );
}

export default About;