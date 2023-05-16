import './itemHeader.css'

const ItemHeader = (props) => {
  return (
    <h2 className='titulo'>{props.greeting}</h2>
  )
}

export default ItemHeader