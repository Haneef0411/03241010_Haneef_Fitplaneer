import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateLoginForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const validateRegisterForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = isLogin ? validateLoginForm() : validateRegisterForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    if (isLogin) {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setErrors({ general: result.error });
      }
    } else {
      const result = await register(formData.name, formData.email, formData.password, formData.confirmPassword);
      if (result.success) {
        navigate('/');
      } else {
        setErrors({ general: result.error });
      }
    }
    
    setLoading(false);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 position-relative" 
             style={{ 
               backgroundImage: 'url(/images/login.png)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed',
               minHeight: '40vh'
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
          <h1 className="display-3 fw-bold mb-4">
            {isLogin ? 'Welcome Back' : 'Join FitPlanner Pro'}
          </h1>
          <p className="lead">
            {isLogin 
              ? 'Sign in to access your personalized fitness journey' 
              : 'Start your fitness journey with a personalized account'
            }
          </p>
        </div>
      </section>

      {/* Auth Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4">
                    <i className={`fas ${isLogin ? 'fa-sign-in-alt' : 'fa-user-plus'} fa-3x text-primary mb-3`}></i>
                    <h2 className="fw-bold">
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </h2>
                    <p className="text-muted">
                      {isLogin 
                        ? 'Enter your credentials to access your account' 
                        : 'Join our community and start your fitness journey'
                      }
                    </p>
                  </div>

                  {/* Toggle Buttons */}
                  <div className="btn-group w-100 mb-4" role="group">
                    <button
                      type="button"
                      className={`btn ${isLogin ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setIsLogin(true)}
                    >
                      <i className="fas fa-sign-in-alt me-2"></i>Sign In
                    </button>
                    <button
                      type="button"
                      className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setIsLogin(false)}
                    >
                      <i className="fas fa-user-plus me-2"></i>Register
                    </button>
                  </div>

                  {errors.general && (
                    <div className="alert alert-danger" role="alert">
                      {errors.general}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {!isLogin && (
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          <i className="fas fa-user me-2"></i>Full Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          disabled={loading}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        <i className="fas fa-envelope me-2"></i>Email Address
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        disabled={loading}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        <i className="fas fa-lock me-2"></i>Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder={isLogin ? "Enter your password" : "Create a password (min. 6 characters)"}
                        disabled={loading}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    {!isLogin && (
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className="form-label">
                          <i className="fas fa-lock me-2"></i>Confirm Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          disabled={loading}
                        />
                        {errors.confirmPassword && (
                          <div className="invalid-feedback">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            {isLogin ? 'Signing in...' : 'Creating Account...'}
                          </>
                        ) : (
                          <>
                            <i className={`fas ${isLogin ? 'fa-sign-in-alt' : 'fa-user-plus'} me-2`}></i>
                            {isLogin ? 'Sign In' : 'Create Account'}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
