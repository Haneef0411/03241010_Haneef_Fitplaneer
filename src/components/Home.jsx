import React, { useState, useEffect } from 'react';

const Home = () => {
  const [tips, setTips] = useState([]);

  const fitnessTips = [
    {
      title: "Stay Hydrated",
      icon: "fa-apple-alt",
      iconColor: "text-success",
      content: "Drink at least 8 glasses of water daily to maintain optimal performance and recovery. Proper hydration improves energy levels and muscle function.",
      category: "Nutrition",
      subcategory: "Daily"
    },
    {
      title: "Warm Up Properly",
      icon: "fa-fire",
      iconColor: "text-danger",
      content: "Always spend 5-10 minutes warming up before exercise. This increases blood flow to muscles and reduces injury risk significantly.",
      category: "Workout",
      subcategory: "Safety"
    },
    {
      title: "Quality Sleep",
      icon: "fa-bed",
      iconColor: "text-primary",
      content: "Get 7-9 hours of quality sleep to allow your muscles to repair and grow stronger. Sleep is crucial for recovery and performance.",
      category: "Recovery",
      subcategory: "Essential"
    },
    {
      title: "Set Realistic Goals",
      icon: "fa-trophy",
      iconColor: "text-warning",
      content: "Set achievable short-term and long-term goals. This keeps you motivated and helps measure your progress effectively.",
      category: "Motivation",
      subcategory: "Planning"
    },
    {
      title: "Protein Timing",
      icon: "fa-drumstick-bite",
      iconColor: "text-warning",
      content: "Consume protein within 30 minutes after your workout to maximize muscle repair and growth. Aim for 20-30g of high-quality protein.",
      category: "Nutrition",
      subcategory: "Post-Workout"
    },
    {
      title: "Progressive Overload",
      icon: "fa-chart-line",
      iconColor: "text-info",
      content: "Gradually increase the intensity of your workouts. This principle is key to continuous strength and fitness gains.",
      category: "Workout",
      subcategory: "Advanced"
    },
    {
      title: "Listen to Your Body",
      icon: "fa-heartbeat",
      iconColor: "text-danger",
      content: "Pay attention to signs of fatigue or pain. Rest when needed and don't push through serious discomfort.",
      category: "Safety",
      subcategory: "Important"
    },
    {
      title: "Mix Up Your Routine",
      icon: "fa-random",
      iconColor: "text-info",
      content: "Vary your exercises to prevent boredom and work different muscle groups. This keeps your body challenged and engaged.",
      category: "Workout",
      subcategory: "Variety"
    },
    {
      title: "Posture Matters",
      icon: "fa-align-center",
      iconColor: "text-success",
      content: "Maintain proper form during exercises. Good posture prevents injuries and ensures you're targeting the right muscles.",
      category: "Form",
      subcategory: "Technique"
    },
    {
      title: "Consistency Over Intensity",
      icon: "fa-calendar-check",
      iconColor: "text-primary",
      content: "Regular moderate exercise is better than occasional intense workouts. Aim for consistency in your fitness routine.",
      category: "Motivation",
      subcategory: "Habit"
    },
    {
      title: "Fuel Before Exercise",
      icon: "fa-bolt",
      iconColor: "text-warning",
      content: "Eat a light snack 30-60 minutes before working out. This provides energy for better performance.",
      category: "Nutrition",
      subcategory: "Pre-Workout"
    },
    {
      title: "Cool Down Recovery",
      icon: "fa-snowflake",
      iconColor: "text-info",
      content: "Spend 5-10 minutes cooling down after exercise. This helps reduce muscle soreness and improves flexibility.",
      category: "Recovery",
      subcategory: "Post-Workout"
    }
  ];

  const getRandomTips = (count = 6) => {
    const shuffled = [...fitnessTips].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const getBadgeColor = (category) => {
    const colors = {
      'Nutrition': 'bg-success',
      'Workout': 'bg-warning',
      'Recovery': 'bg-info',
      'Motivation': 'bg-danger',
      'Safety': 'bg-danger',
      'Form': 'bg-primary',
      'Habit': 'bg-secondary'
    };
    return colors[category] || 'bg-secondary';
  };

  useEffect(() => {
    setTips(getRandomTips(6));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section text-white text-center py-5 position-relative"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '60vh'
        }}>
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/workout.mp4" type="video/mp4" />
          <source src="/workout.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-4 animate-fade-in">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="lead mb-4 animate-slide-up">
            Your personal fitness companion with daily inspiration and expert guidance
          </p>
        </div>
      </section>

      {/* Fitness Tips Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Random Fitness Tips</h2>
          <div className="row" id="home-tips-grid">
            {tips.map((tip, index) => (
              <div 
                key={index} 
                className={`col-lg-4 col-md-6 mb-4 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card h-100 shadow-sm tip-card">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <i className={`fas ${tip.icon} fa-3x ${tip.iconColor}`}></i>
                    </div>
                    <h5 className="card-title text-center">{tip.title}</h5>
                    <p className="card-text">{tip.content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className={`badge ${getBadgeColor(tip.category)}`}>
                        {tip.category}
                      </span>
                      <span className="badge bg-secondary ms-1">
                        {tip.subcategory}
                      </span>
                    </div>
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

export default Home;
