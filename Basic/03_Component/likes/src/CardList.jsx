import React, { useEffect, useState } from 'react'
import Card from './Card'

const CardList = () => {

  // Card 컴포넌트에 전달할 데이터
  // const cardData = [
  //   { 
  //     no : 1,
  //     title: '아메리카노',
  //     content: '콜롬비아 원두로 만든...',
  //     likes: 100,
  //     img: 'https://i.imgur.com/D1ic2Xk.jpg'
  //   },
  //   { 
  //     no : 2,
  //     title: '카페라떼',
  //     content: '라떼는 말이야...',
  //     likes: 200,
  //     img: 'https://i.imgur.com/hAzIEVv.jpg'
  //   },
  //   { 
  //     no : 3,
  //     title: '쿠키프라페',
  //     content: '오레오 다햇네...',
  //     likes: 300,
  //     img: 'https://i.imgur.com/kDhIhLv.jpg'
  //   },
  // ]

  // ⭐ state 선언
	// 🧊 productList
	const [productList, setProductList] = useState([])

  // 🌞 데이터 요청 함수
  // - Promise 구조
	// const getProductList = () => {
  //   const response = fetch('http://localhost:8080/products')
  //     .then(response => {
  //         // 서버 응답을 JSON 형식으로 파싱
  //         return response.json();
  //     })
  //     .then(data => {
  //         // 파싱된 데이터 출력
  //         console.log(data);
  //         // ⚡ 상태 업데이트
  //         setProductList(data)
  //     })
  //     .catch(error => {
  //         // 오류 처리
  //         console.error('Request failed:', error);
  //     });
  // }

  // - async/await
  const getProductList = async () => {
    const response = await fetch('http://localhost:8080/products')
    const productList = await response.json()
    setProductList(productList) 
  }

  
  // ❔ useEffect() 훅 사용
	// "렌더링 시 호출 되는 함수"
	// : 함수형 컴포넌트에서 마운트, 업데이트, 언마운트 생명주기 작업을 
	//   처리할 수 있도록 해주는 훅
	useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <h1>상품 목록</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        rowGap: "40px"
      }}>
        {
          productList.map( (card, index) => {
          // cardData.map( (card, index) => {
            // return <Card key={card.no} title={card.title} content={card.content} />
            // return <Card key={card.no} {...card} />
            return <Card key={card.no} card={ card } />
          })
        }
      </div>
    </div>
  )
}

export default CardList