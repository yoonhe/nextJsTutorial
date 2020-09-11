import Layout from '../components/layout';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  console.log('App component pageProps ? ', pageProps);
  console.log('App component Component ? ', Component);
  return <Component {...pageProps} />;
}

// 'App' 컴포넌트는 다른 모든 페이지에서 공통으로 사용할 최상위 레벨 컴포넌트 입니다.
// 예를 들면 이 'App' 컴포넌트를 사용해 페이지 간을 탐색할 때, 컴포넌트의 state 를 유지할 수 있습니다.
