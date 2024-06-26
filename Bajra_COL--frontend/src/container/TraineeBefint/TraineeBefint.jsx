import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "../Parnter/images";

const benefits = [
     {
          Title: "Earning While Learning",
          text: "At our program, we recognize the value of our trainees' efforts and offer competitive pay to support you as you grow and learn.",
          imgSrc: Icon1
     },
     {
          Title: "Meals and Refreshments Provided",
          text: "Benefit from complimentary meals and refreshments to keep your energy levels high throughout the program.",
          imgSrc: Icon2
     },
     {
          Title: "Guidance from Industry Experts",
          text: "Receive tailored mentorship from seasoned professionals, helping you achieve your career goals.",
          imgSrc: Icon3
     },
     {
          Title: "Career Development",
          text: "Enhance your career potential and fast-track your growth in the tech sector through our traineeship program.",
          imgSrc: Icon4
     },
     {
          title: "Connections",
          text: "Connect with industry professionals, fellow trainees, and alumni through networking.",
          imgSrc: Icon5
     },
     {
          Title: "Job Placement Services",
          text: "Easily move into tech roles with our job placement services. We are committed to ensuring your career success.",
          imgSrc: Icon6
     },
];

const TraineeBenefit = () => {
     return (
          <div className="container mb-5">
               <div className="container text-center">
                    <p className=" w-75 mx-auto fs-4 fw-semibold text-main">
                         Advantages for Trainees
                    </p>
                    <p className=" w-75 lh-sm mx-auto fs-1 mt-4 mb-4">
                         Uncover the Advantages of Joining COL Traineeship
                    </p>
                    <p className="w-75 mx-auto fs-6">
                         Participating in our program opens the door to a multitude of invaluable benefits, fostering your professional and personal growth.
                    </p>
               </div>

               <div className="row mt-5">
                    {benefits.map((benefit, index) => (
                         <div className="col-md-4 mb-4" key={index}>
                              <div className="card p-2 h-100 d-flex flex-column">
                                   <div className="d-flex">
                                        <img src={benefit.imgSrc} className="rounded-circle mt-4 profile" alt="profile" />
                                   </div>
                                   <div className="card-body mt-1 d-flex flex-column" style={{ paddingLeft: '1rem', paddingRight: '6rem' }}>
                                        <p className="card-title fs-5 text-secondary">{benefit.title}</p>
                                        <p className="card-text fs-6 text-secondary">{benefit.text}</p>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default TraineeBenefit;
