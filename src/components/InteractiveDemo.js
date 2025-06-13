export default function InteractiveDemo() {
  const features = [
    {
      title: "爆速の自動補完でスムーズな書く体験をもらえる！",
      subtitle: "Instant completion as you type",
      description: "AIライターくんが入力停止を検知し、一秒で補完された文章が現れます。※初期化に少し延長する可能性があります。"
    },
    {
      title: "過去のやりとりを踏まえた文章生成！",
      subtitle: "Text generation based on past communications",
      description: "過去のメッセージや会話の文脈を理解し、より自然で一貫性のある文章を生成します。"
    },
    {
      title: "補完の長さを自由に設定できる！",
      subtitle: "Customize completion length to your needs",
      description: "短い補完から長文まで、用途に応じて自由に長さを調整できます。"
    },
    {
      title: "最も適切な丁寧さで補完することが可能！",
      subtitle: "Generate text with the perfect level of politeness",
      description: "適切な丁寧さのレベルを調整し、自然なコミュニケーションを実現します。"
    },
    {
      title: "明確な目的で文章を作成しよう！",
      subtitle: "Create text with clear purpose and intent",
      description: "目的に応じて、感謝・説明・確認など、最適な言い回しを選択し、効果的な文章を生成します。"
    },
    {
      title: "文章の種類を設定し、フォーマットを自動調整！",
      subtitle: "Configure the most appropriate format based on document type",
      description: "メール、メッセージ、報告書、議事録など、目的に応じた最適なフォーマットで文章を生成します。"
    },
    {
      title: "情報を補充して、トーンをより改善！",
      subtitle: "Add necessary information to polish the tone",
      description: "必要な情報を追加することで、より自然で適切なトーンの文章を生成できます。"
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#F4F5F7',
      minHeight: '100vh',
      position: 'relative'
    }}>
    <h2 style={{
      fontSize: '2.5rem',
      color: '#172B4D',
      textAlign: 'center',
      marginBottom: '1rem'
    }}>
      AIライターくんが役に立つこと
    </h2>
      <div style={{
        maxWidth: '2400px',
        margin: '0 auto',
        display: 'flex',
        gap: '4rem'
      }}>
        <div style={{ 
          flex: 1,
          maxHeight: '80vh',
          overflowY: 'scroll',
          paddingRight: '1rem',
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none', // IE and Edge
          '&::WebkitScrollbar': { // Chrome, Safari, Opera
            display: 'none'
          }
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: '1.5rem',
                background: '#FFFFFF',
                borderRadius: '8px',
                marginBottom: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{
                fontSize: '1.2rem',
                color: '#172B4D',
                marginBottom: '0.5rem'
              }}>
                {feature.title}
              </h3>
              <h4 style={{
                fontSize: '1rem',
                color: '#0052CC',
                marginBottom: '0.5rem'
              }}>
                {feature.subtitle}
              </h4>
              <p style={{
                color: '#505F79',
                lineHeight: '1.4',
                fontSize: '0.9rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div style={{
          flex: 1,
          position: 'sticky',
          top: '100px',
          height: 'fit-content',
          alignSelf: 'flex-start'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              background: '#F4F5F7',
              borderRadius: '8px',
              padding: '2rem',
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p style={{ color: '#505F79' }}>Video Player Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 