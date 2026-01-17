import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    
    if (!height || height <= 0) {
      newErrors.height = 'Please enter a valid height';
    }
    if (!weight || weight <= 0) {
      newErrors.weight = 'Please enter a valid weight';
    }
    if (!age || age <= 0) {
      newErrors.age = 'Please enter a valid age';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBMI = () => {
    if (!validateInputs()) return;
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category = '';
    let color = '';
    let recommendations = [];
    
    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-info';
      recommendations = [
        'Increase caloric intake with nutrient-dense foods',
        'Focus on strength training to build muscle mass',
        'Consider consulting a nutritionist for healthy weight gain'
      ];
    } else if (bmi < 25) {
      category = 'Normal Weight';
      color = 'text-success';
      recommendations = [
        'Maintain your current healthy lifestyle',
        'Continue regular exercise and balanced diet',
        'Monitor weight changes periodically'
      ];
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-warning';
      recommendations = [
        'Create a moderate caloric deficit',
        'Increase cardiovascular exercise to 150+ minutes weekly',
        'Focus on portion control and whole foods'
      ];
    } else {
      category = 'Obese';
      color = 'text-danger';
      recommendations = [
        'Consult healthcare provider for weight management plan',
        'Start with low-impact exercises like walking or swimming',
        'Focus on gradual lifestyle changes'
      ];
    }
    
    setResult({
      bmi: bmi.toFixed(1),
      category,
      color,
      recommendations
    });
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setGender('male');
    setActivityLevel('moderate');
    setResult(null);
    setErrors({});
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 position-relative" 
             style={{ 
               backgroundImage: 'url(/images/BMI.png)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed',
               minHeight: '60vh'
             }}>
        <div className="hero-overlay" style={{
          background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.4) 0%, rgba(32, 201, 151, 0.4) 100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-4 animate-fade-in">
            BMI Calculator
          </h1>
          <p className="lead mb-4 animate-slide-up">
            Calculate your Body Mass Index and get personalized health recommendations
          </p>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4">Calculate Your BMI</h2>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Height (cm)</label>
                      <input
                        type="number"
                        className={`form-control ${errors.height ? 'is-invalid' : ''}`}
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter your height"
                      />
                      {errors.height && (
                        <div className="invalid-feedback">{errors.height}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Weight (kg)</label>
                      <input
                        type="number"
                        className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter your weight"
                      />
                      {errors.weight && (
                        <div className="invalid-feedback">{errors.weight}</div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                      />
                      {errors.age && (
                        <div className="invalid-feedback">{errors.age}</div>
                      )}
                    </div>
                    
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Gender</label>
                      <select
                        className="form-select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Activity Level</label>
                      <select
                        className="form-select"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                      >
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Light Activity</option>
                        <option value="moderate">Moderate Activity</option>
                        <option value="active">Very Active</option>
                        <option value="extra">Extra Active</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-lg me-3" onClick={calculateBMI}>
                      <i className="fas fa-calculator me-2"></i>
                      Calculate BMI
                    </button>
                    <button className="btn btn-secondary btn-lg" onClick={resetCalculator}>
                      <i className="fas fa-redo me-2"></i>
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              {result && (
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="card border-success">
                      <div className="card-body">
                        <div className="row text-center">
                          <div className="col-md-4">
                            <h3 className={result.color}>{result.bmi}</h3>
                            <p className="mb-0">BMI Score</p>
                          </div>
                          <div className="col-md-4">
                            <h3 className={result.color}>{result.category}</h3>
                            <p className="mb-0">Category</p>
                          </div>
                          <div className="col-md-4">
                            <div className="progress" style={{ height: '25px' }}>
                              <div 
                                className="progress-bar"
                                style={{
                                  width: `${Math.min(result.bmi * 2, 100)}%`,
                                  backgroundColor: result.color === 'text-success' ? '#28a745' :
                                                 result.color === 'text-warning' ? '#ffc107' :
                                                 result.color === 'text-danger' ? '#dc3545' : '#17a2b8'
                                }}
                              >
                              </div>
                            </div>
                            <p className="mb-0">Health Indicator</p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h5 className="mb-3">
                            <i className="fas fa-lightbulb me-2"></i>
                            Recommendations
                          </h5>
                          <ul className="list-group">
                            {result.recommendations.map((rec, index) => (
                              <li key={index} className="list-group-item">
                                <i className="fas fa-check-circle text-success me-2"></i>
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BMICalculator;
