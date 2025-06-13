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
            ビジネスの<br></br>「伝いたい」を、<br></br>「伝わる」に。
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#505F79',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            ビジネスパーソンの時間を本業に集中させるため、書類仕事を効率化する毎日使いのAIアシスタント。
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
           今すぐ試す
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