import React from 'react';
import fineLogo from '../assets/WhatsApp Image 2026-04-14 at 11.14.49 AM.jpeg';

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
          padding: 12px 0;
        }

        /* --- Brand Showcase Section --- */
        .brands-section {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid #d0d7de;
          border-bottom: 2px solid #e86e25; 
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          z-index: 10;
          grid-column: span 3;
          margin-top: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
          padding: 40px 0; /* Increased vertical padding */
        }

        .brands-header {
          text-align: center;
          font-size: 15px; /* Slightly larger */
          font-weight: 700;
          color: #57606a;
          letter-spacing: 3px; /* More emphasis */
          margin-bottom: 28px;
          text-transform: uppercase;
        }

        .brands-ticker {
          display: flex;
          overflow: hidden;
          position: relative;
        }

        .ticker-track {
          display: flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
          width: fit-content;
          gap: 40px;
          padding-left: 40px;
        }

        .brands-section:hover .ticker-track {
          animation-play-state: paused;
        }

        .brand-logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 190px;
          height: 85px;
          background: #f6f8fa;
          border: 1px solid #d0d7de;
          border-radius: 10px;
          color: #1f2328;
          font-size: 34px; /* Significantly larger impact */
          font-weight: 800;
          letter-spacing: 5px;
          transition: all 0.3s ease;
          user-select: none;
        }

        .brand-logo-card:hover {
          background: #ffffff;
          border-color: #e86e25;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(232, 110, 37, 0.1);
          color: #e86e25;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* --- Featured Products Section --- */
        .featured-section {
          grid-column: span 3;
          margin-top: 48px;
          padding-bottom: 60px;
        }

        .section-heading-group {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
          border-left: 4px solid #e86e25;
          padding-left: 20px;
        }

        .section-title {
          font-size: 28px;
          font-weight: 800;
          color: #1f2328;
          margin: 0;
        }

        .section-subtitle {
          font-size: 14px;
          color: #57606a;
          margin-top: 4px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .featured-card {
          background: #ffffff;
          border: 1px solid #d0d7de;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
        }

        .featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.06);
          border-color: #e86e25;
        }

        .product-image-box {
          width: 100%;
          aspect-ratio: 1/1;
          background: #f6f8fa;
          border-radius: 8px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d0d7de;
          font-weight: 800;
          font-size: 48px;
        }

        .product-tag {
          font-size: 11px;
          font-weight: 700;
          color: #e86e25;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .product-name {
          font-size: 17px;
          font-weight: 700;
          color: #1f2328;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .product-spec {
          font-size: 13px;
          color: #57606a;
          margin-bottom: 20px;
        }

        .quote-btn {
          margin-top: auto;
          background: #f6f8fa;
          color: #1f2328;
          border: 1px solid #d0d7de;
          padding: 10px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          display: block;
          width: 100%;
        }

        .featured-card:hover .quote-btn {
          background: #e86e25;
          color: #ffffff;
          border-color: #e86e25;
        }

        .ticker-item span {
          margin: 0 15px;
          color: #e86e25;
          font-weight: 800;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .ticker-item {
            font-size: 12px;
            padding: 0 20px;
          }
          .ticker-track {
            animation-duration: 50s; /* Slower on mobile */
          }
        }

        /* --- Transparent Floating Header --- */
        .navbar-container {
          width: 100%;
          margin: 0;
          padding: 8px 0;
          display: flex;
          justify-content: center;
          position: sticky;
          top: 0; 
          z-index: 50;
          background: #ffffff;
          border-bottom: 1px solid #d0d7de;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .navbar-content {
          width: 94%;
          max-width: 1536px;
          display: flex;
          justify-content: space-between; /* Evenly spaces Logo, Search, and Links/Profile */
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

        .logo-icon {
          height: 60px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
          mix-blend-mode: multiply; 
        }

        .navbar-right-group {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* Search Bar - Simple Version */
        .nav-search-wrapper {
          display: flex;
          align-items: center;
          background: #f6f8fa;
          border: 1px solid #d0d7de;
          border-radius: 9999px; /* Pill shaped edges */
          padding: 10px 24px;   /* Bigger padding */
          gap: 12px;
          width: 500px;         /* Increased width */
          transition: all 0.2s ease;
        }

        .nav-search-wrapper:focus-within {
          border-color: #e86e25;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(232, 110, 37, 0.1);
        }

        .search-icon {
          color: #57606a;
          flex-shrink: 0;
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: #1f2328;
          font-size: 14px;
          width: 100%;
        }

        .nav-links-inner {
          display: flex;
          gap: 12px;
        }

        .nav-item {
          cursor: pointer;
          color: #4d535b;
          font-weight: 500;
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          color: #e86e25;
          background: #f6f8fa;
        }

        .profile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: #f6f8fa;
          color: #1f2328;
          border: 1px solid #d0d7de;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .profile-btn:hover {
          background: #ffffff;
          border-color: #e86e25;
          color: #e86e25;
        }


        /* Main B2B Grid */
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
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

          {/* Logo */}
          <div className="logo-section">
            <img src={fineLogo} alt="Fine Logo" className="logo-icon" />
          </div>

          {/* Search Bar - Stays near the logo or center */}
          <div className="nav-search-wrapper">
            <svg className="search-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" className="search-input" placeholder="Search products..." />
          </div>

          {/* Nav Links and Profile pushed to the RIGHT side */}
          <div className="navbar-right-group">
            <div className="nav-links-inner" style={{ gap: '24px' }}>
              <span className="nav-item">Product</span>
              <span className="nav-item">About</span>
              <span className="nav-item">Blog</span>
              <span className="nav-item">Contact Us</span>
            </div>

            <button className="profile-btn">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="content-wrapper" style={{ paddingTop: '16px' }}>

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

          {/* Brand Showcase Section After the 5 Boxes */}
          <div className="brands-section">
            <div className="brands-header">Trusted Brands We Deal In</div>
            <div className="brands-ticker">
              <div className="ticker-track">
                {['SKF', 'FAG', 'TIMKEN', 'NSK', 'NTN', 'KOYO', 'NACHI', 'SKF', 'FAG', 'TIMKEN', 'NSK', 'NTN', 'KOYO', 'NACHI'].map((brand, idx) => (
                  <div key={idx} className="brand-logo-card">{brand}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Products Section */}
          <section className="featured-section">
            <div className="section-heading-group">
              <div>
                <h2 className="section-title">Featured Selections</h2>
                <p className="section-subtitle">Premium Industrial Spares Ready for Shipment</p>
              </div>
              <div style={{ color: '#e86e25', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>View All Products →</div>
            </div>

            <div className="featured-grid">
              {/* Product 1 */}
              <div className="featured-card">
                <div className="product-image-box">BE</div>
                <div className="product-tag">Bearings</div>
                <div className="product-name">SKF Deep Groove Ball Bearing 6205-2Z</div>
                <div className="product-spec">Precision: P6 • High-Speed Steel</div>
                <button className="quote-btn">Request Quote</button>
              </div>

              {/* Product 2 */}
              <div className="featured-card">
                <div className="product-image-box">SL</div>
                <div className="product-tag">Oil Seals</div>
                <div className="product-name">Double-Lip Viton Oil Seal (TC Style)</div>
                <div className="product-spec">Temp Resistance: -40°C to 200°C</div>
                <button className="quote-btn">Request Quote</button>
              </div>

              {/* Product 3 */}
              <div className="featured-card">
                <div className="product-image-box">HY</div>
                <div className="product-tag">Hydraulics</div>
                <div className="product-name">Parker PGP Series Gear Pump</div>
                <div className="product-spec">Max Pressure: 250 Bar • Cast Iron</div>
                <button className="quote-btn">Request Quote</button>
              </div>

              {/* Product 4 */}
              <div className="featured-card">
                <div className="product-image-box">LM</div>
                <div className="product-tag">Linear</div>
                <div className="product-name">HIWIN HG Series Linear Guideway</div>
                <div className="product-spec">Self-aligning • Heavy Load Capability</div>
                <button className="quote-btn">Request Quote</button>
              </div>
            </div>
          </section>

          {/* Top Selling Products Section */}
          <section className="featured-section" style={{ marginTop: '0', paddingTop: '48px', borderTop: '1px solid #d0d7de' }}>
            <div className="section-heading-group">
              <div>
                <h2 className="section-title">Top Selling Items</h2>
                <p className="section-subtitle">Most Requested Spares This Month</p>
              </div>
              <div style={{ color: '#e86e25', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>View Top Sellers →</div>
            </div>

            <div className="featured-grid">
              {/* Top Item 1 */}
              <div className="featured-card">
                <div className="product-image-box" style={{ background: '#fdf3ed', color: '#e86e25' }}>SK</div>
                <div className="product-tag">Spherical Roller</div>
                <div className="product-name">SKF 22218-E Explorer Bearing</div>
                <div className="product-spec">Increased Load Rating • Long Life</div>
                <button className="quote-btn">Request Quote</button>
              </div>

              {/* Top Item 2 */}
              <div className="featured-card">
                <div className="product-image-box" style={{ background: '#fdf3ed', color: '#e86e25' }}>FA</div>
                <div className="product-tag">Deep Groove</div>
                <div className="product-name">FAG 6206-C3 High Speed Bearing</div>
                <div className="product-spec">Optimized Internal Geometry</div>
                <button className="quote-btn">Request Quote</button>
              </div>

              {/* Top Item 3 */}
              <div className="featured-card">
                <div className="product-image-box" style={{ background: '#fdf3ed', color: '#e86e25' }}>TM</div>
                <div className="product-tag">Tapered</div>
                <div className="product-name">Timken 30205 Single Row Bearing</div>
                <div className="product-spec">High Radial & Axial Load Support</div>
                <button className="quote-btn">Request Quote</button>
              </div>

              {/* Top Item 4 */}
              <div className="featured-card">
                <div className="product-image-box" style={{ background: '#fdf3ed', color: '#e86e25' }}>NS</div>
                <div className="product-tag">Shielded</div>
                <div className="product-name">NSK 6305-ZZ Shielded Ball Bearing</div>
                <div className="product-spec">Deep Groove • Greased for Life</div>
                <button className="quote-btn">Request Quote</button>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Home;
