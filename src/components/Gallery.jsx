import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const exercises = [
    {
      id: 1,
      title: "Push-ups",
      category: "chest",
      difficulty: "beginner",
      equipment: "none",
      image: "/images/pushup.png",
      videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4",
      description: "Classic upper body exercise targeting chest, shoulders, and triceps."
    },
    {
      id: 7,
      title: "Bench Press",
      category: "chest",
      difficulty: "intermediate",
      equipment: "barbell",
      image: "/images/bench Press.png",
      videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
      description: "Primary chest exercise with barbell or dumbbells."
    },
    {
      id: 8,
      title: "Shoulder Press",
      category: "shoulders",
      difficulty: "intermediate",
      equipment: "dumbbells",
      image: "/images/shoulder Press.png",
      videoUrl: "https://www.youtube.com/embed/vlFGTI5JzjI",
      description: "Overhead press for shoulder development."
    },
    {
      id: 9,
      title: "Bicep Curls",
      category: "arms",
      difficulty: "beginner",
      equipment: "dumbbells",
      image: "/images/bicep Curls.png",
      videoUrl: "https://www.youtube.com/embed/ykJmrh5PWE0",
      description: "Isolation exercise for bicep development."
    },
    {
      id: 2,
      title: "Squats",
      category: "legs",
      difficulty: "beginner",
      equipment: "none",
      image: "/images/squats.png",
      videoUrl: "https://www.youtube.com/embed/aclHkVaku9I",
      description: "Fundamental lower body exercise for quads, glutes, and hamstrings."
    },
    {
      id: 3,
      title: "Pull-ups",
      category: "back",
      difficulty: "intermediate",
      equipment: "bar",
      image: "/images/pullup.png",
      videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
      description: "Advanced upper body exercise for back and biceps development."
    },
    {
      id: 4,
      title: "Deadlifts",
      category: "full-body",
      difficulty: "advanced",
      equipment: "barbell",
      image: "/images/deadlifts.png",
      videoUrl: "https://www.youtube.com/embed/r9MlZDsNXP0",
      description: "Compound exercise targeting multiple muscle groups."
    },
    {
      id: 5,
      title: "Plank",
      category: "core",
      difficulty: "beginner",
      equipment: "none",
      image: "/images/plank.png",
      videoUrl: "https://www.youtube.com/embed/ASdvN_XEl_c",
      description: "Core strengthening exercise for abs and stability."
    },
    {
      id: 6,
      title: "Lunges",
      category: "legs",
      difficulty: "beginner",
      equipment: "none",
      image: "/images/lunges.png",
      videoUrl: "https://www.youtube.com/embed/wrwwXE_x-pQ",
      description: "Unilateral leg exercise for balance and strength."
    },
    
  ];

  const categories = ['all', 'chest', 'back', 'legs', 'shoulders', 'arms', 'core', 'full-body'];

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
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

  const openVideoModal = (exercise) => {
    setSelectedVideo(exercise);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 position-relative" 
             style={{ 
               backgroundImage: 'url(/images/group.png)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed',
               minHeight: '60vh'
             }}>
        <div className="hero-overlay" style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.4) 100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-4 animate-fade-in">
            Exercise Gallery
          </h1>
          <p className="lead mb-4 animate-slide-up">
            Explore our comprehensive collection of exercises for all fitness levels
          </p>
        </div>
      </section>

      {/* Gallery Section */}
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
                  placeholder="Search exercises..."
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

          {/* Exercise Grid */}
          <div className="row">
            {filteredExercises.map(exercise => (
              <div key={exercise.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm exercise-card" style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <img 
                    src={exercise.image} 
                    className="card-img-top" 
                    alt={exercise.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{exercise.title}</h5>
                    <p className="card-text">{exercise.description}</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className={`badge bg-secondary me-2`}>
                        <i className="fas fa-tag me-1"></i>
                        {exercise.category}
                      </span>
                      <span className={`badge ${getDifficultyColor(exercise.difficulty)}`}>
                        <i className="fas fa-signal me-1"></i>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <div className="mb-2">
                      <small className="text-muted">
                        <i className="fas fa-tools me-1"></i>
                        {exercise.equipment === 'none' ? 'No Equipment' : exercise.equipment}
                      </small>
                    </div>
                    <div className="d-grid gap-2 mt-auto">
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => openVideoModal(exercise)}
                      >
                        <i className="fas fa-play-circle me-2"></i>
                        Watch Demo Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4>No exercises found</h4>
              <p className="text-muted">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="modal fade show d-block" 
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 9999
          }}
          onClick={closeVideoModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" style={{ maxWidth: '90vw' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedVideo.title} - Demo Video</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeVideoModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-100 h-100"
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
                <p className="mt-3 text-muted">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      </>
  );
};

export default Gallery;
