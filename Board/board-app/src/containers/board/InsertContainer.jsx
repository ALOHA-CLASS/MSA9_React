import React from 'react'
import BoardInsertForm from '../../components/board/BoardInsertForm'
import * as boards from '../../apis/boards'
import { useNavigate } from 'react-router-dom'

const InsertContainer = () => {

  const navigate = useNavigate()

  // 게시글 등록 요청 이벤트 핸들러
  // const onInsert = async (title, writer, content) => {
  const onInsert = async (formData, headers) => {
    try {
      // const response = await boards.insert(title, writer, content)
      const response = await boards.insert(formData, headers)
      const data = await response.data
      console.log(data);
      alert('등록 완료')
      // 게시글 목록으로 이동
      navigate('/boards')      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <BoardInsertForm onInsert={onInsert} />
    </>
  )
}

export default InsertContainer