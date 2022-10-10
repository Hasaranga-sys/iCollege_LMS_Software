import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function StudentViewLibraryItem() {
  const[items, setItems] = useState();

  useEffect(()=>{
    const fetchFilers = async () =>{
      const res = await fetch(`http://localhost:5000/pdf`);
      const data = await res.json();
      setItems(data);
    };
    fetchFilers();
  },[])

  console.log(items);


  return (
    <div>StudentViewLibraryItem</div>
  )
}

export default StudentViewLibraryItem