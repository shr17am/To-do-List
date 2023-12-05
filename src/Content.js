import React from 'react'
import ItemsList from './ItemsList';


const Content = ({handleChange,items,handleDelete}) => {

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(n=>n*3).filter(n=>n>=50)
// console.log(newArr)
      return (
        <>
          {(items.length)?(
<ItemsList
 items={items}
 handleChange={handleChange}
 handleDelete={handleDelete}/>
          ):(
            <p style={{marginTop:"8rem"}}>List is Empty!</p>
          )}
        </>
      )
    }

export default Content