import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ContactForm from '../ui/ContactForm';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Phone',
      details: '9005109009,9336509009',
      link: 'tel:+919005109009',
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: 'Email',
      details: 'siddhivinayakconnect@gmail.com',
      link: 'mailto:info@siddhivinayak.com',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: 'Location',
      details: 'Siddhi Vinayak Enterprises',
      link: 'https://www.google.com/maps/place/Siddhi+Vinayak+Enterprises/@25.9496015,81.6345282,17z/data=!3m1!4b1!4m6!3m5!1s0x399ae5bc859ada55:0xbfa0acca80faf792!8m2!3d25.9495968!4d81.6393991!16s%2Fg%2F11h6f68r9s?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: 'Business Hours',
      details: 'Everyday 8:00 AM - 9:00 PM',
    },
  ];

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get In Touch"
          subtitle="We're here to answer your questions and provide expert solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col p-6 bg-gray-50 rounded-lg">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-gray-600 hover:text-primary-600 transition-colors">
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.details}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-primary-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Get expert consultation for your door and window needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Request a free quote for your project</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Schedule a visit to our showroom</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inquire about our ongoing offers and discounts</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;