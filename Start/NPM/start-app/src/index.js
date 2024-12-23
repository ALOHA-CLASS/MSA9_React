import React from 'react';
import ReactDOM from 'react-dom/client';

// 컴포넌트 import
// ⭐ package.json 에서 type 속성이 module 로 되어 있으면 확장자 까지 명시
//                      type 속성 제거하면 확장자 생략 가능
import App from "./App";

// 메인 화면에서 App 컴포넌트를 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


