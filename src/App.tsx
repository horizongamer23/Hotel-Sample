import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, Star, Wifi, Coffee, 
  Car, Utensils, Users, Calendar, ChevronRight, 
  Instagram, Facebook, Twitter, MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://lh3.googleusercontent.com/a-/ALV-UjU9nS1C2bHzXnG_WxFP9GOmyf7Igj2VEOCIwWTi-i6cthCptSFh=w79-h79-p-rp-mo-br100" 
            alt="Hotel Jai Hari Vilas Logo" 
            className="w-10 h-10 rounded-full border-2 border-heritage-gold object-cover"
            referrerPolicy="no-referrer"
          />
          <span className={`text-lg font-serif font-bold tracking-widest uppercase ${isScrolled ? 'text-heritage-brown' : 'text-white'}`}>
            JHV
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm uppercase tracking-widest hover:text-heritage-gold transition-colors ${isScrolled ? 'text-heritage-brown' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-heritage-gold text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-heritage-brown transition-all duration-300 cursor-pointer"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-heritage-gold cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-heritage-brown text-lg uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-heritage-gold text-white px-8 py-3 text-sm uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqclQYboa9Bi-m_Sre70vZDd0lrbt6S4CLAgtA6yXBhlR1S7KjaAhulJ6WP8YDD1_lLCD6Ur9a-ddVwDhtaN1Tp0WCMqGC6vgZnAJ_wpBwFMGH0yYdIs4nck1GcyedaUJQC1FgnsfaWxJbz=w408-h306-k-no" 
          alt="Hotel Exterior" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-heritage-gold uppercase tracking-[0.3em] text-sm mb-4 block"
        >
          Welcome to Heritage Luxury
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight"
        >
          Experience Royal Comfort in Jodhpur
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto"
        >
          A timeless blend of Rajasthani heritage and modern sophistication. Your sanctuary of peace in the Blue City.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#contact"
            className="bg-heritage-gold text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-heritage-gold transition-all duration-300 cursor-pointer"
          >
            Book Your Stay
          </a>
          <a 
            href="#rooms"
            className="border border-white text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-heritage-brown transition-all duration-300 cursor-pointer"
          >
            Explore Rooms
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-heritage-beige">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://picsum.photos/seed/heritage-interior/800/1000" 
              alt="Heritage Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 border-8 border-heritage-gold hidden lg:block -z-10"></div>
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-heritage-sandstone/30 hidden lg:block -z-10"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-heritage-gold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">A Legacy of Rajasthani Hospitality</h2>
          <p className="text-lg text-heritage-brown/80 mb-6 leading-relaxed">
            Hotel Jai Hari Vilas stands as a testament to the architectural grandeur of Jodhpur. Built with the iconic golden sandstone of the Thar desert, our property captures the essence of a royal haveli while offering the comforts of a boutique luxury hotel.
          </p>
          <p className="text-lg text-heritage-brown/80 mb-8 leading-relaxed">
            Every corner of our hotel tells a story of tradition, from the hand-carved jharokhas to the serene central courtyard where kings once rested. We invite you to experience personalized service that treats every guest like royalty.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-serif text-heritage-gold mb-2">15+</h4>
              <p className="text-sm uppercase tracking-widest">Years of Excellence</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif text-heritage-gold mb-2">5000+</h4>
              <p className="text-sm uppercase tracking-widest">Happy Guests</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Rooms = () => {
  const rooms = [
    {
      name: "Heritage Suite",
      image: "https://lh3.googleusercontent.com/p/AF1QipPGVZTGAAxZGeXsLA-Ky6_CJZgK4kFtt8YobZxW=w660-h533-p-k-no",
      price: "₹8,500",
      desc: "Experience the true royal lifestyle in our signature suite featuring antique furniture and city views.",
      amenities: ["King Bed", "Private Balcony", "Mini Bar"]
    },
    {
      name: "Royal Deluxe Room",
      image: "https://lh3.googleusercontent.com/p/AF1QipMV-LfCLgrrduf0VU39OVu3AkWxEU9c-Od_kAfJ=w660-h533-p-k-no",
      price: "₹5,500",
      desc: "A perfect blend of traditional decor and modern amenities for a comfortable stay.",
      amenities: ["Queen Bed", "Work Desk", "Garden View"]
    },
    {
      name: "Classic Heritage Room",
      image: "https://lh3.googleusercontent.com/p/AF1QipPGVZTGAAxZGeXsLA-Ky6_CJZgK4kFtt8YobZxW=w660-h533-p-k-no",
      price: "₹4,200",
      desc: "Cozy and elegant rooms that reflect the authentic charm of Jodhpur's heritage.",
      amenities: ["Twin Beds", "Rain Shower", "Wi-Fi"]
    }
  ];

  return (
    <section id="rooms" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-heritage-gold uppercase tracking-widest text-sm mb-4 block">Accommodations</span>
          <h2 className="text-4xl md:text-5xl mb-4">Luxurious Sanctuaries</h2>
          <div className="w-24 h-1 bg-heritage-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div 
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-heritage-gold text-white px-4 py-1 text-sm font-medium">
                  From {room.price}
                </div>
              </div>
              <h3 className="text-2xl mb-3 group-hover:text-heritage-gold transition-colors">{room.name}</h3>
              <p className="text-heritage-brown/70 mb-4 line-clamp-2">{room.desc}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {room.amenities.map(item => (
                  <span key={item} className="text-[10px] uppercase tracking-widest bg-heritage-beige px-2 py-1 text-heritage-brown/60">
                    {item}
                  </span>
                ))}
              </div>
              <a 
                href="#contact"
                className="flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-heritage-brown hover:text-heritage-gold transition-colors cursor-pointer"
              >
                Book Now <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Amenities = () => {
  const items = [
    { icon: <Wifi size={32} />, title: "High-Speed Wi-Fi", desc: "Stay connected throughout the property" },
    { icon: <Utensils size={32} />, title: "Fine Dining", desc: "Authentic Rajasthani & Global cuisines" },
    { icon: <Coffee size={32} />, title: "Room Service", desc: "24/7 personalized dining in your room" },
    { icon: <Car size={32} />, title: "Travel Desk", desc: "Guided city tours & airport transfers" },
    { icon: <Users size={32} />, title: "Event Spaces", desc: "Perfect for royal weddings & meetings" },
    { icon: <MapPin size={32} />, title: "Prime Location", desc: "Close to Mehrangarh Fort & Markets" },
  ];

  return (
    <section className="section-padding bg-heritage-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-heritage-gold uppercase tracking-widest text-sm mb-4 block">Guest Services</span>
          <h2 className="text-4xl md:text-5xl mb-4">World-Class Amenities</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-heritage-gold/30 text-heritage-gold group-hover:bg-heritage-gold group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl mb-2">{item.title}</h4>
              <p className="text-sm text-heritage-brown/60 max-w-[200px] mx-auto">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Dining = () => {
  return (
    <section id="dining" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 order-2 md:order-1"
        >
          <span className="text-heritage-gold uppercase tracking-widest text-sm mb-4 block">The Royal Kitchen</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">A Culinary Journey Through Rajasthan</h2>
          <p className="text-lg text-heritage-brown/80 mb-6 leading-relaxed">
            Indulge in the rich flavors of Marwar. Our chefs use traditional recipes passed down through generations, combined with the finest local spices to create an unforgettable dining experience.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-heritage-sandstone/20 flex items-center justify-center text-heritage-gold">
                <Utensils size={20} />
              </div>
              <div>
                <h5 className="font-semibold">Dal Baati Churma</h5>
                <p className="text-sm text-heritage-brown/60">The quintessential Rajasthani feast</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-heritage-sandstone/20 flex items-center justify-center text-heritage-gold">
                <Utensils size={20} />
              </div>
              <div>
                <h5 className="font-semibold">Laal Maas</h5>
                <p className="text-sm text-heritage-brown/60">Spicy smoked mutton curry</p>
              </div>
            </div>
          </div>
          <button className="bg-heritage-brown text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-heritage-gold transition-all duration-300 cursor-pointer">
            View Menu
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 order-1 md:order-2 grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/food1/400/500" alt="Food 1" className="w-full aspect-[3/4] object-cover rounded-sm" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/food2/400/300" alt="Food 2" className="w-full aspect-square object-cover rounded-sm" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-4 pt-12">
            <img src="https://picsum.photos/seed/food3/400/300" alt="Food 3" className="w-full aspect-square object-cover rounded-sm" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/food4/400/500" alt="Food 4" className="w-full aspect-[3/4] object-cover rounded-sm" referrerPolicy="no-referrer" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipMfqSo-O6Szik5CVjwTmY6hmum6-MVC3wurXuYr=w660-h1087-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipOxvl2fQT0CdVdKlOCLG8RyLPiyC7Xqq5mGqOne=w660-h533-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipM1DwriK1E53ZEOcvspGYXlgqrOWw20Xvy8I3W1=w660-h533-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipOqfJyVW87kZc0r77XZwXkeg3BuqFPEp30j8Xl3=w660-h1087-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipP8gvhIy2MND-vlEqH6xbOfpfuHLHQ3o-wBsMaP=w660-h1087-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipP7jrYjNIQ41QbIweoGdakAAOTKQa8aPwHm-_mb=w660-h533-p-k-no",
  ];

  return (
    <section id="gallery" className="section-padding bg-heritage-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-heritage-gold uppercase tracking-widest text-sm mb-4 block">Visual Tour</span>
          <h2 className="text-4xl md:text-5xl mb-4">Immersive Moments</h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-heritage-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 border border-white flex items-center justify-center text-white">
                  <ChevronRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Ananya Sharma", text: "A truly royal experience. The architecture is stunning and the staff made us feel so welcome. The food at the restaurant is exceptional!", rating: 5 },
    { name: "David Miller", text: "Best heritage hotel in Jodhpur. Perfect location near the fort and the rooms are incredibly comfortable. Highly recommended for families.", rating: 5 },
    { name: "Vikram Singh", text: "Jai Hari Vilas captures the soul of Rajasthan. The courtyard is peaceful and the service is impeccable. Will definitely return.", rating: 5 },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-heritage-gold uppercase tracking-widest text-sm mb-4 block">Guest Experiences</span>
          <h2 className="text-4xl md:text-5xl mb-4">What Our Guests Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 bg-heritage-beige rounded-sm relative"
            >
              <div className="flex gap-1 mb-6 text-heritage-gold">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-heritage-brown/80 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-heritage-gold/20 flex items-center justify-center font-bold text-heritage-gold">
                  {review.name[0]}
                </div>
                <span className="font-serif text-lg">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-heritage-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-heritage-gold uppercase tracking-widest text-sm mb-4 block">Reservations</span>
            <h2 className="text-4xl md:text-5xl mb-8">Plan Your Royal Stay</h2>
            <p className="text-lg text-heritage-brown/70 mb-10">
              Have questions or ready to book? Fill out the form below or reach out to us directly via WhatsApp or Phone.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-heritage-gold shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Location</h4>
                  <p className="text-heritage-brown/60">Shikargarh Rd, Jodhpur, Rajasthan 342015, India</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-heritage-gold shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Contact</h4>
                  <p className="text-heritage-brown/60">+91 89498 53812</p>
                  <p className="text-heritage-brown/60">info@jaiharivilas.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/918949853812" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-sm hover:bg-green-700 transition-colors cursor-pointer"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
              <a 
                href="tel:+918949853812"
                className="flex items-center gap-2 bg-heritage-brown text-white px-6 py-3 rounded-sm hover:bg-heritage-gold transition-colors cursor-pointer"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 shadow-xl rounded-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold">Check-In</label>
                  <input type="date" className="w-full border-b border-heritage-sandstone py-2 focus:outline-none focus:border-heritage-gold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold">Check-Out</label>
                  <input type="date" className="w-full border-b border-heritage-sandstone py-2 focus:outline-none focus:border-heritage-gold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full border-b border-heritage-sandstone py-2 focus:outline-none focus:border-heritage-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold">Phone Number</label>
                <input type="tel" placeholder="+91" className="w-full border-b border-heritage-sandstone py-2 focus:outline-none focus:border-heritage-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold">Message (Optional)</label>
                <textarea rows={3} placeholder="Any special requests?" className="w-full border-b border-heritage-sandstone py-2 focus:outline-none focus:border-heritage-gold resize-none"></textarea>
              </div>
              <button className="w-full bg-heritage-gold text-white py-4 uppercase tracking-widest hover:bg-heritage-brown transition-all duration-300 shadow-lg cursor-pointer">
                Send Reservation Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-heritage-brown text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/a-/ALV-UjU9nS1C2bHzXnG_WxFP9GOmyf7Igj2VEOCIwWTi-i6cthCptSFh=w79-h79-p-rp-mo-br100" 
                alt="Hotel Jai Hari Vilas Logo" 
                className="w-10 h-10 rounded-full border border-heritage-gold object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-serif font-bold tracking-widest uppercase">Jai Hari Vilas</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Shikargarh Rd, Jodhpur, Rajasthan 342015, India<br />
              Ph: +91 89498 53812
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-heritage-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-heritage-gold transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-heritage-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#dining" className="hover:text-heritage-gold transition-colors">Dining</a></li>
              <li><a href="#gallery" className="hover:text-heritage-gold transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Explore</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-heritage-gold transition-colors">Mehrangarh Fort</a></li>
              <li><a href="#" className="hover:text-heritage-gold transition-colors">Umaid Bhawan Palace</a></li>
              <li><a href="#" className="hover:text-heritage-gold transition-colors">Jaswant Thada</a></li>
              <li><a href="#" className="hover:text-heritage-gold transition-colors">Blue City Tour</a></li>
              <li><a href="#" className="hover:text-heritage-gold transition-colors">Local Markets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Subscribe to receive special offers and updates.</p>
            <div className="flex">
              <input type="email" placeholder="Your Email" className="bg-white/10 border-none px-4 py-3 text-sm focus:outline-none w-full" />
              <button className="bg-heritage-gold px-4 py-3 cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-xs uppercase tracking-widest">
          <p>© 2026 Hotel Jai Hari Vilas. All Rights Reserved. Designed for Royalty.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function HotelApp() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Dining />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
