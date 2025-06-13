export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Enhanced AI Capabilities",
      description: "Expanding our AI's understanding of context and nuance for more accurate suggestions"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Gaining deeper insights into your writing patterns and team performance"
    },
    {
      title: "Extended Integration Network",
      description: "Connecting with more of your favorite tools for seamless workflow"
    },
    {
      title: "Custom AI Training",
      description: "Personalized AI models trained on your organization's specific writing style"
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
          Our Roadmap
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#505F79',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          lineHeight: '1.6'
        }}>
          Exciting features and improvements coming your way
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          maxWidth: '800px',
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
            gap: '2.5rem',
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