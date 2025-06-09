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
          justifyContent: 'center'
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
      </div>
    </section>
  );
} 