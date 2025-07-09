export default function Policy() {
  const data = [
    { title: '무료 반품 정책', desc: '주요 플랫폼의 무료 반품 정책 비교.' },
    { title: '배송비 정책', desc: '각 플랫폼의 배송비 부과 기준.' },
    { title: '프로모션 운영', desc: '이커머스 프로모션 정책 정리.' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>정책 비교</h1>
      <p style={{ marginBottom: '2rem' }}>
        주요 이커머스 정책을 한눈에 비교해보세요.
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data.map((item, idx) => (
          <div key={idx} style={cardStyle}>
            <h3 style={titleStyle}>{item.title}</h3>
            <p style={descStyle}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  width: '250px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  cursor: 'pointer',
};

const titleStyle = { fontSize: '14px', margin: '0 0 0.5rem 0' };
const descStyle = { fontSize: '12px', margin: 0 };
