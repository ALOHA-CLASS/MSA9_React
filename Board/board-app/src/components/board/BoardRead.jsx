import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './css/BoardRead.module.css'

const BoardRead = ({ board }) => {

  const { id } = useParams()

  return (
    <div className="container">
      <h1 className='title'>게시글 조회</h1>
      {/* <h3>id : {id}</h3> */}
      <table className={styles.table}>
        <tr>
          <th>제목</th>
          <td>
            <input type="text" value={board.title} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <th>작성자</th>
          <td>
            <input type="text" value={board.writer} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10} value={board.content} className={styles['form-input']}></textarea>
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