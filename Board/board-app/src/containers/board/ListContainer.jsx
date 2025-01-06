import React from 'react'
import BoardList from '../../components/board/BoardList'
import * as boards from '../../apis/boards'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ListContainer = () => {

  // 🧊 state
  const [boardList, setBoardList] = useState([])
  const [pagination, setPagination] = useState({})
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)

  // ?파라미터=값 가져오는 방법
  const location = useLocation()
  
  const updatePage = () => {
    const query = new URLSearchParams(location.search)
    const newPage = query.get("page") ?? 1
    const newSize = query.get("size") ?? 10
    console.log(`newPage : ${newPage}`);
    console.log(`newSize : ${newSize}`);
    setPage(newPage)
    setSize(newSize)
  }

  // 🎁 게시글 목록 데이터
  const getList = async () => {
    const response = await boards.list(page, size)
    const data = await response.data
    const list = data.list
    const pagination = data.pagination
    console.dir(data)
    console.dir(data.list)
    console.dir(data.pagination)

    setBoardList( list )
    setPagination( pagination )
  }

  // ❓ 
  useEffect( () => {
    getList()
  }, [page, size])

  useEffect( () => {
    updatePage()
  }, [location.search])

  return (
    <>
      <BoardList boardList={boardList} pagination={pagination} />
    </>
  )
}

export default ListContainer