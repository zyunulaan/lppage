export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI writing assistant work?",
      answer: "Our AI writing assistant uses advanced natural language processing to analyze your text in real-time. It provides suggestions for grammar, style, tone, and clarity while maintaining your unique voice. The system learns from your preferences and adapts to your writing style over time."
    },
    {
      question: "Is my content secure and private?",
      answer: "Yes, we take data security very seriously. All content is encrypted in transit and at rest. We never share your content with third parties, and our enterprise-grade security measures ensure your data remains confidential and protected at all times."
    },
    {
      question: "Can I integrate this with my existing tools?",
      answer: "Absolutely! Our platform offers seamless integration with popular email clients, content management systems, and productivity tools. We provide APIs and plugins for easy integration, and our team can help you set up custom integrations for your specific needs."
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
          marginBottom: '3rem'
        }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
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
                cursor: 'pointer',
                ':hover': {
                  transform: 'translateY(-2px)'
                }
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
      </div>
    </section>
  );
} 