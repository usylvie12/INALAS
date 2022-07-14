import React from 'react';

const Practice = () => {
    return (
        <div>
           <section id="practice">



           

            
           <div className="container-padding">
           <div className="col-12">
                        <h2 className="display-6 text-center mb-4">
                         What We Do
                        </h2>
                        <hr className="w-25 mx-auto" />
                    </div>
           <div className="row padding" >   
                 <div className="col-md-5">
            <div className="card" >
             <img src="/assets/legalaid.jpg" className="card-img-top" alt="..." />
             <h3>Legal aid project</h3>
                <div className="card-body">
             <p className="card-text">SINALAS undertook a project entitled “Legal Aid to Indigent Population and Vulnerable Groups, Victims of Human Rights”.  
             We were serving poor people and vulnerable groups to access to justice by providing them legal aid service</p>
             </div>
             </div></div>
                   
             <div className="col-md-5">
                    <div className="card" >
             <img src="/assets/meeting.jpg" className="card-img-top" alt="..." />
             <h3> Human rights education</h3>
                <div className="card-body">
             <p className="card-text">Throughout these three weeks, 15 international participants from 6 different countries ,
              16 Rwandan participants and 1 Congolese refugee currently living in Kiziba Refugee Camp in Rwanda, came 
             together to explore human rights through a meaningful intercultural exchange.</p>
             </div>
                    </div></div></div>



                    </div>
            </section> 
        </div>
    );
}

export default Practice;