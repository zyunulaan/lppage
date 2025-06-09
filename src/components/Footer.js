export default function Footer() {
  return (
    <footer style={{
      background: '#172B4D',
      color: '#FFFFFF',
      padding: '4rem 2rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              color: '#FFFFFF'
            }}>
              Company
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Careers
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              color: '#FFFFFF'
            }}>
              Product
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Features
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Pricing
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              color: '#FFFFFF'
            }}>
              Resources
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Documentation
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Support
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              color: '#FFFFFF'
            }}>
              Legal
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Privacy Policy
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Terms of Service
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ color: '#B6C2CF' }}>
            © 2024 AI Writing Assistant. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
              Twitter
            </a>
            <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
              LinkedIn
            </a>
            <a href="#" style={{ color: '#B6C2CF', textDecoration: 'none', ':hover': { color: '#FFFFFF' } }}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 