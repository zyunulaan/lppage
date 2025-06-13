export default function Features() {
  const features = [
    {
      title: "文章を書きながら自動補完する",
      description: "迷ったときに、自動補完が出てきます！ショートカットで、好きな生成結果を選べます！",
      icon: "✍️"
    },
    {
      title: "補完のトーンとスタイルを変更する",
      description: "設定パネルで、丁寧さ・目的・詳細な情報を追加することは可能！",
      icon: "🎯"
    },
    {
      title: "やり取りを参照して",
      description: "参照したい文章・コミュニケーション履歴を張り付けて、コンテキストを理解したAIライターくんで気楽に補完しよう！",
      icon: "👥"
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#FFFFFF'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#172B4D',
          marginBottom: '3rem'
        }}>
          AIライターくんの機能を紹介します！
        </h2>
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          marginBottom: '4rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                padding: '2rem',
                background: '#F4F5F7',
                borderRadius: '8px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#172B4D',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#505F79',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Message Card */}
        <div style={{
          background: '#F4F5F7',
          borderRadius: '12px',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            background: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            ✨
          </div>
          <p style={{
            fontSize: '1.25rem',
            color: '#172B4D',
            fontWeight: '500',
            margin: 0
          }}>
            ビジネスシーンに最適な入力支援ツールです！
          </p>
        </div>
      </div>
    </section>
  );
} 