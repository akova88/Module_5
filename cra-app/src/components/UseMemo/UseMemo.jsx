import React, { useMemo, useRef, useState } from "react";

function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setproducts] = useState([])

    const nameRef = useRef();

    const handleSubmit = () => {
        setproducts([...products, {
            name,
            price: +price
        }])
        setName('');
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(()=> {
       const result = products.reduce((result, product) => {
            console.log('Tinh toan lại...');
            return result + product.price
        },0 )
        return result;
    },[products]) 

    return (
        <div>
            <input type="text"
            ref={nameRef} 
            value={name}
            placeholder="Enter name..."
            onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input type="text" 
            value={price}
            placeholder="Enter price..."
            onChange={(e) => setPrice(e.target.value)}
            />
              <br/>
            <button
                onClick={handleSubmit}
            >ADD
            </button>
            <br/>
            Total: {total}
            <ul>
                {
                    products?.map((product, index) => (
                        <li key={index}>{product.name}-{product.price}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseMemo