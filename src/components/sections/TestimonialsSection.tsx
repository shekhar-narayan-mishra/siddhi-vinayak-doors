import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "The UPVC windows installed by Siddhi Vinayak have completely transformed our home. The noise reduction is incredible, and our energy bills have significantly decreased.",
      author: "Rajesh Sharma",
      location: "Lucknow",
      rating: 5
    },
    {
      quote: "I'm extremely satisfied with the aluminum doors for my office space. The modern look and smooth operation have impressed both staff and clients alike.",
      author: "Priya Agarwal",
      location: "Kanpur",
      rating: 5
    },
    {
      quote: "Their attention to detail and customer service is outstanding. The GI windows are perfect for our factory environment - durable and low maintenance.",
      author: "Vikram Singh",
      location: "Varanasi",
      rating: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Hear from our satisfied clients across Uttar Pradesh"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;