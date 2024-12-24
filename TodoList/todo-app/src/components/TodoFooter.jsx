import React from 'react'

const TodoFooter = () => {
  return (
    <div className="footer">
        <div className="item">
            <button className="btn">전체삭제</button>
        </div>
        <div className="item">
            <button className="btn">전체완료</button>
        </div>
    </div>
  )
}

export default TodoFooter