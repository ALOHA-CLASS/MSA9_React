import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as boards from '../../apis/boards'
import BoardRead from '../../components/board/BoardRead'
const ReadContainer = () => {

  const { id } = useParams()

  // 🧊 state
  const [board, setBoard] = useState({})

  // 게시글 데이터 요청
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data
    setBoard(data)
  }

  useEffect( () => {
    getBoard()
  }, [])

  return (
    <>
      <BoardRead board={board} />
    </>
  )
}

export default ReadContainer