import React from 'react'
import {Link} from 'react-router-dom'
import * as format from '../../utils/format'

const BoardList = ({ boardList }) => {
  // const boardList = [
  //   { no: 1, title: "게시글 제목1", writer: "작성자1", "createdAt" : "2024-12-30 12:45:50" },
  //   { no: 2, title: "게시글 제목2", writer: "작성자2", "createdAt" : "2024-12-30 12:45:50" },
  //   { no: 3, title: "게시글 제목3", writer: "작성자3", "createdAt" : "2024-12-30 12:45:50" },
  //   { no: 4, title: "게시글 제목4", writer: "작성자4", "createdAt" : "2024-12-30 12:45:50" },
  //   { no: 5, title: "게시글 제목5", writer: "작성자5", "createdAt" : "2024-12-30 12:45:50" }
  // ]
  
  return (
    <div className="cotainer">
      <h1>게시글 제목</h1>
      <Link to="/boards/insert" className='btn' >글쓰기</Link>

      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일자</th>
          </tr>
        </thead>
        <tbody>
          {/* 화살표 함수 내용이 한 문장이면, {}, return 생략 */}
            {/* () =>  */}
            {/* () => () */}

          {/* { } 안에서 함수 내용 작성 - return 선택 */}
            {/* () => { return ? } */}
          {
            boardList.length == 0 
            ? 
              <tr>
                <td colSpan={4}>조회된 데이터가 없습니다.</td>
              </tr>
            :
              boardList.map( (board) => {
                return (
                  <tr key={board.no}>
                    <td align='center'>{ board.no }</td>
                    <td align='left'>
                      <Link to={`/boards/${board.id}`}>
                        {board.title}
                      </Link>
                    </td>
                    <td align='center'>{ board.writer }</td>
                    <td align='center'>{ format.formatDate( board.createdAt ) }</td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}

export default BoardList