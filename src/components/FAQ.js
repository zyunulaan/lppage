export default function FAQ() {
  const faqs = [
    {
      question: "AIライターくんは完全無料ですか？",
      answer: "現在は完全無料ですので、各ユーザーが補完を利用する制限を設けております。新機能の実装と伴い、サブスクリプションでより高い性能を提供することをご期待ください。"
    },
    {
      question: "個人情報を利用方針は？",
      answer: "AIライターくんは、個人情報・プライバシーを重視しております。詳細について、こちら<利用規約リンク>でご確認お願いします。"
    },
    {
      question: "APIプラットフォーム、もしくはプラグインにも対応していますか？",
      answer: "こちらの機能は予定がありますので、ぜひお楽しみください。"
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#FFFFFF'
    }}>
      <div style={{
        maxWidth: '1200px',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#172B4D',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          FAQ
        </h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          textAlign: 'left',
        }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: '#F4F5F7',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                color: '#172B4D',
                marginBottom: '1rem'
              }}>
                {faq.question}
              </h3>
              <p style={{
                color: '#505F79',
                lineHeight: '1.6',
                fontSize: '1.1rem'
              }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <button
            onClick={() => window.location.href = 'https://forms.gle/q8tsXw82Wh6RRhNP6'}
            style={{
              background: '#36B37E',
              background: '#0052CC',
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
            お問い合わせはこちら
          </button>
      </div>
    </section>
  );
} 