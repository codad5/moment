import React, { useState } from 'react';

function Recipt() {
    const [list, setList] = useState([]);
    const [totalPrice, setPrice] = useState([0,0]);
    const [newItemName, setNewItemName] = useState("");
    const [allPrice, setAllPrice] = useState(0);
    const changePrice = (event) => {
        // console.log(event.target.name + ": " + event.target.value);
        switch (event.target.name) {
            case 'itemquantity':
                let unitprice = totalPrice[1] ;
                setPrice([event.target.value, unitprice]);
                break;
            case 'itemunitprice':
                let unitquantity = totalPrice[0];
                setPrice([unitquantity, event.target.value]);
                break;
            default:
                break;
        }
    

    }

    const deleteItem = (e) => {
        e.preventDefault();
        let id = e.target.value;
        // console.log(id)
        let newss = list.filter((item) => { return item.key != id });
        // console.log(newss)
        setList(newss);
        
    }

    const saveList = (event) => {
        event.preventDefault();
        if (newItemName.trim().length > 0 && totalPrice[0] > 0) {

            
            let listItem = {
                key: list.length + 1,
                name: newItemName,
                unit: totalPrice[0],
                unitPrice : totalPrice[1],
                total: totalPrice[0] * totalPrice[1]

                
                
            }
            
            setList([...list, listItem]);
            
            setNewItemName("");
            setPrice([0,0]);
            event.target.reset();
        }

    }

    const getTotalPrice = () => {
        
        return list.reduce((total, value, index, array) => {
            // console.log(total)
            return total + value.total;
        });

        
    }
    
    const header ={
        textAlign : 'center',
        backgroundColor:"#d81e56",
        width:'100vw',
        fontWeight:'bold',
        fontSize:'3rem',
        padding:"20px 0",
        position:"fixed"
    }
    
  return (
      <div class="recipt-body" style={{ overflowX:"scroll"}}>
          <header style={header}>Recipt Creator</header>
       
          <form onSubmit={saveList} style={{ paddingTop: "170px"}}>
              <table className="table table-striped">
                  <thead>
                  <th scope="col">No</th>
                  <th scope="col">Item</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  </thead>
                  <tbody>
           
                  {list.map(item => <tr key={item.key} scope="row">
                                        <td>{list.indexOf(item) + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.total}</td>
                                        <td>{<button value={item.key} type="button" className="btn btn-danger" onClick={deleteItem}>DELETE</button>}</td>
              </tr>)}
                  <tr scope="row">
                      <th>{list.length + 1}</th>
                      <th><input type="text" className="form-control" placeholder="Unit Name" name="itemName" onChange={(e) => { setNewItemName(e.target.value)}}/></th>
                          <th><input type="number" className="form-control" placeholder="Unit quantity" name="itemquantity" onChange={changePrice} /></th>
                          <th><input type="number" className="form-control" name="itemunitprice" placeholder="price quantity" onChange={changePrice} /></th>
                      <th>{totalPrice[0] * totalPrice[1]}</th>
                          <th><input type="submit" className="btn btn-primary" value="Add" /></th>
              </tr>
                  <tr scope="row">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                      <td>{allPrice}</td>
              </tr>
                  </tbody>
          </table> 
                  </form>
    </div>
  )
}

export default Recipt