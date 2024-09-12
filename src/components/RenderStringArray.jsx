

function RenderStringArray({arr=[]}) {

    const listItems = arr.map((item, index)=> <li key={index}>{item}</li>)
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default RenderStringArray
