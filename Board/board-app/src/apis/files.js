import axios from 'axios'

// 다운로드
export const download = (id) => axios.get(`/files/download/${id}`, {responseType: 'blob'} )

// 파일 삭제
export const remove = (id) => axios.delete(`/files/${id}`)

// 파일 선택 삭제
export const removeFiles = (idList) => axios.delete(`/files?idList=${idList}`)