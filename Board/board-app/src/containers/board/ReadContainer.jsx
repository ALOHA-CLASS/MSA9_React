import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as boards from '../../apis/boards'
import * as files from '../../apis/files'
import BoardRead from '../../components/board/BoardRead'


const ReadContainer = () => {

  const { id } = useParams()

  // 🧊 state
  const [board, setBoard] = useState({})
  const [fileList, setFileList] = useState([])

  // 게시글 데이터 요청
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data          // ⭐ data 💌 board + fileList
    setBoard(data.board)
    setFileList(data.fileList)
    
  }

  // 다운로드
  const onDownload = async (id, fileName) => {
    // API 요청
    const response = await files.download(id)
    console.log(response);

    // 1. 서버에서 응답 파일데이터를 받은 Blob 변환
    // 2. 브라우저를 통해 a 태그로 등록
    // 3. a태그의 다운로드 기능으로 요청
    const url = window.URL.createObjectURL(new Blob( [response.data] ))
    // <a href="📄data" download="파일명.png"></a>
    const link = document.createElement('a')      // a태그 생성
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()                          // 다운로드 기능르 가진 a 태그 클릭
    document.body.removeChild(link)
  }

  useEffect( () => {
    getBoard()
  }, [])

  return (
    <>
      <BoardRead 
          board={board} 
          fileList={fileList} 
          onDownload={onDownload} />
    </>
  )
}

export default ReadContainer