export default function Features() {
  const features = [
    {
      title: "Smart Writing Assistant",
      description: "AI-powered suggestions that help you craft professional messages quickly and effectively.",
      icon: "✍️"
    },
    {
      title: "Error Prevention",
      description: "Automatically catch and correct grammar, tone, and style issues before sending.",
      icon: "✅"
    },
    {
      title: "Team Collaboration",
      description: "Share templates and best practices across your organization for consistent communication.",
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
          Why Teams Choose Us
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