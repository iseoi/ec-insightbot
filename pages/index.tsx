import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>EC 기획실 InsightBot</h1>
      <p style={{ marginBottom: '2rem' }}>
        👋 안녕하세요! 이곳에서 자료 조사, 정책 비교, 사례 수집을 한눈에 볼 수 있어요.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/policy" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={cardStyle}>
            <h3 style={titleStyle}>정책 비교</h3>
            <p style={descStyle}>다양한 이커머스 정책을 쉽게 비교하세요.</p>
          </div>
        </Link>

        <Link href="/cases" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={cardStyle}>
            <h3 style={titleStyle}>사례 수집</h3>
            <p style={descStyle}>최신 사례를 빠르게 검색 및 요약합니다.</p>
          </div>
        </Link>

        <Link href="/trends" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={cardStyle}>
            <h3 style={titleStyle}>트렌드 리포트</h3>
            <p style={descStyle}>업계 동향과 리서치 리포트를 한눈에!</p>
          </div>
        </Link>
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
