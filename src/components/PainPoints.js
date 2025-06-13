export default function PainPoints() {
    const painPoints = [
      {
        name: "Sarah Chen",
        role: "Content Marketing Manager",
        image: "/images/profile1.jpg", // You'll need to add these images
        painPoint: "Time-consuming content creation",
        description: "I spend hours crafting the perfect message, only to realize it doesn't align with our brand voice. The back-and-forth revisions are exhausting and delay our content calendar."
      },
      {
        name: "Michael Rodriguez",
        role: "Sales Team Lead",
        image: "/images/profile2.jpg",
        painPoint: "Inconsistent communication",
        description: "Our team's emails and proposals lack consistency. Each rep has their own style, making it hard to maintain our professional image and close deals effectively."
      },
      {
        name: "Emma Thompson",
        role: "HR Director",
        image: "/images/profile3.jpg",
        painPoint: "Brand voice compliance",
        description: "Ensuring all company communications follow our brand guidelines is a constant challenge. Manual reviews are time-consuming and often miss subtle tone inconsistencies."
      }
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
          <p style={{
            fontSize: '1.2rem',
            color: '#505F79',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 4rem',
            lineHeight: '1.6'
          }}>
            Real problems faced by professionals like you, solved with our AI-powered writing assistant
          </p>
  
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
                <h3 style={{
                  fontSize: '1.8rem',
                  color: '#172B4D',
                  marginBottom: '0.5rem'
                }}>
                  {point.painPoint}
                </h3>
                <p style={{
                  color: '#505F79',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '1.1rem'
                }}>
                  {point.description}
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
                  <p style={{
                    color: '#6B778C',
                    fontSize: '0.9rem'
                  }}>
                    {point.role}
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
              Join thousands of teams who trust us to improve their communication
            </p>
          </div>
        </div>
      </section>
    );
  }