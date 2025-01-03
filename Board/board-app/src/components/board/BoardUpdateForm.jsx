import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './css/BoardUpdateForm.module.css'
import * as format from '../../utils/format'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const BoardUpdateForm = ({ board, onUpdate, onDelete, fileList, onDownload, onDeleteFile }) => {

  const { id } = useParams()

  // 🧊 state 선언
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState('')
  const [content, setContent] = useState('')

  const changeTitle = (e) => { setTitle( e.target.value ) }
  const changeWriter = (e) => { setWriter( e.target.value ) }
  const changeContent = (e) => { setContent( e.target.value ) }

  const onSubmit = () => {
    onUpdate(id, title, writer, content)
  }

  const handleDelete = () => {
    const check = window.confirm('정말로 삭제하시겠습니까?')
    if( check )
        onDelete(id)
  }

  const handleFileDelete = (id) => {
    const check = window.confirm('파일을 삭제하시겠습니까?')
    if( check )
      onDeleteFile(id)
      
  }

  useEffect( () => {
    if( board ) {
      setTitle(board.title)
      setWriter(board.writer)
      setContent(board.content)
    }
  }, [board])

  return (
    <div className="container">
      <h1 className='title'>게시글 수정</h1>
      {/* <h3>id : {id}</h3> */}
      <table className={styles.table}>
        <tr>
          <th>제목</th>
          <td>
            <input type="text" value={title} onChange={changeTitle} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <th>작성자</th>
          <td>
            <input type="text" value={writer} onChange={changeWriter} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10} value={content}
                      onChange={changeContent}
                      className={styles['form-input']}></textarea>
          </td>
        </tr> 
        <tr>
          <td colSpan={2}>
            {
              fileList.map( (file) => (
                <div className='flex-box' key={file.id}>
                  <div className="item">
                    <img src={`/api/files/img/${file.id}`} alt={file.originName}
                        className='file-img' />
                    <span>{file.originName} ({ format.byteToUnit( file.fileSize ) })</span>
                  </div>
                  <div className="item">
                    <button className='btn' onClick={ () => onDownload(file.id, file.originName) }>
                      <DownloadIcon />
                    </button>
                    <button className='btn' onClick={ () => handleFileDelete(file.id) }>
                      <DeleteForeverIcon />
                    </button>
                  </div>
                </div>
              ))
            }
          </td>
        </tr>
      </table>
      <div className="btn-box">
        <Link to="/boards" className="btn">목록</Link>
        <div>
          <button onClick={onSubmit} className='btn'>수정</button>
          <button onClick={handleDelete} className='btn'>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default BoardUpdateForm