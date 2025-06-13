export default function Roadmap() {
  const roadmapItems = [
    {
      title: "文章の中身、設定と追加情報を保存できる",
      description: "いつでもどこでもAIライターくんで快適な文章編集ができます！"
    },
    {
      title: "組織管理を導入",
      description: "会社・グループで情報と権限を共有できます！"
    },
    {
      title: "生成AIを利用して文章の文法・言い回しを改修",
      description: "自動補完だけではなく、より柔軟な編集機能を搭載します！"
    },
    {
      title: "RAG機能で会社・個人DBの検索を搭載",
      description: "先端技術で、文章生成の精度をさらに向上します！"
    },
    {
      title: "インターフェースを増えます",
      description: "Chrome等のブラウザーのプラグイン、または入力アプリも期待されます！"
    },
    {
      title: "チャット・メール・ドキュメントDBアプリと連携",
      description: "数多くのコミュニケーションアプリと連携します！"
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
          fontSize: '2.5rem',
          color: '#172B4D',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          今後のアップデート予定を共有します！
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto 4rem'
        }}>
          {/* Vertical Progress Bar */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '100%',
            background: '#DFE1E6',
            borderRadius: '2px'
          }} />

          {/* Roadmap Items */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}>
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  position: 'relative'
                }}
              >
                {/* Progress Dot */}
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#0052CC',
                  border: '3px solid #FFFFFF',
                  boxShadow: '0 0 0 3px #E6FCFF',
                  flexShrink: 0
                }} />

                {/* Content */}
                <div style={{
                  background: '#F4F5F7',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  flex: 1
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    color: '#172B4D',
                    marginBottom: '0.5rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#505F79',
                    lineHeight: '1.5',
                    fontSize: '1rem'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
            🚀
          </div>
          <p style={{
            fontSize: '1.25rem',
            color: '#172B4D',
            fontWeight: '500',
            margin: 0
          }}>
            もっと広い場所でAIライターくんを使えるようになります！
          </p>
        </div>
      </div>
    </section>
  );
} 