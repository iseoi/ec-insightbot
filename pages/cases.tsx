export default function Cases() {
  const data = [
    { title: '쿠팡 로켓배송', desc: '빠른 배송 서비스 사례 분석.' },
    { title: '네이버 스마트스토어', desc: '중소기업 성장 지원 사례.' },
    { title: '11번가 글로벌 쇼핑', desc: '해외직구 전략 사례.' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>사례 수집</h1>
      <p style={{ marginBottom: '2rem' }}>
        최신 이커머스 사례를 한눈에 확인해보세요.
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
