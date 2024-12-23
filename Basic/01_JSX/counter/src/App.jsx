import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'

import React from 'react'

const minus = () => { 
  alert('-');
}

const plus = () => { 
  alert('+');
}

const App = () => {
  // state 정의
  // - state : data 
  // - 업데이트 함수 :  setData
  const [data, setData] = useState(0)

  const count = (value) => {
    setData(data + value)
  }

  return (
    <div className="container">
      <h1 className="header">카운터 앱</h1>
      <div className="counter">
        {/* 클릭 이벤트 시, 함수 호출이 아니라 함수 정의로 지정 */}
        <button className='btn' onClick={ () => count(-1) }>-</button>
        {/* {} 표현식으로 JS 변수, 함수 등을 출력 */}
        <span className="count">{ data }</span>
        <button className='btn' onClick={ () => count(1) }>+</button>
      </div>
    </div>
  )
}

export default App