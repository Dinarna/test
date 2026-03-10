import './index.css';

function App() {
  return (
    <>
      <div className="background-decor">
        {/* SVG Waves mimicking the design */}
        <svg
          className="bg-shape shape-1"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 0H1440V1024H0V0Z" fill="url(#paint0_linear)" />
          <path
            d="M1440 0C1440 0 1152.09 174.195 1060.03 346.901C967.97 519.608 970.669 660.841 859.577 824.162C748.484 987.483 540.384 1024 540.384 1024H1440V0Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M0 1024C0 1024 287.905 849.805 379.967 677.099C472.03 504.392 469.331 363.159 580.423 199.838C691.516 36.5168 899.616 0 899.616 0H0V1024Z"
            fill="url(#paint2_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="1440"
              y2="1024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2D52D2" />
              <stop offset="1" stopColor="#1F3BA3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="1440"
              y1="0"
              x2="540.384"
              y2="1024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F3BA3" stopOpacity="0.3" />
              <stop offset="1" stopColor="#2D52D2" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="0"
              y1="1024"
              x2="899.616"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3A64E3" stopOpacity="0.4" />
              <stop offset="1" stopColor="#2D52D2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Additional rounded shapes from image */}
        <svg
          className="bg-shape shape-2"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="0"
            cy="400"
            r="300"
            stroke="#3A64E3"
            strokeWidth="40"
            strokeOpacity="0.2"
          />
          <circle
            cx="0"
            cy="400"
            r="400"
            stroke="#3A64E3"
            strokeWidth="60"
            strokeOpacity="0.1"
          />
        </svg>
      </div>

      <div className="login-container">
        <div className="logo">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 4h2l3.6 10h10l2-8H8" />
            <path d="M12 4v8" />
            <path d="M9 7l3-3 3 3" />
            <circle cx="10" cy="20" r="1.5" />
            <circle cx="17" cy="20" r="1.5" />
          </svg>
        </div>

        <form className="login-form">
          <div className="input-group">
            <i className="ph ph-user"></i>
            <input id="username" type="text" placeholder="USERNAME" required />
          </div>

          <div className="input-group">
            <i className="ph ph-lock-key"></i>
            <input id="password" type="password" placeholder="PASSWORD" required />
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>

          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </form>
      </div>
    </>
  );
}

export default App;
