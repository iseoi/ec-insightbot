export default function Trends() {
  const data = [
    { title: '시장 동향 보고서', desc: '최신 시장 트렌드 리포트.' },
    { title: '소비자 행동 분석', desc: '소비자 패턴 및 분석 자료.' },
    { title: '리서치 데이터', desc: '업계 리서치 및 통계 데이터.' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>트렌드 리포트</h1>
      <p style={{ marginBottom: '2rem' }}>
        업계 동향과 리서치 리포트를 한눈에 확인하세요.
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
