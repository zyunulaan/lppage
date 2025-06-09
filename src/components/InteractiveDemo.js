export default function InteractiveDemo() {
  const features = [
    {
      title: "Real-time Suggestions",
      subtitle: "Instant feedback as you type",
      description: "Get immediate suggestions for improving your writing, from grammar corrections to tone adjustments."
    },
    {
      title: "Smart Templates",
      subtitle: "Pre-built for common scenarios",
      description: "Access a library of professional templates for various business scenarios, customizable to your needs."
    },
    {
      title: "Analytics Dashboard",
      subtitle: "Track your writing performance",
      description: "Monitor your team's writing patterns and improvements over time with detailed analytics."
    },
    {
      title: "Team Collaboration",
      subtitle: "Work together seamlessly",
      description: "Share and collaborate on documents with your team members in real-time."
    },
    {
      title: "Custom Branding",
      subtitle: "Maintain brand consistency",
      description: "Apply your company's style guide automatically to all communications."
    },
    {
      title: "Integration Ready",
      subtitle: "Works with your tools",
      description: "Seamlessly integrates with popular email clients and productivity tools."
    },
    {
      title: "Security First",
      subtitle: "Enterprise-grade protection",
      description: "Your data is protected with industry-leading security measures."
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#F4F5F7',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '2400px',
        margin: '0 auto',
        display: 'flex',
        gap: '4rem'
      }}>
        <div style={{ 
          flex: 1,
          maxHeight: '80vh',
          overflowY: 'auto',
          paddingRight: '1rem',
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none', // IE and Edge
          '&::-webkit-scrollbar': { // Chrome, Safari, Opera
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