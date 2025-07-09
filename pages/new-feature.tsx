import Link from 'next/link';

export default function NewFeature() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>🚀 새로운 기능 페이지</h1>
      <p>이곳은 1-2 단계에서 추가한 새로운 페이지입니다.</p>

      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <button style={buttonStyle}>🏠 홈으로 돌아가기</button>
      </Link>
    </div>
  );
}

const buttonStyle = {
  marginTop: '1rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
