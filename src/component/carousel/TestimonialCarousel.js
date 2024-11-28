import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
    clientName: "James Lee",
    profession: "Product Manager, Amazon",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-1.png",
  },
  {
    id: 2,
    quote:
      "Anna has an incredible ability to turn complex ideas into simple, actionable solutions. Her work at Microsoft was outstanding and helped drive the product vision forward.",
    clientName: "Anna Smith",
    profession: "UX Designer, Microsoft",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-2.png",
  },
  {
    id: 3,
    quote:
      "John is an exceptional software engineer who always goes above and beyond. His attention to detail and problem-solving abilities were key in delivering high-quality products at Google.",
    clientName: "John Doe",
    profession: "Software Engineer, Google",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-3.png",
  },
  {
    id: 4,
    quote:
      "Jane’s analytical thinking and creative problem-solving helped us build incredible tools for data science. She brought a unique perspective to our team at Facebook.",
    clientName: "Jane Doe",
    profession: "Data Scientist, Facebook",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-4.png",
  },
  {
    id: 5,
    quote:
      "Mark is a visionary leader with a deep understanding of product management. He guided the team through several challenges, resulting in successful projects at Spotify.",
    clientName: "Mark Thompson",
    profession: "Product Manager, Spotify",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-5.png",
  },
  {
    id: 6,
    quote:
      "Lisa’s design skills are unparalleled. She transformed our user interface into something both functional and visually stunning. Her creativity and attention to detail are unmatched.",
    clientName: "Lisa Adams",
    profession: "Lead UI/UX Designer, Adobe",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-6.png",
  },
  {
    id: 7,
    quote:
      "David has been an amazing addition to our team at Apple. His work in software development has helped us create top-tier applications, and he’s always willing to lend a helping hand.",
    clientName: "David Brown",
    profession: "Software Engineer, Apple",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-1.png",
  },
  {
    id: 8,
    quote:
      "Sarah’s strategic approach to marketing has been a game changer for our product. Her insight into customer behavior and market trends has helped us target the right audience with precision.",
    clientName: "Sarah Johnson",
    profession: "Marketing Strategist, Netflix",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-2.png",
  },
  {
    id: 9,
    quote:
      "Tim is an excellent leader and mentor. He has a unique ability to balance technical expertise with empathy, making him a standout at IBM. His leadership has been invaluable to our success.",
    clientName: "Timothy Harris",
    profession: "Tech Lead, IBM",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-3.png",
  },
  {
    id: 10,
    quote:
      "Emily’s deep knowledge of data science and machine learning is inspiring. She was a key player in helping us achieve significant breakthroughs at Amazon Web Services (AWS).",
    clientName: "Emily Clark",
    profession: "Data Scientist, AWS",
    image:
      "https://themes.3rdwavemedia.com/devcard/bs5/assets/images/clients/profile-4.png",
  },
];


const TestimonialsCarousel = () => {
  return (
    <div className="testimonial-carousel-container">
      <OwlCarousel
        className="owl-carousel testimonial-carousel owl-loaded owl-drag"
        loop
        margin={24}
        nav={false} // Disable both previous and next buttons
        autoplay
        autoplayTimeout={2000}
        items={3} // Display one testimonial at a time
        dots={true}
        // navText={[
        //   '<i className="bi bi-arrow-left"></i>',
        //   '<i className="bi bi-arrow-right"></i>',
        // ]}
        dotsdata="true" // Enable the use of custom dots data
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="item tns-item tns-slide-active">
            <div className="item-inner">
              <div className="quote-holder">
                <blockquote className="quote-content">
                <i className="fas fa-quote-left"></i> 
                   
                  {testimonial.quote}
                </blockquote>
              </div>

              <div className="source-holder">
                <div className="source-profile">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.clientName}'s profile`}
                  />
                </div>
                <div className="meta">
                  <div className="name">{testimonial.clientName}</div>
                  <div className="info">{testimonial.profession}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default TestimonialsCarousel;
