export default function Hero() {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(to bottom right, #F4F5F7, #FFFFFF)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '3.5rem',
            color: '#172B4D',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Write Smarter, Communicate Better
          </h1>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#505F79',
            marginBottom: '2rem',
            fontWeight: 'normal'
          }}>
            AI-powered writing assistance for business professionals
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#505F79',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Transform your business communication with our intelligent writing assistant. 
            Save time, reduce errors, and maintain professional standards across all your messages.
          </p>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#0052CC',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{
            background: '#F4F5F7',
            borderRadius: '8px',
            padding: '2rem',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p style={{ color: '#505F79' }}>Product Demo GIF/Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
} 