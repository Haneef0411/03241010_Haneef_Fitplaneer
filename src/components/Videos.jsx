import React, { useState } from 'react';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const videos = [
    {
      id: 1,
      title: "Full Body HIIT Workout",
      category: "hiit",
      duration: "20 min",
      difficulty: "intermediate",
      thumbnail: "https://via.placeholder.com/400x225/dc3545/ffffff?text=HIIT+Workout",
      description: "High-intensity interval training for full body conditioning and fat burning.",
      instructor: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Morning Yoga Flow",
      category: "yoga",
      duration: "15 min",
      difficulty: "beginner",
      thumbnail: "https://via.placeholder.com/400x225/28a745/ffffff?text=Yoga+Flow",
      description: "Gentle yoga sequence to start your day with energy and flexibility.",
      instructor: "Emma Davis"
    },
    {
      id: 3,
      title: "Strength Training Basics",
      category: "strength",
      duration: "30 min",
      difficulty: "beginner",
      thumbnail: "https://via.placeholder.com/400x225/007bff/ffffff?text=Strength+Training",
      description: "Fundamental strength exercises using bodyweight and basic equipment.",
      instructor: "Mike Chen"
    },
    {
      id: 4,
      title: "Core Crusher Workout",
      category: "core",
      duration: "25 min",
      difficulty: "advanced",
      thumbnail: "https://via.placeholder.com/400x225/ffc107/000000?text=Core+Workout",
      description: "Intense core workout for advanced abdominal and oblique development.",
      instructor: "Sarah Johnson"
    },
    {
      id: 5,
      title: "Cardio Dance Party",
      category: "cardio",
      duration: "35 min",
      difficulty: "intermediate",
      thumbnail: "https://via.placeholder.com/400x225/e83e8c/ffffff?text=Dance+Cardio",
      description: "Fun dance-based cardio workout that doesn't feel like exercise.",
      instructor: "Lisa Park"
    },
    {
      id: 6,
      title: "Flexibility & Stretching",
      category: "flexibility",
      duration: "18 min",
      difficulty: "beginner",
      thumbnail: "https://via.placeholder.com/400x225/17a2b8/ffffff?text=Stretching",
      description: "Full body stretching routine for improved flexibility and recovery.",
      instructor: "Emma Davis"
    },
    {
      id: 7,
      title: "Leg Day Power",
      category: "legs",
      duration: "40 min",
      difficulty: "advanced",
      thumbnail: "https://via.placeholder.com/400x225/6f42c4/ffffff?text=Leg+Day",
      description: "Intense lower body workout targeting quads, hamstrings, and glutes.",
      instructor: "Mike Chen"
    },
    {
      id: 8,
      title: "Upper Body Blast",
      category: "upper-body",
      duration: "28 min",
      difficulty: "intermediate",
      thumbnail: "https://via.placeholder.com/400x225/6610f2/ffffff?text=Upper+Body",
      description: "Comprehensive upper body workout for chest, back, shoulders, and arms.",
      instructor: "Sarah Johnson"
    }
  ];

  const categories = ['all', 'hiit', 'yoga', 'strength', 'core', 'cardio', 'flexibility', 'legs', 'upper-body'];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return 'text-success';
      case 'intermediate': return 'text-warning';
      case 'advanced': return 'text-danger';
      default: return 'text-secondary';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 position-relative" 
             style={{ 
               background: 'linear-gradient(135deg, #343a40 0%, #495057 100%)',
               minHeight: '60vh'
             }}>
        <div className="hero-overlay"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-4 animate-fade-in">
            Workout Videos
          </h1>
          <p className="lead mb-4 animate-slide-up">
            Professional workout videos led by certified fitness instructors
          </p>
        </div>
      </section>

      {/* Videos Section */}
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
                  placeholder="Search videos..."
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
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Video Grid */}
          <div className="row">
            {filteredVideos.map(video => (
              <div key={video.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm video-card" style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  <div className="position-relative">
                    <img 
                      src={video.thumbnail} 
                      className="card-img-top" 
                      alt={video.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className={`badge ${getDifficultyColor(video.difficulty)}`}>
                        {video.difficulty}
                      </span>
                    </div>
                    <div className="position-absolute bottom-0 start-0 m-2">
                      <span className="badge bg-dark">
                        <i className="fas fa-clock me-1"></i>
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    <p className="card-text">{video.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        <i className="fas fa-user me-1"></i>
                        {video.instructor}
                      </small>
                      <span className="badge bg-secondary">
                        <i className="fas fa-tag me-1"></i>
                        {video.category}
                      </span>
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-primary btn-sm w-100">
                        <i className="fas fa-play me-2"></i>
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-video fa-3x text-muted mb-3"></i>
              <h4>No videos found</h4>
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

export default Videos;
