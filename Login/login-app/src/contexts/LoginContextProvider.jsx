import React, { Children, createContext, useEffect, useState } from 'react'

// 📦 컨텍스트 생성
export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {

  // 🔐 로그인 여부
  const [isLogin, setIsLogin] = useState(false)

  // 🌞 로그아웃 함수
  const logout = () => {
    setIsLogin(false)
  }


  return (
    // 컨텍스트 값 지정 ➡ value={ ?, ? }
    <LoginContext.Provider value={ { isLogin, logout } }>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider