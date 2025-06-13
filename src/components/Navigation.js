export default function Navigation() {
  return (
    <nav style={{
      padding: '1rem 2rem',
      background: '#FFFFFF',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0052CC' }}>
          Logo
        </div>
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <button style={{
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, #3B82F6, #14B8A6)',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            ご要望があればこちらから
          </button>          
          <button style={{
            padding: '0.5rem 1rem',
            background: '#0052CC',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            新規登録・ログイン
          </button>
        </div>
      </div>
    </nav>
  );
} 