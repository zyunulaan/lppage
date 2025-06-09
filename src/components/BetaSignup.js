export default function BetaSignup() {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#F4F5F7'
    }}>
      {/* Beta Signup Section - Full Width */}
      <div style={{
        background: '#0052CC',
        padding: '4rem 2rem',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#FFFFFF',
            marginBottom: '1rem'
          }}>
            Join Our Beta Program
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#FFFFFF',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            We're excited to have you on board! Be among the first to experience our AI-powered writing assistant and help shape its future.
          </p>
          <button
            onClick={() => window.location.href = '/signup'}
            style={{
              background: '#FFFFFF',
              color: '#0052CC',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              fontWeight: '500',
              ':hover': {
                background: '#F4F5F7'
              }
            }}
          >
            Sign Up for Free Beta Access
          </button>
        </div>
      </div>

      {/* Feedback Section - Card */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '3rem',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#172B4D',
            marginBottom: '1rem'
          }}>
            Help Us Improve
          </h3>
          <p style={{
            fontSize: '1.2rem',
            color: '#505F79',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Your feedback is invaluable to us. Share your ideas, requirements, and suggestions through our feedback questionnaire. Together, we can build the perfect writing assistant for your needs.
          </p>
          <button
            onClick={() => window.location.href = 'https://forms.example.com/feedback'}
            style={{
              background: '#36B37E',
              color: '#FFFFFF',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              ':hover': {
                background: '#2E9D6E'
              }
            }}
          >
            Share Your Feedback
          </button>
        </div>
      </div>
    </section>
  );
} 