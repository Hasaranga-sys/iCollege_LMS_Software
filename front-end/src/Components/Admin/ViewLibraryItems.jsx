import React from 'react'
import { useState,useEffect } from 'react'
import LibraryService from '../Service/LibraryService';
import LibararyItemForm from './LibararyItemForm';
import Swal from "sweetalert2";

function ViewLibraryItems() {
  const [pdfs, setPdfs] = useState()

  useEffect(()=>{
    const fetchFilers = async () =>{
      const res = await fetch(`http://localhost:5000/pdf`);
      const data = await res.json();
      setPdfs(data);
    };
    fetchFilers();
  },[])

  console.log(pdfs);

  // const updateClicked = (id) => {
  //   console.log(id);
    
  // };

  const deleteClicked = (id) => {
    Swal.fire(" succesfully deleted");
    LibraryService.deleteItem(id).then((res)=>{
      setPdfs(pdfs.filter((pdfs) => pdfs._id !== id))
    });
   
  };

  
  return (
    <div className='shadow card w-75 mx-auto text-center p-3 mt-5 bg-light'>
    <h1>Library Resources</h1>

    <div>
      <div className="container">
      

    </div>
      <div className='container p-2 mt-4 mb-4'>
        <div className='row'>
        <div className='shadow card mx-auto w-75'>

              <table class="table table-striped">
                  <thead className='table-primary'>
                    <tr>
                      <th scope="col">Faculty</th>
                      <th scope="col">Year</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Document</th>
                      <th scope="col">Actions</th>

                    </tr>
                    </thead>
                    <tbody>
                      {pdfs?.map((pdf)=>
                      <tr key={pdf.id}>
                        <td>{pdf.faculty}</td>
                        <td>{pdf.year}</td>
                        <td>{pdf.subject}</td>
                        <td>{ <a href={pdf.pdf} download>{pdf.subject}</a>}</td>
                        <td>
                             <button className="btn btn-danger"onClick={() => {deleteClicked(pdf._id);}}>delete</button>
                        </td>
                      </tr>
                      )
                     
                      }
                    </tbody>           
              </table>

        </div>

        </div>

    </div>
  </div>



</div>
  )
}

export default ViewLibraryItems