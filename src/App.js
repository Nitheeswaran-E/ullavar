import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { FaLeaf, FaHandshake, FaTractor, FaSeedling, FaImage, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaUserFriends, FaPhone, FaFileAlt, FaShoppingCart, FaClipboardList, FaBriefcase } from 'react-icons/fa';
import { MdOutlineConstruction, MdSettings, MdSell, MdLandscape } from 'react-icons/md';
import { BsArrowRightCircle, BsCalendarCheck, BsStars } from 'react-icons/bs';
import './App.css';
import {
  GiWheat,
  GiFarmTractor,
  GiPlantRoots,
  GiFruitTree,
  GiWateringCan,
} from 'react-icons/gi';
import { GiWoodenFence } from 'react-icons/gi';
import fencingImg from './assert/fencing.jpg';
import mango from './assert/Mango AMC.jpg';
import water from './assert/Water Tank Construction.jpg';
import drip from './assert/Drip Irrigation.webp';
import coconut from './assert/Coconut Plantation.jpg';
import farm from './assert/Farm Shed Construction.jpg';
import worker from './assert/farm workers.jpg'


// Mock Data
const projects = [
  {
    id: 1,
    title: "Fencing Project",
    description: "2.5 Acres – Done in 3 Days",
    location: "Erode",
    image: fencingImg,
    category: "fencing"
  },
  { 
    id: 2,
    title: "Mango AMC",
    description: "600 Trees – April Cycle",
    location: "Salem",
    image: mango,
    category: "amc"
  },
  {
    id: 3,
    title: "Water Tank Construction",
    description: "15,000 Litre – Built in 7 Days",
    location: "Coimbatore",
    image: water,
    category: "construction"
  },
  {
    id: 4,
    title: "Drip Irrigation Setup",
    description: "5 Acres – Completed in 5 Days",
    location: "Madurai",
    image: drip,
    category: "irrigation"
  },
  {
    id: 5,
    title: "Coconut Plantation",
    description: "200 Trees – Planted in 2 Days",
    location: "Tirupur",
    image: coconut,
    category: "planting"
  },
  {
    id: 6,
    title: "Farm Shed Construction",
    description: "1000 sq.ft – Built in 15 Days",
    location: "Pollachi",
    image: farm,
    category: "construction"
  }
];


const services = [
  {
    title: "AMC (Annual Maintenance Contract)",
    icon: <FaCalendarAlt className="service-icon" />,
    description: "Scheduled maintenance for your farm with calendar-based tracking"
  },
  {
    title: "New Projects",
    icon: <MdOutlineConstruction className="service-icon" />,
    description: "Fencing, drip irrigation, planting and more"
  },
  {
    title: "Construction",
    icon: <GiWoodenFence className="service-icon" />,
    description: "Tanks, pools, sheds and other farm structures"
  },
  {
    title: "Inputs Supply",
    icon: <FaShoppingCart className="service-icon" />,
    description: "Tools, fertilizers, motors and other farm inputs"
  },
  {
    title: "Land Buy/Sell",
    icon: <MdLandscape className="service-icon" />,
    description: "Verified listings with soil/water data"
  },
  {
    title: "Crop Sales",
    icon: <MdSell className="service-icon" />,
    description: "Buyer connect and market price comparison"
  }
];

const trustFactors = [
  {
    title: "Photo Proof for Every Task",
    icon: <FaImage />,
    description: "Visual verification of completed work"
  },
  {
    title: "Calendar-Based AMC",
    icon: <FaCalendarAlt />,
    description: "Structured, not ad-hoc maintenance"
  },
  {
    title: "Fertilizer + Weather Synced",
    icon: <GiWateringCan />,
    description: "Smart scheduling based on conditions"
  },
  {
    title: "Transparent Pricing",
    icon: <FaHandshake />,
    description: "No hidden fees, no middlemen"
  },
  {
    title: "Easy Approval Process",
    icon: <FaCheckCircle />,
    description: "Via app or WhatsApp"
  },
  {
    title: "Trained Local Teams",
    icon: <FaUserFriends />,
    description: "Verified contracts and reliable workers"
  },
  {
    title: "One Vendor Responsibility",
    icon: <FaBriefcase />,
    description: "Single point of contact for all work"
  }
];

const howItWorks = [
  {
    step: 1,
    title: "Farm Visit & Needs Mapping",
    description: "We visit your farm and document requirements",
    icon: <FaMapMarkerAlt />
  },
  {
    step: 2,
    title: "Quote + Calendar",
    description: "We provide transparent pricing and schedule",
    icon: <FaCalendarAlt />
  },
  {
    step: 3,
    title: "Contract & Team Assignment",
    description: "Sign agreement and we assign the right team",
    icon: <FaFileAlt />
  },
  {
    step: 4,
    title: "Work & Photo Upload",
    description: "Work execution with photo documentation",
    icon: <FaImage />
  },
  {
    step: 5,
    title: "Approval by Farmer",
    description: "Review and approve completed tasks",
    icon: <FaCheckCircle />
  },
  {
    step: 6,
    title: "Monthly Reports",
    description: "Detailed reporting of all work done",
    icon: <FaClipboardList />
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <GiWheat className="logo-icon" />
              <span className="logo-text">Ullavar Connect</span>
            </div>
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
              <li><NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/manage-farm" onClick={() => setIsMenuOpen(false)}>Manage Farm</NavLink></li>
              <li><NavLink to="/buy-inputs" onClick={() => setIsMenuOpen(false)}>Buy Inputs</NavLink></li>
              <li><NavLink to="/sell-produce" onClick={() => setIsMenuOpen(false)}>Sell Produce</NavLink></li>
              <li><NavLink to="/land" onClick={() => setIsMenuOpen(false)}>Land</NavLink></li>
              <li><NavLink to="/construction" onClick={() => setIsMenuOpen(false)}>Construction</NavLink></li>
              <li><NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Past Work</NavLink></li>
              <li><NavLink to="/join" onClick={() => setIsMenuOpen(false)}>Join Us</NavLink></li>
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<HomePage currentSlide={currentSlide} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/manage-farm" element={<ManageFarmPage />} />
            <Route path="/buy-inputs" element={<BuyInputsPage />} />
            <Route path="/sell-produce" element={<SellProducePage />} />
            <Route path="/land" element={<LandPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/join" element={<JoinUsPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Ullavar Connect</h3>
                <p>Manage Your Farm Like a Pro. From Soil to Sale.</p>
              </div>
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Email: info@ullavarconnect.com</p>
                <p>Phone: +91 9876543210</p>
                <div className="app-download">
                  <h4>Download Our App</h4>
                  <div className="app-buttons">
                    <button className="app-button">iOS App</button>
                    <button className="app-button">Android App</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-cta">
              <h2>Start with a One-Time Project or Choose a Monthly Plan</h2>
              <div className="cta-buttons">
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary">Talk to Our Team</button>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Ullavar Connect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage({ currentSlide }) {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Manage Your Farm Like a Pro. From Soil to Sale.</h1>
          <p>AMC, planting, irrigation, fencing, inputs, tank work, harvesting, buyer connect – all in one app. With photo proof.</p>
          <div className="hero-cta">
            <button className="btn btn-primary"><GiFarmTractor /> Start Managing My Farm</button>
            <button className="btn btn-secondary"><FaCalendarAlt /> Book a Project</button>
            <button className="btn btn-secondary"><FaShoppingCart /> Buy Agri Inputs</button>
            <button className="btn btn-secondary"><MdSell /> Sell My Produce</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm Management" />
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="section-heading">
          <h2><FaLeaf /> We Are Ullavar Connect – What We Do</h2>
          <p className="tagline">We are not a consultancy. Not just labour. We are your farm's execution team – structured, documented, scheduled.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-primary center-btn">Explore All Services <BsArrowRightCircle /></button>
      </section>

      <section className="trust-section">
        <div className="section-heading">
          <h2><BsStars /> Why Farmers Choose Us</h2>
        </div>
        <div className="trust-factors">
          {trustFactors.map((factor, index) => (
            <div className="trust-card" key={index}>
              <div className="trust-icon">{factor.icon}</div>
              <h3>{factor.title}</h3>
              <p>{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="section-heading">
          <h2><MdSettings /> How It Works – SOP System</h2>
        </div>
        <div className="steps-container">
          {howItWorks.map((step) => (
            <div className="step-card" key={step.step}>
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-primary center-btn">Book Site Visit <BsArrowRightCircle /></button>
      </section>

      <section className="recent-projects-section">
        <div className="section-heading">
          <h2><FaImage /> Recent Projects</h2>
        </div>
        <div className="projects-carousel">
          <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {projects.map((project, index) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-location"><FaMapMarkerAlt /> {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentSlide === index ? 'active' : ''}`} 
            />
          ))}
        </div>
        <Link to="/projects" className="btn btn-primary center-btn">See Past Work <BsArrowRightCircle /></Link>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Who We Are</h1>
          <div className="about-statement">
            <p>We are Ullavar Connect – a full-stack, no-nonsense, execution team for farmers.</p>
            <p className="highlight">We've built farms. Not decks.</p>
            <p className="highlight">We don't sell leads. We take responsibility.</p>
          </div>
        </div>
        <div className="about-hero-image">
          <img src="https://media.istockphoto.com/id/1316735334/photo/young-indian-farmer-with-agronomist-at-banana-field.jpg?s=612x612&w=0&k=20&c=SjD-Bi-oO9LsYUSB69Jphal7nB-DySGiwLb8aDnw8UI=" alt="Farm Workers" />
        </div>
      </section>
      
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>Whether you're a 10-acre landowner or NRI, we offer peace of mind, proof of work, and professional systems.</p>
        <blockquote>Build your farm like it's a factory.</blockquote>
      </section>
      
      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Member" />
            <h3>Ramesh Kumar</h3>
            <p>Founder & Agricultural Expert</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Member" />
            <h3>Priya Sharma</h3>
            <p>Operations Director</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Member" />
            <h3>Vijay Reddy</h3>
            <p>Technical Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ManageFarmPage() {
  const [activeTab, setActiveTab] = useState('monthly');
  
  return (
    <div className="manage-farm-page">
      <section className="page-header">
        <h1><GiFarmTractor /> Manage My Farm</h1>
        <p>For AMC (maintenance) and Projects</p>
      </section>
      
      <div className="farm-tabs">
        <div className="tab-headers">
          <button 
            className={`tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
            onClick={() => setActiveTab('monthly')}
          >
            <BsCalendarCheck /> Monthly AMC
          </button>
          <button 
            className={`tab-btn ${activeTab === 'fertilizer' ? 'active' : ''}`}
            onClick={() => setActiveTab('fertilizer')}
          >
            <GiPlantRoots /> Fertilizer Plan
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pruning' ? 'active' : ''}`}
            onClick={() => setActiveTab('pruning')}
          >
            <FaSeedling /> Pruning & Pest Control
          </button>
          <button 
            className={`tab-btn ${activeTab === 'project' ? 'active' : ''}`}
            onClick={() => setActiveTab('project')}
          >
            <MdOutlineConstruction /> Project Work
          </button>
          <button 
            className={`tab-btn ${activeTab === 'construction' ? 'active' : ''}`}
            onClick={() => setActiveTab('construction')}
          >
            <GiWoodenFence /> Construction
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <FaClipboardList /> Reports & Approval
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'monthly' && (
            <div className="tab-pane">
              <h2>Monthly AMC (Annual Maintenance Contract)</h2>
              <p>Our structured monthly maintenance plans keep your farm in optimal condition year-round.</p>
              <div className="plan-cards">
                <div className="plan-card">
                  <h3>Basic Plan</h3>
                  <ul>
                    <li>Monthly farm visit</li>
                    <li>Basic irrigation check</li>
                    <li>Pest monitoring</li>
                    <li>Monthly report</li>
                  </ul>
                  <button className="btn btn-primary">Select Plan</button>
                </div>
                <div className="plan-card featured">
                  <div className="featured-badge">Popular</div>
                  <h3>Standard Plan</h3>
                  <ul>
                    <li>Bi-weekly farm visit</li>
                    <li>Full irrigation maintenance</li>
                    <li>Pest control application</li>
                    <li>Fertilizer application</li>
                    <li>Detailed bi-weekly reports</li>
                  </ul>
                  <button className="btn btn-primary">Select Plan</button>
                </div>
                <div className="plan-card">
                  <h3>Premium Plan</h3>
                  <ul>
                    <li>Weekly farm visit</li>
                    <li>Complete farm management</li>
                    <li>Advanced pest management</li>
                    <li>Customized fertilizer program</li>
                    <li>Weekly detailed reports</li>
                    <li>Priority support</li>
                  </ul>
                  <button className="btn btn-primary">Select Plan</button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'fertilizer' && (
            <div className="tab-pane">
              <h2>Fertilizer Plan</h2>
              <p>Custom fertilizer scheduling based on crop needs and seasonal conditions.</p>
              <div className="fertilizer-content">
                <div className="fertilizer-image">
                  <img src="https://images.unsplash.com/photo-1563514227147-6d2ff665a7a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Fertilizer Application" />
                </div>
                <div className="fertilizer-info">
                  <h3>Weather-Synced Fertilizer Application</h3>
                  <p>Our system automatically adjusts your fertilizer schedule based on weather forecasts and soil conditions.</p>
                  <ul>
                    <li>Soil testing and analysis</li>
                    <li>Custom nutrient programs</li>
                    <li>Seasonal adjustments</li>
                    <li>Organic and conventional options</li>
                  </ul>
                  <button className="btn btn-primary">Schedule Soil Test</button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'pruning' && (
            <div className="tab-pane">
              <h2>Pruning & Pest Control</h2>
              <p>Maintain healthy growth and protect your crops from pests.</p>
              <div className="service-details">
                <div className="service-image">
                  <img src="https://images.unsplash.com/photo-1627646295764-3fb77cbd2d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Pruning Service" />
                </div>
                <div className="service-text">
                  <h3>Expert Pruning Services</h3>
                  <p>Our trained teams use proper techniques to encourage healthy growth and maximum yield.</p>
                  <ul>
                    <li>Seasonal maintenance pruning</li>
                    <li>Structural pruning for young trees</li>
                    <li>Rejuvenation pruning for older plants</li>
                    <li>Post-harvest pruning</li>
                  </ul>
                </div>
              </div>
              <div className="service-details reversed">
                <div className="service-text">
                  <h3>Integrated Pest Management</h3>
                  <p>Environmentally sensitive approach to pest control with minimal chemical use.</p>
                  <ul>
                    <li>Regular monitoring and early detection</li>
                    <li>Biological control methods</li>
                    <li>Targeted application when necessary</li>
                    <li>Detailed pest tracking and reports</li>
                  </ul>
                </div>
                <div className="service-image">
                  <img src="https://images.unsplash.com/photo-1620735692151-16a2679bbce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Pest Control" />
                </div>
              </div>
              <button className="btn btn-primary center-btn">Schedule Service</button>
            </div>
          )}
          
          {activeTab === 'project' && (
            <div className="tab-pane">
              <h2>Project Work</h2>
              <p>Professional implementation of farm development projects.</p>
              <div className="projects-grid">
                <div className="project-item">
                  <div className="project-icon"><GiWoodenFence/></div>
                  <h3>Fencing Solutions</h3>
                  <p>Secure your farm with durable fencing options.</p>
                  <button className="btn btn-secondary">Get Quote</button>
                </div>
                <div className="project-item">
                  <div className="project-icon"><GiWateringCan /></div>
                  <h3>Drip Irrigation</h3>
                  <p>Water-efficient irrigation systems custom designed.</p>
                  <button className="btn btn-secondary">Get Quote</button>
                </div>
                <div className="project-item">
                  <div className="project-icon"><GiFruitTree /></div>
                  <h3>Plantation Projects</h3>
                  <p>Complete planting service with quality saplings.</p>
                  <button className="btn btn-secondary">Get Quote</button>
                </div>
                <div className="project-item">
                  <div className="project-icon"><FaTractor /></div>
                  <h3>Land Preparation</h3>
                  <p>Soil preparation and land development services.</p>
                  <button className="btn btn-secondary">Get Quote</button>
                </div>
              </div>
              <div className="project-cta">
                <h3>Have a custom project in mind?</h3>
                <button className="btn btn-primary">Request Custom Quote</button>
              </div>
            </div>
          )}
          
          {activeTab === 'construction' && (
            <div className="tab-pane">
              <h2>Construction Services</h2>
              <p>Build essential farm infrastructure with our experienced construction teams.</p>
              <div className="construction-items">
                <div className="construction-item">
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Water Tank" />
                  <h3>Water Tanks</h3>
                  <p>Storage solutions for irrigation needs.</p>
                </div>
                <div className="construction-item">
                  <img src="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Farm Shed" />
                  <h3>Storage Sheds</h3>
                  <p>Protect equipment and harvest.</p>
                </div>
                <div className="construction-item">
                  <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Farmhouse" />
                  <h3>Farmhouses</h3>
                  <p>Comfortable on-farm living spaces.</p>
                </div>
              </div>
              <Link to="/construction" className="btn btn-primary center-btn">View All Construction Services</Link>
            </div>
          )}
          
          {activeTab === 'reports' && (
            <div className="tab-pane">
              <h2>Reports & Approval Logs</h2>
              <p>Track all farm activities with detailed documentation.</p>
              <div className="reports-demo">
                <div className="reports-image">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Reports Dashboard" />
                </div>
                <div className="reports-features">
                  <h3>Our Reporting System Includes:</h3>
                  <ul>
                    <li>Photo documentation of all work</li>
                    <li>Task completion timestamps</li>
                    <li>Worker performance metrics</li>
                    <li>Material usage tracking</li>
                    <li>Weather condition logs</li>
                    <li>Digital approval systems</li>
                    <li>Monthly summary reports</li>
                  </ul>
                  <button className="btn btn-primary">View Sample Report</button>
                </div>
              </div>
              <div className="approval-system">
                <h3>Easy Approval System</h3>
                <p>Review and approve work through our app or WhatsApp messages.</p>
                <div className="approval-demo">
                  <div className="approval-step">
                    <div className="step-number">1</div>
                    <p>Receive notification of completed work</p>
                  </div>
                  <div className="approval-step">
                    <div className="step-number">2</div>
                    <p>View photos and details</p>
                  </div>
                  <div className="approval-step">
                    <div className="step-number">3</div>
                    <p>Approve or request changes</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="farm-cta">
        <div className="cta-buttons">
          <button className="btn btn-primary">Start AMC</button>
          <button className="btn btn-secondary">Book Project</button>
          <button className="btn btn-secondary">Upload My Farm Details</button>
        </div>
      </div>
    </div>
  );
}

function BuyInputsPage() {
  return (
    <div className="buy-inputs-page">
      <section className="page-header">
        <h1><FaShoppingCart /> Buy Agri Inputs – Ullavar Mart</h1>
        <div className="phase-badge">Phase 2 – Under Construction</div>
      </section>
      
      <div className="coming-soon">
        <div className="coming-soon-content">
          <h2>Coming Soon!</h2>
          <p>We're building a comprehensive marketplace for all your agricultural input needs.</p>
          <div className="features-preview">
            <div className="feature">
              <FaShoppingCart className="feature-icon" />
              <p>Buy fertilizers, pesticides, motors, tools</p>
            </div>
            <div className="feature">
              <FaCheckCircle className="feature-icon" />
              <p>Verified brands with farmer reviews</p>
            </div>
            <div className="feature">
              <FaTractor className="feature-icon" />
              <p>Bulk pricing + delivery</p>
            </div>
            <div className="feature">
              <FaCalendarAlt className="feature-icon" />
              <p>AMC-linked auto refill</p>
            </div>
          </div>
          <button className="btn btn-primary">Get Notified When Ready</button>
        </div>
        <div className="coming-soon-image">
          <img src="https://media.gettyimages.com/id/1318237749/photo/female-farm-worker-using-digital-tablet-with-virtual-reality-artificial-intelligence-for.jpg?s=612x612&w=gi&k=20&c=TB5tXFr1kM7uWWKkHuv8ZtDyd-hDBQnaSvBeTXZ-77A=" alt="Agricultural Supplies" />
        </div>
      </div>
    </div>
  );
}

function SellProducePage() {
  return (
    <div className="sell-produce-page">
      <section className="page-header">
        <h1><MdSell /> Sell My Produce – Ullavar Bazaar</h1>
        <div className="phase-badge">Phase 2 – Under Construction</div>
      </section>
      
      <div className="coming-soon">
        <div className="coming-soon-image">
          <img src="https://img.freepik.com/premium-photo/indian-vegetable-market-seller-with-lush-fresh-produce_1174497-154470.jpg" alt="Farm Fresh Produce" />
        </div>
        <div className="coming-soon-content">
          <h2>Coming Soon!</h2>
          <p>We're creating a marketplace to connect farmers directly with buyers.</p>
          <div className="features-preview">
            <div className="feature">
              <FaImage className="feature-icon" />
              <p>Upload crop photos</p>
            </div>
            <div className="feature">
              <FaHandshake className="feature-icon" />
              <p>Grading & Buyer Matching</p>
            </div>
            <div className="feature">
              <FaClipboardList className="feature-icon" />
              <p>Market Price Comparison</p>
            </div>
            <div className="feature">
              <FaCheckCircle className="feature-icon" />
              <p>Instant Payment Status</p>
            </div>
            <div className="feature">
              <FaFileAlt className="feature-icon" />
              <p>APEDA / FPC / Invoice help</p>
            </div>
          </div>
          <button className="btn btn-primary">Get Notified When Ready</button>
        </div>
      </div>
    </div>
  );
}

function LandPage() {
  return (
    <div className="land-page">
      <section className="page-header">
        <h1><MdLandscape /> Buy/Sell Land – Ullavar Bhoomi</h1>
        <div className="phase-badge">Phase 2 – Under Construction</div>
      </section>
      
      <div className="coming-soon">
        <div className="coming-soon-content">
          <h2>Coming Soon!</h2>
          <p>A verified marketplace for agricultural land with detailed farming suitability information.</p>
          <div className="features-preview">
            <div className="feature">
              <FaCheckCircle className="feature-icon" />
              <p>Verified listings with soil/water data</p>
            </div>
            <div className="feature">
              <FaFileAlt className="feature-icon" />
              <p>Legal & boundary checks</p>
            </div>
            <div className="feature">
              <FaClipboardList className="feature-icon" />
              <p>Cultivation-readiness reports</p>
            </div>
            <div className="feature">
              <FaHandshake className="feature-icon" />
              <p>Buyer-seller match</p>
            </div>
          </div>
          <button className="btn btn-primary">Get Notified When Ready</button>
        </div>
        <div className="coming-soon-image">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Agricultural Land" />
        </div>
      </div>
    </div>
  );
}

function ConstructionPage() {
  return (
    <div className="construction-page">
      <section className="page-header">
        <h1><MdOutlineConstruction /> Construction Services</h1>
        <p>Quality infrastructure for your farm with professional teams</p>
      </section>
      
      <section className="construction-intro">
        <div className="intro-content">
          <h2>Farm Infrastructure Experts</h2>
          <p>From water storage to living spaces, we build the facilities your farm needs to thrive.</p>
          <p>All our construction projects come with:</p>
          <ul>
            <li>Detailed planning and estimation</li>
            <li>Quality materials</li>
            <li>Professional construction teams</li>
            <li>Regular progress updates</li>
            <li>Photo documentation</li>
            <li>Transparent billing</li>
          </ul>
          <button className="btn btn-primary">Request Quote</button>
        </div>
        <div className="intro-image">
          <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Farm Construction" />
        </div>
      </section>
      
      <section className="construction-services">
        <h2>Our Construction Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Water Tank" />
            <h3>Water Tanks</h3>
            <p>Custom-sized water storage solutions for irrigation and farm use.</p>
            <p>Concrete, HDPE, or metal options available.</p>
            <button className="btn btn-secondary">See Past Projects</button>
          </div>
          
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Fencing" />
            <h3>Fencing Solutions</h3>
            <p>Secure your property with durable, long-lasting fencing options.</p>
            <p>Chain-link, barbed wire, or live fencing available.</p>
            <button className="btn btn-secondary">See Past Projects</button>
          </div>
          
          <div className="service-card">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYHAf/EAEwQAAIBAwICBgUFCwsDBQEAAAECAwAEERIhBTEGEyJBUWEycYGRoRSxssHwBxUjQlJicnOi0eEkJTM0NTZTdILC8RZjZENEVHWSJv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAmEQACAgEEAQQDAQEAAAAAAAAAAQIRAxIhMUEiBBMyYUJRcaEU/9oADAMBAAIRAxEAPwDNNJHI2li3pbFe+narfQqypmMg6RyI9vjTCSsyyzlVU7ASc25b4ryCyluLiOCJ4pC+2t+yPI5Pjj4V4tJHOrHsEkQoXwuxBbkTT7FY45ZJpJyjyxqiKq6UBJ/G8hQuh4JigmVu/TG45fvp0aHrSusoGXkxyR8D5Uy+gp0yzmiiRZBJi4lJ06k228fOoltI5Ic5jVGYpqD7jPIkdwFSSW80UMpt53uYVwJGZSul98gePLnUBu1eOQukigd68gMb5+FZKS4LURgiNHglYFvxWIznyqEIzBCSNAPsNem7jaNgTGy6SMED3mvOHuLiFusAXtHOeROBVKaVmfBIrO0b6Bhc49LOKfdIzwhteO1hQpAPhvXjvIsYV4wFXkyczUczPGCgYlWTIbG9T5EaQyPSiRo4DO2csikkezbNWNqLbRqLGSSNctkYAHdnx37hiq+0nW1lQ4Dvvp07fH2059d1JqhJ+UBTqyc578+fd7qWa6EsNcqxHyaYZUEsuMaQfXz7viKkWwkl4UssTxiJAMxx7tnxx58qCSWSOMiSJnOkZOMDPrxz3pqzE2+q3lZJuSR5xqOe/bw7870NLrZgX6HiZIy0U6h2PIE8jjfAH22qKWQtKOrAGrz2xj+FRPdFlAm1Ahu2oXfny8q8MiIAYxqI5Btx9vKnUaMCXpd44hjZNm2xuM4Huq8g0cQFvwoK6pHEsl1Ko9FFHo7dxPP+FUs7xMTGijrGf0lbA8xjFWHAFOia51FZpX7OlsHQNiPbVcnjBMrdK2ae7ube5K9VGephXCwKcJGvLl3bCoLPhEN2ZJooIZHfsmYnSyqNz6ueM8yO7wiseIQWzTfyeOXJIClsE55nlg0ZYfJ0kEyQspQdZNJGx0gfk42GNwPZXmynNWhbsGt7J4L8xXUilNeIlB1Mrchg8txn3Ux+HQwyMwkQ41LDG2wONskjv7s+VWpkje3V7YuJCOywOogfi5Y+VZ1rya1uwlzpMZ1dbbhC2NOxbB27jitjU5thrYiNuJZjamRCA+DIu5A78VXvHbW7vmJpAozGpPNvH56uLWO0Nwk0ac20HXINOG5Z8Dt599M4tP2LgNcW/VvKc9WcnIyAQR3Hc+Yrpg3aForI4TbWM3ELqR1lKsRFo22O3a9dTcHtur4NbzNAVaXU2WOOs3517cAcS4Ja8PjDpPGw612GxTy9/txT71wFijRnRIxoSPlpIx3H1CnbbjXd/wCDSaqhWTLotpJI1dpGHVuZNOgEcm7gM+HjTpOL3a4CtkK6yEaASWXxz4ULNiaLqmChdOkaN9u7PxqGWXDkHXjIDNq7u8Z9QoaE3YlgMqgky2ytjPYyMYHlV7wqyKKJzGs8JxrLy+ieQ1AZOkn/AJqtdE6sKy6k8uWM15b6hKFghMx32HfjHMciOe1XW6DFlnYyGJZYZYTJPJjDNtpP18+dHTLHFZyh2jPXLgR6CWA8c42PPaqWKZADM+rPMgMRjywO7yqWO5mkVP5Tp27KYBBNTcWnsOpJDZI4+2Gt9RYacMO0vnTLQBcxoFR15gLu48fX5UZPNDPMWSIIpIZo0PLb7cqEYFL9TuI3TUM8mxVItuNML4ClXYq2wLbE91DXkmh9GSWTkPrr260iHsOU1k5PP7ZoWSWaJY1lWNw2+G3PPFCK7FB0LPJJiTT2stjvq4tILbSCkkvWPttjHsHdWdU6L4owO/cKsxc9RLmMYwSOX2xRzQfQklRazxyyRiKbJVDvtnPPYjnmqtJWhiQMvpKcMBg4PIHx2NFTcWkZstI+pcHOCCMVAkfWWi4AD7aSxznbP76lFNLcNqjwzQM4ZQ2rHa3yXFPigaaKTqQrRueWjJz9XKgLq1ubdBK0a9W3egPz15aTz7pHrVgdyO4+frBquja0BA932V06SrciMEYqwjuGhihiWQBQNxjf7b1WztrCjJ1fje/xopjEqSI8RI2IcEDb/mq5FaVjy4DFu8OHEqK0e66htmrK345DLbmC9mfTtjTyO++TnPq2qssOAXF0BLdHqIOYZt3ceQ7vWatrXhnB2UCG9XONP4RVfG2PKh/xOcboWhtvxwQs+mcbZKaVKMgyMd3q+NBl5Z+Im9leN45iXRYyckYwNXnjGfXRi9HULl0vYZMjTiSE5+BNTzcKuS6iF7VIFGwDkHlj8YCkfpMkH4xDbqioub2RrpH6wKuc8u7P2503r9IjKlVzsNJ3wR4+NWH3lugSzQJOpGMLIpx6t6D4rw24WJJ+pliRMqzPy35DblSrFJUmmKRWc4m4p1XWMNClpMczyxiiZZ/l93JJAgXQAAUXAJJycUFwxHCzzFFWQjSpzjT7ff8ACrWMNDCiqvVty0jkPttU8iSZmykSV1VQ+AqjJIOM+HOpRcRaSSiMWXbrWyMeHroMuRpYqFQuVAJ3I22+Ip/EOHyw2pm1Er3xkHUgPLyrocENQS08bzJb2soSIgEyOvv5DYUxYokkIJE0msDIbAI5d5Apttw6aRLdLYSPdM+QiDK7DVse84wfKpLy2uLbe8i6rtLqZxgny+FFx0mqiWKDrFdSXVVXLKowCMcz78VJ8iAlDvhExnSTkBceI8/Dl8a9V4i7SxSxpGBhBKpy2x3AFe24lYsevVsYyiqPt76k7NRbRxQQRI8MsUrEZKMmrY/w8eVAXgB6mXsNEpChQ+QCdieefE/GhpHkbrGRCASDjAxy5Zz8KjtZJmi+T9nq+s1s2vGjxJJ5e2jCL63HToluC2vM2olBnbGF2z3eyhVkMrM+hWwSm323qwvrOQouhGZCxwdY0keI35YFB30fUltMLKANmC46w4zmjT/ROQC8TyX4I2kJJfbw/wCKMeXs40qcn0tO/sqBbl3kc6VGQOycklsc/wCFEgh8Fi52zk70cl9glbJnuIyuoHLL6IO2Kit7jRgSY1jOGX1+deTIAQVwAeZ0/VXkXWxQ6ZkB57e3wqdKhWSTxiddXXEYGerDcz3Yx9dBu1wzOsw7bDnjfw51KJQrBnbSo8eY8vjVnYRW1vbPelS4HZVQ2dRxz2ODzFVxQk3pQUVnCuFS3Ykchgv5eBpB1fHl3VaxCx4cwSNflV0D4eifHHJfnp7veXoKsTb2/cintMPM93soi2tYoAiogHnXqY/TpO3yNKSB3hu71gbuQrHzEKnYes99SpZ24TR1SY/RosnEh8hTE5Eef7q6lBCOQGbGHQpVdPZ/FOKRgkTBS4nXbukJor/0x5JTX3UVnBA1MHYXiqdN2xHg0an6qL4cDOz2l2yfylDFqC6Rv6J9jAVG3oGvGwrZPwoOCoKkzPOk8EmJFIZSQRzwRU4viU0yLqwTyPPPjRvSSNhepdr6NyvWMRy18n+Iz7arTKhTDIGx3ivNnhi3TRekytR2kt1SUs8YkJABGVYgb+3A91GcWumniGksI2A5nJzv3UHFoFrPriDSlwFfONNTTE9QIzuyD0PH1iueSWoD5CG4hdyLaLcRrLawszJHcRiTBKqGbHfsox6q9l4pc3GZHdnlGf8A0wNiOXLFTQIk9z1c8j6goJ0dpVGOTefkKkl4FJr62C6XSTkHT2fnqmibW6AD2hVy73IYRRKdOSVAYDYHmQD9jUQ65syxRMrOdRYnYA8/PxoocMvx6U6vg5wM4qYfKbGGSVlV+12Mn0ifq8qT25XwEjlmKw6p26tMlXfG7H8xe874psVrLfAGVTBaA6hEDu3m3iaIt7F5Jxd8Qfrrg9+Nl9Xvq1CgY+3fXp+n9Ko7sjPL0gSK2SJf5KXhOOcbY8tx305nuUyHWKZcnmuhz/qXb3g0UQCAPzfrrxsEZ2wGPOuqWKEuSanJAWqOVXBjkU6CWWRVZSBz7Q+sd1QI9uFK9UADzxtVjH2WzgbYBBPMHY1TSqYp5I20kqcboa4PUYlFo6cctfIQsEOD1crgHmG3FeNaOUxFcdnuGmoFdc+iMd4DV5JjUdIdT3bgiuX24PofQhS8PnOWxFIT+U/L37VZvG0dpZ2rDDkB3AxsT2sbeRWqy166aZIY5HDOwXl41obaxueMcbljsY+t6lckBgNIPrPhpFdGDGk7Emq4FyUjyr3uQ+z4Gr2PojxNhmVreEfnzCiE6IMwXXxK22/wgZPmrv1xI6ZGa5ufV9dNHInz/dWyh6G225e8u5NuSWxX6VE2/RLhmgkx30u59N1X18hQ9yIVjkYLlGc59Gmt6PMV0UcC4LaLiS0gTb/3F1j5zXnW9HbfbreCR48JQ+PYKV5F+g+2zneCy4GeXhUnyK6nU9TbTyZH4kRat9P0i4Pbws0F3ayFVyFt7UgnyBO1VF/0g48by2a3t54OHT200iysEkLYXYnSvYxt3758qDyfQVj+zLy5uOFzpjU9uetUHnjYOPmPsrMMYut7SYHzVpbKVLaeNnTVGPTT8pTsw92aoeJWIs76a2dydDYRueocwfaCDUc0adj43aKlIXmglCAEo+phrA2xzwefsoi1illSIIB1jEiM9yjvYj7d9CxXHUTdsdjPcN8itH0diEk2uVTKkcWtlyV1ZJOPLciubFBOe/AZfQTZWsNtEEUaiTqZjzY+JqSfGhymdQUnCndvKtfa8EuxgpBw+Dx/ANKw9rN9VG3nB7luF3aXN4Zl6sukZjVVVl3yAAPVXcpqqolpad2c3MzdkqWGwOM1HIxlaziLass0hHkNh8Q1K4QxyN4Lkbf80dwK0+XcdhQqeoJSPPLK7Fsee/xqGNeRSb8djQ2HCrQW8BvIeIXFzIvWdVbMiqqZ21Ft88j7aso+GQDHU9G5G/OueIY+Cg1oeBWejrrycr10zbDHooNgo8uZq37P5Q99Wuct7F0xj0ZSLh92uOq4LwiDzcSSnHwoqKz42MCO6srYb/1exUEe0mtAcA47qQ2Pf7qDi+2NaMH044S8XV8TVc9dpS4wMdsbavLNYji8bGdJ0ydagt6+R+I+Ndg6UAN0e4gGG3Ug7jv1DBrlklsZrOd1BPUfhDud1JUYrZFqx/wWO0ymQk5ySBzBK5pswU6T+D27OdJFe/KYRzjlHa0cv41FPd25jbeVc5HoE7iuTSy9qw3gcf8AOfW9nTDG0h378YHxIq/6KcNfit1LGlxJA0+e2h3CgqfqrN8Lu4n4pa2odwJZUVxgjUNQ2+Aro3AIY7fphPHEgSNGnCqvIAGujEtmTn0QXnSDifDLy6s7a4QrDMyq8kKs5A23OKEl6TcclxniUi5H4iqPqqHjgH354jnn8ok+l/GglALLXSoqiLk7LCw4pxKfidqs/ELp1MyZBkIB38qtvuhZZ7Pc6czbePbqi4coHFrUD/FQ/tVffdB2ax/Sn+lQpakFN6TGCKNdwig+qnHYbbV6fRNeP6J9VUJCPKuj2/a6Hr/9c/zVzhvR+3hXSLI56Ix4/wDgSfNU8hTGc8srf5Vd28AbSZHVdWM4zVf0zWWwv4raeHVJHHoMicnA5bHwBxVtwU/zrYH/AL8fziiPulRL9+Yz4ofqqWa9h8XZzq6sbh+yqZXfy+3Kug/c7tjIsjXMQ1HQcHuw2B9EVXNBBnHVJ/8AkVpehgSOScKoUAJsB5ua58UdykmbGNvf66V6xPD7o45QOef5ppiSDA5+6mcRlH3svOf9BJ3fmmutIkzkHSCCMtaHSAWtlY47zqarLoZCsdzYBe/iDk5/QjoLj/p2g8LRfpNVp0QA+VcN8Ddyt+yv7qWKVs1s6rwwN8ijIbTz2x50WDJ+X8KE4cw+RRZOMjPKiwfAj40VwMzztMT2se+kFb8se0U4d+6++vRkcsH/AFVjFT0r1Do3xAlgfwY5D84Vze0J+93GWzv8lPzrXR+lxI6M8QJAxoUc/wA9a5vZf2Rxv/Kn5x+6m/Fk38kZCQt3H8bV7agkdwc5788qJYb0PJXMU7JeBLq4/wAPJ5m5j+kK6baX9vw/pZeXV7II4FkmVnPIan0jPlkjeubdHx/P/Dv8zH9IV0rhlrBfdMLyC7iWWIvMxRuRKvkfECq4+GCT4KrjbFuKXsyMrRyzO8bowZWUnnkUAGPYJ9X291G8dZ34zxHXI76biRV1OTpUMcAZ5DyFAD0VrpgtiMuQzhjn762pP+In0q0n3QdxY/pzj9oVl+G/2pa/rU+lWm+6AezZfrJvnFJL5oZfBmPJ7Psprnsn9GnsPwfsqN/Q9lOIPCPK2iNSWOwHia3EfF7Ky4LZ8LnmHy2a0mjWFO2VYDPaxy28aw6SPGdcbFWXcEeqtnZcE4fecJs+KvbRpfR20zmaJFjaQ4I7ekDUN++pZLKYzJ8HOOJ2PlcR/SFWP3S/7UgPirfVVbwtsX1i3/fjP7Qqz+6YMcTt/wBFv9tJm6Dj7KRzz9daTogdLznx0f7v31ljIm+WHOtP0RYFm3GWPzAfvrng9yrNWGDAZfTjz51HxVivC705H9XfvH5NSKue7PqoTjmE4PesVxiFvj/zXUTZzHj/APWLYeFqn11bdEP69wsfnSn6Q+qqnpCMXkYP4tvH9GrnoiMXvCyRyjlP7UtKuzUdP4aR8hhz+T30SAhB7Ck+qgeHM4socMMaRsaKVzzMYPmu1FcDD4fwi5kTSdRGA57qeFGeZA9dM6xR3MPbXqyIeT7+a5rGKnpkAvRm+37o/prXPrP+xuOH/wAYD3k1vumjA9GbsasnMfdj8cVz62OOBcbPjEv0jTfixH8kZR6GlohzQ0tc9bFAro5/eLhn+aj+kK6f0e/vneeu4+lXMOjf94+GD/yo/pCt9DxM8I6Q316LeS4CyunVRrqY6pQuw7zvn2VTFwxZLdAXGv7X4j/mZPnNAj0VrS3fRriN/c3N5bqoWeV3VJsxSDJzurKPHzFBy9FeORAauHsQO9HU/Ma6IyVEXF2V3DzjiVt+tj+kK03T/wBCz/WzfOKpLfhHEoL+3aawuUAkQkmM49IVe9P1Zks9Kk4kmzgZxuKST80x4/Box2eyaa/o+ykTgb0jutUJnjDsH1Guk8B/utAP/FlHxrnJGVbzWujdHhnoxbAb/gJfnqeTgpj5Od8NP8qs/wBbH84q5+6Z/aFv6n+ZapOHHE9oe4SJ84q8+6aP5XbH9L5lpM3CDj7MqYUXeVwP9WKUN3BavqiuAG8st++vTa2pAHVkgDCnNTwcLeba2tJH/RQke+vLWT6OlMJi6Wyw6dJnk0nIxtg/6tvhRdz0vuLyzmtbuEQpJH2XZRknI8NvhXtt0WunALwxRDv1MCasoeisQH8ouGJ/MAGfb/CqLNJG0pmYurC74zdSNwyIXKRpGkjpIulOyOZJq34FBJYcTtIbkBXit214IIBJY8x+lWjteCWFqCI4SdXpamJ1escu6jo4o4xhI0UYxgDFVWZg9sseGMH4fbsrrvGOW/dRahgCCM/o71RpGsf9GNB8UOn5qmFzdKMJNq/WLq+IwaeOeIrxst1fu1fVTlwTvg+sZqrtLySGPTOrPvsQ4PswcUXHf2rkBnCE90gMfuzsaqpxfYri0VvTUhejlxjbLxjb9IVgIDjo5xpv1a/tGt306dT0edQxOqePHsyawQOnotxZu5pIl/aNPfiybXkZV6GlO1TuaGlNR6KBnRn+8vC/81H9IV07o1g9M7vUNvw5/armHRgg9JuFf5uP566b0aP/APZXR/XfSqmPhgl0STkca++HDWz8ttJ5pLNs4LJqJZM/NWbjvb22I6u8uo2GxAlb99EXl1LZ8fu7mBsSx3bsp89Rq/mg4YCvSWT+rOocW3jPkjT6sgn+FVpInuya14nf8HsoDf3k099eugit5Xz1UZYZY/b66Nnlh4ZxuKR5XUXxkiJdiyKwYFTpzgc8bYrEteT33Gku7psyyTISO5RqGAPIVoen28dln/El/wBtK4bjKew2/wCkV7YXctrxLhHD5ZEJ3C6QwzsRzob/AKh4LLvddHIwe8xMB9VOjI6TcF6pt+LWK9j8qeLl7+Xtx41S8K4bccUultrdcN+Ox5IPE0yihdTNRw236PcbaWK04VdRSKhYuZG0L4ZOqg+IXvHrCHhcXBreB+GNO0Wu2cymQYOpW1L2Vz+NnuFRcd4nb2Fp95OCt+BXs3NwvORu8A/P7hWl6I4/6eshgejJU5JlE1wc3sTh7c5zh0q/+6b/AFm19vzfwrO2m3VHvBU/NWl+6cAJrc/nY+BrZeELj7LWwteG6ddpFA3nsxHvo8bAAcq5/FLLCdUDMj+KnG1XPDukUyqEu1WQctS7MPqNeNH1C/IusiNPSoazv7W8yLeVWYc1/G91E1dNPgonYqVKlRCKlSpVjCwPV51T8R6QxWUjRLBLJL+cNAPv5+6rio7i3iuIyk8auvgRW/gGYfiPF7i5gkSSALGWVtMa7DGdz7xQM1/bf9KX0QuoRI1zGeq1jUQD4c61F90WhkGqzk0EHOhxkew93xrOX3BntpdV5bhSCCJCuRt58vfVY59K0kpRtmRkuI+5s+qhpZ8thEZj6q1jcOtpGd8KGPa7KjB9g5VE/DUA/BZTHjyoe90h1iKbor1h6WcIWSMqDdxnPtrp/Rhs9Lbk+U30xWK4Vw75Lxi04nMHYQTq7dUvcCKsLbi80HELi6sWWO5HbCT7ZQyKWB9a5q+LIqYmSDtFxFYDiHHOIGZurtIp5HnlJwFUMe/xo+z47DxC+fh1ygi4VOgghXH9GR6L+sn6q8eOHi/DUt7biNpavK5mmikYqZXJzzIG3ljuqvuujXFbddrYyKO+Jg2fOrxmpckZRceAWS0lsOMLbTjEkcyjbv7WxrQdO/6G0J/xJP8AbUU0UnFrK3uZI3TiFiyJOGUqzxZ2b1j99TdMYpLj5DDEheR5pFCr3ns0XJWjKOzRn+A/LfvpbNw3+sK3Zzyx358sVq+lUzcP4bM/BkjVZ5it3PEcsjY3G3Lwz++qq7uE6MWJsbJlfik6jr5v8EeA8/8Anwqv6N8Sjs5ZLS97dhdDRMp7j3N+80X5OwLxVFQFCoABjauk9Ej/ADBZf6x89YXjXDZOFXr28h1Id4n/AC1ra9Dj/Mll5SP9dafxNDk51CcRrjuArT/dR9K3P5w+Y1l4/wCjatR91EZjtj3ZU/BqTLwgw5Zm4zqMhwAV5YqRvwaRY31bnNKlXzfQRhYq3Z279qvuD8WvDPDDJIJFf8sZI9tKlT4m7NFvUaelSpV6B1ipUqVYwqVKlWMKvdIbssAVPcdxSpVjFJxjg9mkLSRIYzzIQ7H2Vn+HxG6jDSSOM7kDGD8KVKl7Cg6WFLSRBGCSwOSxO/1VDJGuheyuME40gb58q9pU8AMnt4kdMso3Xwrw3M9kqm1mkiOSOy2B7uXwpUqN0AKsekl+t1BBJ1UqyOEJdNwPLGK1qKJGMpH4RdYVu9cnfHupUqtBuhJLcwfH+GRWNxIySzSM7sWaRgSx88CqfAKGlSrsjwcs+TTKTf8AQt5LntSWTBYX7wvgfKrvof8A2NaD/uN9dKlSvgZcnPE9B/VWp+6h/QWn6K/M1KlS5eEGHLP/2Q==" alt="Farm Shed" />
            <h3>Storage Sheds</h3>
            <p>Protect your equipment, harvest, and supplies from the elements.</p>
            <p>Custom sized to your needs.</p>
            <button className="btn btn-secondary">See Past Projects</button>
          </div>
          
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Farmhouse" />
            <h3>Farmhouses</h3>
            <p>Comfortable living spaces for farm stays or permanent residence.</p>
            <p>Modern amenities with traditional charm.</p>
            <button className="btn btn-secondary">See Past Projects</button>
          </div>
          
          <div className="service-card">
            <img src="data:image/jpeg;base64,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" alt="Solar Installation" />
            <h3>Solar Installations</h3>
            <p>Renewable energy solutions for farm operations.</p>
            <p>Solar pumps, lighting, and power systems.</p>
            <button className="btn btn-secondary">See Past Projects</button>
          </div>
          
          <div className="service-card">
            <img src="https://t4.ftcdn.net/jpg/02/40/94/45/360_F_240944542_QMxydSiJhTJeeA74Na06PY2YRKaIGtUX.jpg" alt="Land Development" />
            <h3>Land Development</h3>
            <p>Prepare your land for cultivation with leveling and bund creation.</p>
            <p>Optimize water flow and retention.</p>
            <button className="btn btn-secondary">See Past Projects</button>
          </div>
        </div>
      </section>
      
      <section className="construction-cta">
        <h2>Ready to Start Your Construction Project?</h2>
        <div className="cta-buttons">
          <button className="btn btn-primary">Request Quote</button>
          <button className="btn btn-secondary">See Past Constructions</button>
        </div>
      </section>
    </div>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="projects-page">
      <section className="page-header">
        <h1><FaImage /> Past Work – Project Gallery</h1>
        <p>Explore our completed projects across Tamil Nadu</p>
      </section>
      
      <div className="projects-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'fencing' ? 'active' : ''}`} 
          onClick={() => setFilter('fencing')}
        >
          <GiWoodenFence /> Fencing
        </button>
        <button 
          className={`filter-btn ${filter === 'planting' ? 'active' : ''}`} 
          onClick={() => setFilter('planting')}
        >
          <GiFruitTree /> Planting
        </button>
        <button 
          className={`filter-btn ${filter === 'construction' ? 'active' : ''}`} 
          onClick={() => setFilter('construction')}
        >
          <MdOutlineConstruction /> Construction
        </button>
        <button 
          className={`filter-btn ${filter === 'irrigation' ? 'active' : ''}`} 
          onClick={() => setFilter('irrigation')}
        >
          <GiWateringCan /> Irrigation
        </button>
        <button 
          className={`filter-btn ${filter === 'amc' ? 'active' : ''}`} 
          onClick={() => setFilter('amc')}
        >
          <FaCalendarAlt /> AMC
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="gallery-project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-location"><FaMapMarkerAlt /> {project.location}</p>
              <div className="project-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="rating-text">5.0</span>
              </div>
              <button className="btn btn-secondary">See Project Detail</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-pagination">
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">Next →</button>
      </div>
    </div>
  );
}

function JoinUsPage() {
  return (
    <div className="join-us-page">
      <section className="page-header">
        <h1><FaUserFriends /> Join Us</h1>
        <p>Become part of the Ullavar Connect community</p>
      </section>
      
      <div className="join-sections">
        <div className="join-section farmers">
          <div className="join-content">
            <h2>For Farmers</h2>
            <div className="steps">
              <div className="join-step">
                <div className="step-number">1</div>
                <h3>Register Your Farm</h3>
                <p>Sign up and share basic details about your farm and needs</p>
              </div>
              <div className="join-step">
                <div className="step-number">2</div>
                <h3>Schedule Site Visit</h3>
                <p>Our team will visit your farm for a detailed assessment</p>
              </div>
              <div className="join-step">
                <div className="step-number">3</div>
                <h3>Get Customized Plan</h3>
                <p>Receive tailored recommendations and quotes</p>
              </div>
              <div className="join-step">
                <div className="step-number">4</div>
                <h3>Start Using Our Services</h3>
                <p>Begin with a project or AMC and track progress via app or WhatsApp</p>
              </div>
            </div>
            <button className="btn btn-primary">Register My Farm</button>
          </div>
          <div className="join-image">
            <img src="https://media.istockphoto.com/id/1330214199/photo/indian-farmer-busy-using-mobile-phone-while-sitting-in-between-the-crop-seedlings-inside.jpg?s=612x612&w=0&k=20&c=PmGOwjZlQdOhETmjVwBoT4thL3mJn3VfEm5q9doj4aU=" alt="Farmer Using App" />
          </div>
        </div>
        
        <div className="join-section workers">
          <div className="join-image">
            <img src="https://pub-b47a7c74540d40228598178154fb4b56.r2.dev/2023/10/Azure-OpenAI-Service-India-blog-hero.jpg" alt="Farm Workers" />
          </div>
          <div className="join-content">
            <h2>For Workers/Contractors</h2>
            <div className="benefits">
              <div className="benefit">
                <h3>Apply as a Partner</h3>
                <p>Join as a sprayer, fencer, driver, or specialized worker</p>
              </div>
              <div className="benefit">
                <h3>Weekly Payments</h3>
                <p>Reliable payment schedule for completed work</p>
              </div>
              <div className="benefit">
                <h3>Performance-Based Jobs</h3>
                <p>More opportunities based on quality ratings</p>
              </div>
              <div className="benefit">
                <h3>Training Provided</h3>
                <p>Learn and improve your agricultural skills</p>
              </div>
            </div>
            <button className="btn btn-primary">Apply as Partner</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;