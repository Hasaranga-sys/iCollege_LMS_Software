import React from 'react'
import { useState,useEffect } from 'react'

function ViewLibraryItems() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    console.log("hi");
  
    
  }, [])

  const updateClicked = (id) => {
    console.log(id);
    //navigate(`/admin-rooms/${id}`);
  };

  const deleteClicked = (id) => {
    // alert(id);
    //Swal.fire(" succesfully deleted");
    
  };
  

  return (
    <div>ViewLibraryItems</div>
  )
}

export default ViewLibraryItems