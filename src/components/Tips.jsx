import React, { useState, useEffect } from 'react';

const Tips = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fitnessTips = [
    {
      id: 1,
      title: "Stay Hydrated",
      category: "nutrition",
      difficulty: "beginner",
      content: "Drink at least 8 glasses of water daily to maintain optimal performance and recovery. Proper hydration improves energy levels and muscle function.",
      icon: "fa-apple-alt",
      iconColor: "text-success"
    },
    {
      id: 2,
      title: "Warm Up Properly",
      category: "workout",
      difficulty: "beginner",
      content: "Always spend 5-10 minutes warming up before exercise. This increases blood flow to muscles and reduces injury risk significantly.",
      icon: "fa-fire",
      iconColor: "text-danger"
    },
    {
      id: 3,
      title: "Quality Sleep",
      category: "recovery",
      difficulty: "beginner",
      content: "Get 7-9 hours of quality sleep to allow your muscles to repair and grow stronger. Sleep is crucial for recovery and performance.",
      icon: "fa-bed",
      iconColor: "text-primary"
    },
    {
      id: 4,
      title: "Progressive Overload",
      category: "workout",
      difficulty: "advanced",
      content: "Gradually increase the intensity of your workouts. This principle is key to continuous strength and fitness gains.",
      icon: "fa-chart-line",
      iconColor: "text-info"
    },
    {
      id: 5,
      title: "Protein Timing",
      category: "nutrition",
      difficulty: "intermediate",
      content: "Consume protein within 30 minutes after your workout to maximize muscle repair and growth. Aim for 20-30g of high-quality protein.",
      icon: "fa-drumstick-bite",
      iconColor: "text-warning"
    },
    {
      id: 6,
      title: "Listen to Your Body",
      category: "safety",
      difficulty: "beginner",
      content: "Pay attention to signs of fatigue or pain. Rest when needed and don't push through serious discomfort.",
      icon: "fa-heartbeat",
      iconColor: "text-danger"
    },
    {
      id: 7,
      title: "Mix Up Your Routine",
      category: "workout",
      difficulty: "intermediate",
      content: "Vary your exercises to prevent boredom and work different muscle groups. This keeps your body challenged and engaged.",
      icon: "fa-random",
      iconColor: "text-info"
    },
    {
      id: 8,
      title: "Posture Matters",
      category: "form",
      difficulty: "beginner",
      content: "Maintain proper form during exercises. Good posture prevents injuries and ensures you're targeting the right muscles.",
      icon: "fa-align-center",
      iconColor: "text-success"
    },
    {
      id: 9,
      title: "Consistency Over Intensity",
      category: "motivation",
      difficulty: "intermediate",
      content: "Regular moderate exercise is better than occasional intense workouts. Aim for consistency in your fitness routine.",
      icon: "fa-calendar-check",
      iconColor: "text-primary"
    }
  ];

  const categories = ['all', 'nutrition', 'workout', 'recovery', 'safety', 'form', 'motivation'];

  const filteredTips = fitnessTips.filter(tip => {
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return 'bg-success';
      case 'intermediate': return 'bg-warning';
      case 'advanced': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 position-relative" 
             style={{ 
               background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
               minHeight: '60vh'
             }}>
        <div className="hero-overlay"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-4 animate-fade-in">
            Fitness Tips
          </h1>
          <p className="lead mb-4 animate-slide-up">
            Expert advice and proven strategies to maximize your fitness journey
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-5">
        <div className="container">
          {/* Filters */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search tips..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tips Grid */}
          <div className="row">
            {filteredTips.map(tip => (
              <div key={tip.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm tip-card" style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <i className={`fas ${tip.icon} fa-3x ${tip.iconColor}`}></i>
                    </div>
                    <h5 className="card-title text-center">{tip.title}</h5>
                    <p className="card-text">{tip.content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-secondary me-2">
                        <i className="fas fa-tag me-1"></i>
                        {tip.category}
                      </span>
                      <span className={`badge ${getDifficultyColor(tip.difficulty)}`}>
                        <i className="fas fa-signal me-1"></i>
                        {tip.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTips.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4>No tips found</h4>
              <p className="text-muted">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      </>
  );
};

export default Tips;
