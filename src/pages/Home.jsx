import React from 'react';
import fineLogo from '../assets/WhatsApp_Image_2026-04-14_at_11.14.49_AM-removebg-preview.png';

const Home = () => {
  return (
    <div className="app-container">
      <style>{`
        .app-container {
          min-height: 100vh;
          background-color: #f6f8fa; /* Light mode background */
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1f2328; /* Dark text for light mode */
        }
        
        .content-wrapper {
          max-width: 1536px;
          width: 94%;
          margin: 0 auto;
          padding: 24px 0;
        }

        /* --- Transparent Floating Header --- */
        .navbar-container {
          width: 100%;
          margin: 0;
          padding: 24px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
        }

        .navbar-content {
          width: 100%;
          max-width: 1600px;
          display: flex;
          justify-content: space-between; /* Shift the bar to the far right */
          align-items: center;
          margin: 0 auto;
        }

        /* Logo Section */
        .logo-section {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .logo-section:active {
          transform: scale(0.95);
        }

        .logo-icon {
          height: 60px;
          width: auto;
          object-fit: contain;
          /* No borders or background - just the clean transparent text */
          transition: transform 0.3s ease;
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.5px;
          line-height: 1.1;
          display: flex;
          gap: 6px;
        }
        
        .text-white {
          color: #ffffff;
        }
        
        .text-accent {
          color: #e86e25;
        }

        .logo-subtitle {
          display: flex;
          align-items: center;
          color: #8b949e;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-top: 4px;
          gap: 6px;
        }
        
        .logo-subtitle .line {
          width: 18px;
          height: 1px;
          background-color: #8b949e;
          opacity: 0.6;
        }

        /* Expanding Right-Side Glass Bar */
        .nav-stretch-bar {
          display: flex;
          align-items: center;
          /* Animated Aurora Background - subtle for light theme */
          background: linear-gradient(120deg, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(232, 110, 37, 0.05) 25%, 
            rgba(255, 255, 255, 0.9) 50%, 
            rgba(232, 110, 37, 0.05) 75%, 
            rgba(255, 255, 255, 0.8) 100%
          );
          background-size: 200% 200%;
          animation: aurora-shift 8s linear infinite;
          
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-top: 1px solid rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(0,0,0,0.1);
          border-radius: 9999px;
          padding: 6px 6px 6px 24px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 1);
          gap: 24px;
          transition: all 0.3s ease;
        }

        @keyframes aurora-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Search Bar Styles */
        .nav-search-wrapper {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 9999px;
          padding: 8px 20px;
          gap: 12px;
          min-width: 260px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
        }

        .nav-search-wrapper:hover {
          background: rgba(0, 0, 0, 0.06);
          border-color: rgba(0, 0, 0, 0.12);
        }

        .nav-search-wrapper:focus-within {
          background: #ffffff;
          border-color: #e86e25;
          box-shadow: 0 0 15px rgba(232, 110, 37, 0.15), inset 0 1px 2px rgba(0,0,0,0.05);
          transform: translateY(-1px);
        }

        /* Continuous Color highlight on search icon */
        .search-icon {
          color: #a0aab5;
          flex-shrink: 0;
          animation: icon-glow 4s ease-in-out infinite;
        }

        @keyframes icon-glow {
          0%, 100% { color: #a0aab5; filter: drop-shadow(0 0 0px #e86e25); }
          50% { color: #e86e25; filter: drop-shadow(0 0 4px #e86e25); }
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: #1f2328;
          font-size: 14px;
          width: 100%;
          font-weight: 500;
        }

        .search-input::placeholder {
          color: rgba(31, 35, 40, 0.4);
        }

        .nav-links-inner {
          display: flex;
          gap: 4px; /* Minimal gap inside links, the main bar handles the external equal spacing */
        }

        .nav-item {
          cursor: pointer;
          color: #4d535b;
          font-weight: 600;
          font-size: 15px;
          padding: 10px 20px;
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
        }

        .nav-item:hover {
          color: #e86e25;
          background: rgba(232, 110, 37, 0.1);
          box-shadow: 0 4px 12px rgba(232, 110, 37, 0.1);
        }
        
        .nav-item:active {
          transform: scale(0.92); /* Pronounced click animation */
          background: rgba(255, 255, 255, 0.15);
        }

        .profile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(232, 110, 37, 0.1);
          color: #e86e25;
          border: 1px solid rgba(232, 110, 37, 0.2);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          animation: profile-breathe 6s ease-in-out infinite;
        }

        @keyframes profile-breathe {
          0%, 100% { box-shadow: 0 0 0px rgba(232, 110, 37, 0); border-color: rgba(232, 110, 37, 0.2); }
          50% { box-shadow: 0 0 12px rgba(232, 110, 37, 0.2); border-color: rgba(232, 110, 37, 0.5); }
        }

        .profile-btn:hover {
          color: #ffffff;
          background: #e86e25;
          box-shadow: 0 4px 16px rgba(232, 110, 37, 0.5);
          transform: translateY(-1px);
        }
        
        .profile-btn:active {
          transform: translateY(1px) scale(0.95);
        }


        /* Main B2B Grid */
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Universal Card Styles */
        .b2b-card {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          border: 1px solid #d0d7de;
          background-color: #ffffff;
        }
        
        .b2b-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          border-color: #e86e25;
        }

        /* Hero Card (Takes 2 columns) */
        .hero-card {
          grid-column: span 2;
          min-height: 440px;
          color: white;
        }
        
        /* Setup for all text-overlay dark cards */
        .overlay-card {
          position: relative;
        }
        
        .overlay-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%);
          z-index: 1;
        }
        
        .overlay-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }

        .overlay-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          padding: 40px;
        }

        /* Non-image cards (formerly light cards) */
        .light-card {
          padding: 36px 36px 40px 36px;
        }
        
        .hydraulics-card {
           min-height: 440px;
           justify-content: flex-start;
        }

        .light-card-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .image-container-top {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: auto;
          min-height: 180px;
        }
        
        .image-container-top img {
          max-width: 85%;
          max-height: 220px;
          object-fit: contain;
          filter: drop-shadow(0 15px 15px rgba(0,0,0,0.4));
        }

        .pnuematics-card {
          position: relative;
          min-height: 320px;
        }
        
        .pneumatics-images {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .p-img-1 {
           position: absolute;
           top: 24px;
           left: 24px;
           width: 110px;
           filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }
        
        .p-img-2 {
           position: absolute;
           top: 24px;
           right: 24px;
           width: 100px;
           filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }
        
        .p-img-3 {
           position: absolute;
           bottom: 16px;
           right: 24px;
           width: 140px;
           filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }
        
        
        .sensors-card {
          position: relative;
          min-height: 320px;
        }

        /* Typography inside cards */
        .card-title {
          font-size: 26px;
          font-weight: 700;
          margin: 0 0 12px 0;
          letter-spacing: -0.3px;
          color: #1f2328;
        }
        
        .card-title.large {
          font-size: 32px;
          margin-bottom: 16px;
        }
        
        .card-desc {
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
          max-width: 85%;
          color: #57606a;
        }
        
        .overlay-card .card-title, .overlay-card .card-desc {
          color: #ffffff;
        }
        
        .light-card-text-container {
          margin-top: 24px;
        }
        
        /* Bottom row sizing */
        .bottom-small-card {
          min-height: 320px;
        }
        
        .bottom-left-card {
          padding: 32px;
        }

        /* Sparkle icon for sensors card */
        .sparkle-icon {
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 60px;
          height: 60px;
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }
           .hydraulics-card {
             grid-column: span 2;
             min-height: 380px;
             flex-direction: row;
             align-items: center;
          }
          .image-container-top {
            margin-bottom: 0;
            width: 50%;
          }
          .light-card-text-container {
            width: 50%;
            margin-top: 0;
          }
        }
        
        @media (max-width: 768px) {
          .grid-layout {
            grid-template-columns: 1fr;
          }
          .hero-card, .hydraulics-card {
            grid-column: span 1;
          }
          .hydraulics-card {
             flex-direction: column;
             align-items: flex-start;
          }
          .image-container-top {
            width: 100%;
            margin-bottom: 24px;
          }
          .light-card-text-container {
            width: 100%;
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>

      {/* Top Navigation Bar */}
      <div className="navbar-container">
        <div className="navbar-content">

          <div className="logo-section">
            <img src={fineLogo} alt="Fine Logo" className="logo-icon" />
          </div>

          <div className="nav-stretch-bar">
            {/* Search Bar first */}
            <div className="nav-search-wrapper">
              <svg className="search-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" className="search-input" placeholder="Search products..." />
            </div>

            {/* Then Nav Links */}
            <div className="nav-links-inner">
              <span className="nav-item">Product</span>
              <span className="nav-item">About</span>
              <span className="nav-item">Blog</span>
              <span className="nav-item">Contact Us</span>
            </div>

            {/* Finally Login Profile logo */}
            <button className="profile-btn">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="content-wrapper" style={{ paddingTop: '32px' }}>

        <main className="grid-layout">

          {/* Top Left: Main Bearing Showcase */}
          <div className="b2b-card hero-card overlay-card">
            <img
              src="/images/hero_bearings.png"
              alt="Industrial ball bearings"
              className="overlay-bg-img"
              style={{ objectPosition: 'center' }}
            />
            <div className="overlay-content">
              <h2 className="card-title large">Main Bearing Showcase</h2>
              <p className="card-desc">Comprehensive, precision-engineered bearing solutions for all industries.</p>
            </div>
          </div>

          {/* Top Right: Hydraulic Systems */}
          <div className="b2b-card light-card hydraulics-card">
            <div className="light-card-content">
              <div className="image-container-top">
                <img
                  src="/images/hydraulic_valve.png"
                  alt="Hydraulic control valve"
                  style={{ borderRadius: '8px', border: '1px solid #30363d', filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.4))' }}
                />
              </div>
              <div className="light-card-text-container">
                <h2 className="card-title">Hydraulic Systems</h2>
                <p className="card-desc">Heavy-duty power transmission components for high-pressure environments.</p>
              </div>
            </div>
          </div>

          {/* Bottom Left: Linear Motion Systems */}
          <div className="b2b-card bottom-small-card overlay-card bottom-left-card">
            <img
              src="/images/linear_motion.png"
              alt="Linear motion rail guide"
              className="overlay-bg-img"
            />
            <div className="overlay-content" style={{ padding: '32px' }}>
              <h2 className="card-title">Linear Motion Systems</h2>
              <p className="card-desc">High-accuracy rails, guides, and ball screws for smooth positioning.</p>
            </div>
          </div>

          {/* Bottom Center: Pneumatic Solutions */}
          <div className="b2b-card light-card pnuematics-card bottom-small-card">
            <div className="light-card-text-container" style={{ position: 'relative', zIndex: 2, marginTop: '20px' }}>
              <h2 className="card-title">Pneumatic Solutions</h2>
              <p className="card-desc">Efficient compressed air components for automated production lines.</p>
            </div>

            <div className="pneumatics-images" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '30px' }}>
              <img src="/images/pneumatic_valve.png" alt="Valve" style={{ width: '160px', height: '160px', objectFit: 'cover', borderRadius: '12px', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))', border: '1px solid #30363d', marginTop: '40px' }} />
            </div>
          </div>

          {/* Bottom Right: Automation Sensors */}
          <div className="b2b-card light-card sensors-card bottom-small-card">
            <div className="light-card-content" style={{ position: 'relative', zIndex: 2, justifyContent: 'flex-end', height: '100%' }}>
              <h2 className="card-title">Automation Sensors</h2>
              <p className="card-desc">Compact sensor arrays for intelligent motion feedback.</p>
            </div>

            <img
              src="/images/optical_sensor.png"
              alt="Optical sensor chip"
              style={{
                position: 'absolute',
                top: '32px',
                right: '32px',
                width: '140px',
                height: '140px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                transform: 'rotate(12deg)',
                border: '1px solid #30363d'
              }}
            />

            <svg className="sparkle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="white" />
            </svg>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
