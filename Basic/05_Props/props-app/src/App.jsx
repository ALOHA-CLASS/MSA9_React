import './App.css'
import ProductDetail from './Component/ProductDetail'

function App() {

  // 🎁 객체 
  const product = {
    id       : "p0001",
    name     : "야자수",
    price    : 52000,
    quantity : 1,
    img      : "http://i.imgur.com/1vpSkbW.png"
  }

  return (
    <>
      <ProductDetail product={product} />
    </>
  )
}

export default App
