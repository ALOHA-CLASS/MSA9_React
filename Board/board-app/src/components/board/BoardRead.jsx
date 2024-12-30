import React from 'react'
import { Link, useParams } from 'react-router-dom'

const BoardRead = ({ board }) => {

  const { id } = useParams()

  return (
    <div className="container">
      <h1 className='title'>게시글 조회</h1>
      {/* <h3>id : {id}</h3> */}
      <table>
        <tr>
          <td>제목</td>
          <td>
            <input type="text" value={board.title} />
          </td>
        </tr>
        <tr>
          <td>작성자</td>
          <td>
            <input type="text" value={board.writer} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10} value={board.content}></textarea>
          </td>
        </tr>
      </table>
      <div className="btn-box">
        <Link to="/boards" className="btn">목록</Link>
        <Link to={`/boards/update/${id}`} className="btn">수정</Link>
      </div>
    </div>
  )
}

export default BoardRead