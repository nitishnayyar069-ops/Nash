/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Globe, 
  BarChart3, 
  Users, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-auto flex items-center">
                {/* Logo Placeholder - User should replace logo.png in public folder */}
                <div className="flex items-center">
                   <div className="bg-brand-blue-dark p-2 rounded-lg mr-3 hidden sm:block">
                      <Globe className="text-white" size={24} />
                   </div>
                   <div className="flex flex-col leading-none">
                      <span className="text-xl font-display font-black text-brand-blue-dark tracking-tighter uppercase">
                        MARKET <span className="text-brand-blue-light">TITANS</span>
                      </span>
                      <div className="h-[2px] w-full bg-brand-orange mt-1" />
                      <span className="text-[8px] font-bold text-brand-blue-dark tracking-[0.15em] uppercase mt-1">
                        Digital Marketing | BPO Solutions
                      </span>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-brand-blue-light transition-colors">Services</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-brand-blue-light transition-colors">About Us</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-brand-blue-light transition-colors">Contact</a>
            <a href="#contact" className="bg-brand-blue-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-blue-light transition-all shadow-lg shadow-blue-900/20">
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Services</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">About Us</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Contact</a>
              <div className="pt-4">
                <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Globe size={14} />
              <span>Global Business Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Empowering Your <span className="text-brand-blue-light">Digital Growth</span> & Operations
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              The Market Titans provides elite business consulting for digital marketing, BPO solutions, and professional job assistance. Based in Pennsylvania, serving the world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="flex items-center justify-center space-x-2 bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue-light transition-all shadow-lg shadow-blue-900/20 group">
                <span>Explore Services</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                <span>Contact Us</span>
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 opacity-50 grayscale">
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">Trusted By Global Leaders</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Business Consulting" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-500 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl z-20 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-xs font-medium uppercase tracking-wider opacity-80">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="text-brand-blue-light" size={32} />,
      title: "Digital Marketing",
      description: "Strategic campaigns designed to dominate the US and global markets. SEO, SEM, and social media excellence.",
      features: ["Search Engine Optimization", "Content Strategy", "Performance Marketing"]
    },
    {
      icon: <Users className="text-emerald-600" size={32} />,
      title: "BPO Solutions",
      description: "Streamlined business process outsourcing to optimize your operations and reduce overhead costs.",
      features: ["Customer Support", "Back-office Operations", "Data Management"]
    },
    {
      icon: <Briefcase className="text-amber-600" size={32} />,
      title: "Job Assistance",
      description: "Connecting top talent with industry leaders. Expert career guidance and placement services.",
      features: ["Resume Optimization", "Interview Coaching", "Direct Placement"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-blue-light uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <p className="text-4xl font-display font-bold text-slate-900 mb-6">Comprehensive Solutions for Modern Enterprises</p>
          <p className="text-lg text-slate-600">We bridge the gap between business goals and market reality with data-driven strategies and operational excellence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-light/10 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-sm font-bold text-brand-blue-light uppercase tracking-[0.2em] mb-4">About The Market Titans</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
              Your Strategic Partner in the <span className="text-brand-blue-light">Global Economy</span>
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Based in Clifton Heights, Pennsylvania, The Market Titans is a premier consulting firm dedicated to helping businesses navigate the complexities of the digital age. We specialize in scaling operations and human capital.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">USA Based</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Local Expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Global Reach</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Worldwide Impact</div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center space-x-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors group">
              <span>Learn more about our mission</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1600880212319-46b7397689d9?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Office" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Meeting" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Team" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Collaboration" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue-dark rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="lg:grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-display font-bold mb-8">Ready to Scale Your Business?</h2>
              <p className="text-blue-100 text-lg mb-12">
                Connect with our expert consultants today and discover how we can transform your digital presence and operational efficiency.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Call Us</div>
                    <div className="text-xl font-bold">267-298-7777</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Email Us</div>
                    <div className="text-xl font-bold">info@themarkettitans.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Our Location</div>
                    <div className="text-xl font-bold">Clifton Heights, Pennsylvania, USA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white">
                    <option>Digital Marketing</option>
                    <option>BPO Solutions</option>
                    <option>Job Assistance</option>
                    <option>Other Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue-dark text-white py-4 rounded-xl font-bold hover:bg-brand-blue-light transition-all shadow-lg shadow-blue-900/10">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex flex-col leading-none mb-8">
              <span className="text-2xl font-display font-black text-brand-blue-dark tracking-tighter uppercase">
                MARKET <span className="text-brand-blue-light">TITANS</span>
              </span>
              <div className="h-[2px] w-32 bg-brand-orange mt-1" />
              <span className="text-[10px] font-bold text-brand-blue-dark tracking-[0.15em] uppercase mt-1">
                Digital Marketing | BPO Solutions
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Global business consultants specializing in digital marketing, BPO solutions, and job assistance. Empowering enterprises to reach their full potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">BPO Outsourcing</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Job Assistance</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Business Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} The Market Titans. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-400">
            <span className="flex items-center space-x-2">
              <Globe size={14} />
              <span>Global / USA</span>
            </span>
            <a href="mailto:info@themarkettitans.com" className="hover:text-indigo-600 transition-colors">info@themarkettitans.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
