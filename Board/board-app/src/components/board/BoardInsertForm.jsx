import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import './css/BoardInsertForm.css'
import styles from './css/BoardInsertForm.module.css'

const BoardInsertForm = ({ onInsert }) => {

  // 🧊 state 선언
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState('')
  const [content, setContent] = useState('')

  const changeTitle = (e) => { setTitle( e.target.value ) }
  const changeWriter = (e) => { setWriter( e.target.value ) }
  const changeContent = (e) => { setContent( e.target.value ) }

  const onSubmit = () => {
    onInsert(title, writer, content)
  }

  return (
    <div className="container">
      <h1 className='title'>게시글 쓰기</h1>
      {/* <table className='table'> */}
      {/* <table className={`${styles.table} ${styles.list}`}> */}
      <table className={styles.table}>
        <tr>
          <th>제목</th>
          <td>
            {/* <input type="text" onChange={changeTitle} className='form-input' /> */}
            {/* 
                CSS modules 의 클래스 선택자는 카멜케이스로 쓰는 것이 관례
                                  CSS            Javasciprt
                * 카멜케이스 : .formInput   ➡  { styles.formInput }
                * 케밥케이스 : .form-input  ➡  { style['form-input'] } 
            */}
            <input type="text" onChange={changeTitle} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <th>작성자</th>
          <td>
            <input type="text" onChange={changeWriter} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10} onChange={changeContent} className={styles['form-input']}></textarea>
          </td>
        </tr>
      </table>
      <div className="btn-box">
        <Link to="/boards" className="btn">목록</Link>
        <button className='btn' onClick={ onSubmit }>등록</button>
      </div>
    </div>
  )
}

export default BoardInsertForm