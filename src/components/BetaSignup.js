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
            現在βテスト実施中！
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#FFFFFF',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            無料でAIライターくんを試してみてください！
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
            今すぐ試す
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
            βユーザーの皆様へのお願い
          </h3>
          <p style={{
            fontSize: '1.2rem',
            color: '#505F79',
            maxWidth: '1200px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            AIライターくんはより使いやすく満足いただけるサービスを作るため、フィードバックを募集しています。
<br />
新しい機能に関する要望も大歓迎ですので、ぜひ下記フォームよりお寄せください！
          </p>
          <button
            onClick={() => window.location.href = 'https://forms.gle/q8tsXw82Wh6RRhNP6'}
            style={{
              background: '#36B37E',
              background: 'linear-gradient(135deg, #3B82F6, #14B8A6)',
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
            ご要望・フィードバックはこちらから
          </button>
        </div>
      </div>
    </section>
  );
} 