import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { tc1, tc2, tc3, tc4, tc5, tc6 } from '../Parnter/images';

const testimonials = [
     {
          name: 'Subash Shakya',
          image: tc1,
          text: 'During my entire traineeship program, the work culture, learning process, and...'
     },
     {
          name: 'Unisa Sakha',
          image: tc2,
          text: 'During my entire traineeship program, the work culture, learning process, and...'
     },
     {
          name: 'Human Singh Hitang',
          image: tc3,
          text: 'During my entire traineeship program, the work culture, learning process, and...'
     },
     {
          name: 'Anish Kumar Mahato',
          image: tc4,
          text: 'During my entire traineeship program, the work culture, learning process, and...'
     },
     {
          name: 'Binita Chapagain',
          image: tc5,
          text: 'During my entire traineeship program, the work culture, learning process, and...'
     },
     {
          name: 'Sachin Maharjan',
          image: tc6,
          text: 'During my entire traineeship program, the work culture, learning process, and...'
     }
];

const TestimonialCard = ({ testimonial }) => (
     <div className="col-md-4 mb-4 text-center">
          <div className="card rounded-4">
               <div className='d-flex justify-content-center'>
                    <img src={testimonial.image} className='rounded-circle mt-4 profile' alt="profile" />
               </div>
               <div className="container-sm text-center">
                    <div className="card-body text-center mt-4">
                         <div className="d-flex text-center">
                              <i className="bi bi-quote terminoal_icon"></i>
                              <h5 className="card-title mt-4">{testimonial.name}</h5>
                         </div>
                         <p className="card-text centered-text">
                              <em>{testimonial.text}</em>
                         </p>
                         <Link to={`/trainee`} className="btn btn-primary text-light bg-main ">View More</Link>
                    </div>
               </div>
          </div>
     </div>
);

TestimonialCard.propTypes = {
     testimonial: PropTypes.shape({
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
     }).isRequired
};

const TraineeTestimonials = () => {
     const [activeIndex, setActiveIndex] = useState(0);

     useEffect(() => {
          const interval = setInterval(() => {
               handleNext();
          }, 6000); // Change interval duration (in milliseconds) as needed

          return () => clearInterval(interval);
     }, []);

     const handlePrevious = () => {
          setActiveIndex(prevIndex => (prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1));
     };

     const handleNext = () => {
          setActiveIndex(prevIndex => (prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1));
     };

     return (
          <div className="container mb-5">
               <p className="text-center fs-2 fw-semibold p-5">Testimonials</p>
               <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="0">
                    <div className="carousel-inner">
                         {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
                              <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                                   <div className="row justify-content-center">
                                        {testimonials.slice(index * 3, index * 3 + 3).map((testimonial, idx) => (
                                             <TestimonialCard key={idx} testimonial={testimonial} />
                                        ))}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
               <div className="row justify-content-center mt-3">
                    <div className="col-auto">
                         <button className='btn btn-secondary btn-lg rounded-circle' onClick={handlePrevious}>
                              <i className="bi bi-arrow-left"></i>
                         </button>
                    </div>
                    <div className="col-auto">
                         <button className='btn btn-secondary btn-lg rounded-circle' onClick={handleNext}>
                              <i className="bi bi-arrow-right"></i>
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default TraineeTestimonials;
