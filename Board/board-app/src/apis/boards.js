import axios from 'axios';
// 기본 URL 설정
axios.defaults.baseURL = "/api"

// 목록
export const list = () => axios.get("/boards")

// 조회
export const select = (id) => axios.get(`/boards/${id}`)

// 등록
export const insert = (title, writer, content) => axios.post("/boards", {title,writer,content} )

// 수정
export const update = (id, title, writer, content) => axios.put("/boards", {id,title,writer,content} )

// 삭제
export const remove = (id) => axios.delete(`/boards/${id}`)
