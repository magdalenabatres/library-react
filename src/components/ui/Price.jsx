
import React from "react"



const Price = ({ salePrice, originalPrice }) => {
 const sale = Number(salePrice);
  const original = Number(originalPrice);
    return (
          <div className="book__price">
            {sale  ?(
              <>
             <span className="book__price--normal">
                ${original}</span>
                    ${sale.toFixed(2)}
                </>
               ) : (
                  <>${original.toFixed(2)}</>
                    )}   
               </div>
          )
      }

export  default Price;