import React from 'react'
import { useState,useEffect } from 'react'

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

 

  return (
    <div className='shadow card w-75 mx-auto text-center p-3 mt-5 bg-light'>
    <h1>View Libarary item</h1>

    <div>
      <div className="container">
      

    </div>
      <div className='container p-2 mt-4 mb-4'>
        <div className='row'>
        <div className='shadow card mx-auto w-75'>

              <table class="table table-striped">
                  <thead className='table-primary'>
                    <tr>
                      <th scope="col">faculty</th>
                      <th scope="col">year</th>
                      <th scope="col">subject</th>
                      <th scope="col">Document</th>

                    </tr>
                    </thead>
                    <tbody>
                      {pdfs?.map((pdf)=>
                      <tr key={pdf.id}>
                        <td>{pdf.faculty}</td>
                        <td>{pdf.year}</td>
                        <td>{pdf.subject}</td>
                        <td>{ <a href={pdf.pdf} download>{pdf.subject}</a>}</td>
                        
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