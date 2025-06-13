export default function PainPoints() {
    const painPoints = [
      {
        name: "AIライターくんを使えば、文章作成の負担を一気に軽減できます！",
        image: "/images/profile1.jpg", // You'll need to add these images
        painPoint: "文章を書く時間に追われない！",
        description: "- 時間を取られて業務に集中できない...<br />-毎回文章をゼロから考えるのがしんどい...<br />- 適切なトーンで伝えるのに悩んでる..."
      },
      {
        name: "AIライターくんなら、敬語レベルも自由に調整！あなたの代わりに“ちょうどいい”文章を生成します。",
        image: "/images/profile2.jpg",
        painPoint: "相手や場面に応じた表現、悩んでいます！",
        description: "- この言い回し、少しフランクすぎないかな？<br />- 社内用とお客様向けで文体を切り替えたいけど、面倒くさい<br />- 言葉遣いのせいで、印象が悪くならないか心配"
      },
      {
        name: "AIライターくんなら、カスタム設定であなた仕様にカスタマイズ可能！",
        image: "/images/profile3.jpg",
        painPoint: "汎用AIでは、あなたらしい表現が出てこないことも…",
        description: "- 決まったプロンプトだと、いつも同じような文章になる<br />- 自分の言い回しやスタイルを反映させたい<br />- よく使う言葉や構成を覚えてくれるツールがあったらいいのに"
      },
    ];
  
    return (
      <section style={{
        padding: '6rem 2rem',
        background: '#F8F9FA'
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
            ビジネス文章の悩みを解決したい！
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            alignItems: 'start',
            marginBottom: '4rem'
          }}>
            {painPoints.map((point, index) => (
              <div
                key={index}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  border: '4px solid #E6FCFF'
                }}>
                  <img
                    src={point.image}
                    alt={point.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h4 style={{
                  fontSize: '1.2rem',
                  color: '#172B4D',
                  marginBottom: '0.5rem'
                }}>
                  {point.painPoint}
                </h4>
                <p style={{
                  color: '#505F79',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem'
                }}
                dangerouslySetInnerHTML={{ __html: point.description }}
                >
                </p>
                <div style={{
                  borderTop: '1px solid #DFE1E6',
                  paddingTop: '1.5rem',
                  width: '100%'
                }}>
                  <p style={{
                    fontWeight: 'bold',
                    color: '#172B4D',
                    marginBottom: '0.25rem'
                  }}>
                    {point.name}
                  </p>
                </div>
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
              💬
            </div>
            <p style={{
              fontSize: '1.25rem',
              color: '#172B4D',
              fontWeight: '500',
              margin: 0
            }}>
              AIライターくんを使えば解決できます！
            </p>
          </div>
        </div>
      </section>
    );
  }