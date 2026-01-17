import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const faqs = [
    {
      question: "How accurate is the BMI calculator?",
      answer: "Our BMI calculator uses the standard WHO formula and provides accurate results for adults. However, it's important to note that BMI doesn't account for muscle mass, bone density, or overall body composition."
    },
    {
      question: "Can I use FitPlanner Pro for free?",
      answer: "Yes! FitPlanner Pro offers a comprehensive free version with access to all basic features including BMI calculator, exercise gallery, and fitness tips."
    },
    {
      question: "How do I track my progress?",
      answer: "You can track your progress through our app's dashboard, where you can log workouts, monitor BMI changes, set goals, and view detailed analytics of your fitness journey."
    },
    {
      question: "Are the exercise videos suitable for beginners?",
      answer: "Absolutely! Our exercise gallery includes difficulty levels from beginner to advanced. Each exercise includes proper form instructions and modifications for different fitness levels."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 position-relative" 
             style={{ 
               backgroundImage: 'url(/images/contect.png)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed',
               minHeight: '60vh'
             }}>
        <div className="hero-overlay" style={{
          background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.4) 0%, rgba(19, 132, 150, 0.4) 100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="lead mb-4 animate-slide-up">
            Get in touch with our team and let us help you achieve your fitness goals
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4">Send us a Message</h2>
                  
                  {submitted ? (
                    <div className="alert alert-success text-center">
                      <i className="fas fa-check-circle fa-2x mb-2"></i>
                      <h4>Message Sent Successfully!</h4>
                      <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Name *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                          />
                          {errors.name && (
                            <div className="invalid-feedback">{errors.name}</div>
                          )}
                        </div>
                        
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email *</label>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                          />
                          {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Subject *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter subject"
                        />
                        {errors.subject && (
                          <div className="invalid-feedback">{errors.subject}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Message *</label>
                        <textarea
                          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="5"
                          placeholder="Enter your message"
                        ></textarea>
                        {errors.message && (
                          <div className="invalid-feedback">{errors.message}</div>
                        )}
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Contact Information
                  </h5>
                  <div className="mb-3">
                    <strong>Email:</strong> support@fitplannerpro.com
                  </div>
                  <div className="mb-3">
                    <strong>Phone:</strong> +94 011567890
                  </div>
                  <div className="mb-3">
                    <strong>Address:</strong> 12 Main street, Anuradhapura
                  </div>
                  <div>
                    <strong>Hours:</strong> Mon-Fri: 9AM-6PM 
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-share-alt me-2"></i>
                    Follow Us
                  </h5>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-primary fs-4">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-info fs-4">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-danger fs-4">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-dark fs-4">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="row">
            {faqs.map((faq, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-question-circle me-2 text-primary"></i>
                      {faq.question}
                    </h5>
                    <p className="card-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
