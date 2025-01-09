import React, { createContext, useEffect, useState } from 'react'
import * as auth from '../apis/auth'
import Cookies from 'js-cookie'
import api from '../apis/api'
import * as Swal from '../apis/alert'
import { useNavigate } from 'react-router-dom'

// 📦 컨텍스트 생성
export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {

  // 🔄 로딩중
  const [isLoading, setIsLoading] = useState(true)
  // 🔐 로그인 여부
  const [isLogin, setIsLogin] = useState( () => {
    const savedIsLogin = localStorage.getItem("isLogin")
    return savedIsLogin ?? false
  } )
  // 👩‍💼 사용자 정보 
  const [userInfo, setUserInfo] = useState( () => {
    const savedUserInfo = localStorage.getItem("userInfo")
    return savedUserInfo ? JSON.parse(savedUserInfo) : null
  })
  // 💎 권한 정보
  const [roles, setRoles] = useState( () => {
    const savedRoles = localStorage.getItem("roles")
    return savedRoles ? JSON.parse(savedRoles) : {isUser : false, isAdmin : false}
  } )

  // 페이지 이동
  const navigate = useNavigate()


  // 🔐 로그인 함수
  const login = async (username, password) => {
    console.log(`username : ${username}`);
    console.log(`password) : ${password}`);

    try {
      const response = await auth.login(username, password)
      const data = response.data      // 👩‍💼 {user}
      const status = response.status
      const headers = response.headers
      const authorization = headers.authorization
      const jwt = authorization.replace("Bearer ", "")

      console.log(`data : ${data}`);
      console.dir(data)
      console.log(`status : ${status}`);
      console.log(`headers : ${headers}`);
      console.log(`authorization : ${authorization}`);
      console.log(`jwt : ${jwt}`);

      // 로그인 성공 ✅
      if( status == 200 ) {

        // 💍 JWT 를 쿠키에 등록
        Cookies.set("jwt", jwt, { expires: 5 })  // 5일후 만료

        // 로그인 세팅 -  loginSetting(🎫💍, 👩‍💼)
        loginSetting(authorization, data)
        
        // 로그인 성공 alert
        Swal.alert('로그인 성공', '메인 화면으로 이동합니다.', 'success',
          () => navigate("/")
        )

      }

    } catch (error) {
      // 로그인 실패 alert
      Swal.alert('로그인 실패', '아이디 또는 비밀번호가 일치하지 않습니다', 'error')
      console.log(`로그인 실패`);
    }
    
  }

  // 🌞 로그아웃 함수
  const logout = (force=false) => {
    // 강제 로그아웃
    if( force ) {
      // 로딩중
      setIsLoading(true)
      // 로그아웃 세팅
      logoutSetting()
      // 페이지 이동 ➡ "/" (메인)
      navigate("/")
      // 로딩끝
      setIsLoading(false)
      return
    }
    // 로그아웃 확인
    Swal.confirm("로그아웃하시겠습니까?", "로그아웃을 진행합니다", "warning",
      (result) => {
        if( result.isConfirmed ) {
          Swal.alert("로그아웃 성공", "로그아웃 되었습니다.", 'success')
          // 로그아웃 세팅
          logoutSetting()
          // 페이지 이동 ➡ "/" (메인)
          navigate("/")
          return
        }
      }
    )
   
  }

  // 로그아웃 세팅
  const logoutSetting = () => {

    // 🎫 Authorization 헤더 초기화
    api.defaults.headers.common.Authorization = undefined

    // 🔐❌ 로그인 여부 : false
    setIsLogin(false)
    localStorage.removeItem("isLogin")

    // 👩‍💼❌ 유저 정보 초기화
    setUserInfo(null)
    localStorage.removeItem("userInfo")

    // 👮‍♀️❌ 권한 정보 초기화
    setRoles( {isUser: false, isAdmin: false} )
    localStorage.removeItem("roles")

    // 🍪❌ 쿠키 제거
    Cookies.remove("jwt")
  }

  // 자동 로그인
  // 1️⃣ 쿠키에서 jwt 가져오기
  // 2️⃣ jwt 있으면, 사용자 정보 요청
  // 3️⃣ 로그인 세팅 ( 📦 로그인 여부, 사용자 정보, 권한 )
  // 🍪쿠키에 저장된 💍JWT 를 읽어와서 로그인 처리
  const autoLogin = async () => {
    // 쿠키에서 jwt 가져오기
    const jwt = Cookies.get("jwt")

    // 💍 in 🍪 ❌
    if( !jwt ) {
      // TODO: 로그아웃 세팅
      return
    }

    // 💍 in 🍪 ⭕
    console.log(`jwt : ${jwt}`);
    const authorization = `Bearer ${jwt}`

    // 💍 JWT 를 Authorizaion 헤더에 등록
    api.defaults.headers.common.Authorization = authorization

    // 👩‍💼 사용자 정보 요청
    let response
    let data

    try {
      response = await auth.info()
    } catch (error) {
      console.error(`erro : ${error}`);
      console.log(`status : ${response.status}`);
      return
    }

    // 인증 실패 ❌
    if( response.data == 'UNAUTHORIZED' || response.status == 401 ) {
      console.error(`jwt 가 만료되었거나 인증에 실패하였습니다.`);
      return
    }

    // 인증 성공
    console.log(`jwt 로 자동 로그인 성공`);

    
    data = response.data

    // 로그인 세팅 -  loginSetting(🎫💍, 👩‍💼)
    loginSetting(authorization, data)

    
  }

  /**
   * 로그인 세팅
   * @param {*} authorization : Bearre {jwt}
   * @param {*} data          : 👩‍💼{ user }
   */
  const loginSetting = (authorization, data) => {
    // 💍 JWT 를 Authorizaion 헤더에 등록
    api.defaults.headers.common.Authorization = authorization
    // 로그인 여부 
    setIsLogin(true)
    localStorage.setItem("isLogin", "true")                 // ⭐ localStorage 등록
    // 사용자 정보
    setUserInfo(data)
    localStorage.setItem("userInfo", JSON.stringify(data) ) // ⭐ localStorage 등록
    // 권한 정보
    const updatedRoles = { isUser: false, isAdmin: false }
    data.authList.forEach( (obj) => {
      if( obj.auth == 'ROLE_USER' ) updatedRoles.isUser = true
      if( obj.auth == 'ROLE_ADMIN' ) updatedRoles.isAdmin = true
    })
    setRoles(updatedRoles)
    localStorage.setItem("roles", JSON.stringify(updatedRoles)) // ⭐ localStorage 등록
  }

  useEffect( () => {

    const savedIsLogin = localStorage.getItem("isLogin")
    if( !savedIsLogin || savedIsLogin == false ) {
      autoLogin().then(() => {
        console.log(`로딩 완료`);
        // 로딩 완료
        setIsLoading(false)
      })
    }
    else {
      // 로딩 완료
      setIsLoading(false)
    }
    
  }, [])
  

  return (
    // 컨텍스트 값 지정 ➡ value={ ?, ? }
    <LoginContext.Provider value={ { isLoading, isLogin, logout, login, userInfo, roles } }>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider