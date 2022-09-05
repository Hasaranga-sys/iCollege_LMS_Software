import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LibararyItemForm = () => {
    const [faculty, setFaculty] = useState("")
    const [year, setYear] = useState("")
    const [subject, setSubject] = useState("")
    const [pdf, setPdf] = useState("")

    useEffect(()=>{

    },[])

    const upload = async(e)=>{
        try {
            e.preventDefault();
        const data =new FormData();
        data.append("faculty", faculty);
        data.append("year", year);
        data.append("subject", subject);

        for (var x = 0; x < pdf.length; x++) {
            data.append("uploaded_Image", pdf[x]);
          }
          
          const res = await fetch(`http://localhost:5000/pdf`, {
                method: "POST",
                body: data,
            });
            if(res.ok){
                setFaculty("");
                setSubject("");
                setYear("");
                setPdf(null);

                history("/")
        }} catch (error) {
            console.log(error);
        }
        

    }

  return (
    <div>
    <div>
      <br />
      <br />
   
      <div style={{marginLeft:470}} className="border card shadow-lg w-50 p-3 mb-5 text-center">  
        <h3 className='mt-2 mb-3'>Add Legal Case Document File</h3>
        {/* <Link to={"/LitigationDash/caseDocumentTable"}>
        <button>Table</button>
      </Link> */}

        <form
          onSubmit={upload} encType="multipart/form-data"
        >
          <div>
            <div className="row w-75 mx-auto mt-1">
              <label className="col-sm-6 col-form-label">Reference No</label>

              <input name="referenceNo" 
                className="form-control w-50"
                placeholder="referenceNo"
                type="text"
                value={referenceNo}
                onChange={(e) => {setReferanceNo(e.target.value);}}
                required
              />
            </div>
            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Case File Sender's Reference NO</label>
              <input
                name="caseFileSendersRefNo"
                className="form-control w-50"
                type="text"
                placeholder="caseFileSendersRefNo"
                value={caseFileSendersRefNo}
                onChange={(e) => {setCaseFileSendersRefNo(e.target.value);}}
                required
              />
            </div>
            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Case File Sender</label>
              <input name="caseFileSender"
                      className="form-control w-50" 
                      type="text" 
                      value={caseFileSender}
                      placeholder="Enter field" 
                      onChange={(e) => {  setCaseFileSender(e.target.value);  }}  
                      required
                      />
            </div>
            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Description</label>
              <textarea name="field"
                        className="form-control w-50" 
                        type="text-area"
                        value={description}
                        placeholder="Enter field"
                        onChange={(e) => {setDescription(e.target.value);}}
                        required
                      />
            </div>
            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Case Document File</label>
              <input name="uploaded_Image"
                     className="form-control w-50" 
                     type="file"                    
                     onChange={(e) =>{setPdf(e.target.files); }}  
                     multiple
                     required
                      />
            </div>
            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Legal Officer</label>
              <select name="dropdown" className="form-control w-50"  onChange={(e) => {setLegalOfficer(e.target.value); }}  >
              <option  selected>Select name</option>
              {stakeholders?.map((stake)=>
              <option key = {stake.id} value={stake.fullName}>{stake.fullName}</option> )
              }
              </select>
              
            </div>
            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Account No/Telephone No</label>
              <input name="field"  
                     className="form-control w-50" 
                     type="number"
                     value={telephoneNumber}
                     placeholder="Enter field"
                     onChange={(e) => {setTelephoneNumber(e.target.value); }} 
                     required
                      />
            </div>
            <div className="row w-75 mx-auto mt-3">
              <label className="col-sm-6 col-form-label">Customer Name</label>
              <input name="field"  
                     className="form-control w-50" 
                     type="text" 
                     value={customerName}
                     placeholder="Enter field" 
                     onChange={(e) => { setCustomerName(e.target.value); }}  
                     required/>
            </div>
            <div className="row w-75 mx-auto mt-3 mb-4">
              <input
                className="btn btn-primary mt-4 mx-auto"
                type="submit"
                value="Save"
              />
            </div>
                    

                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button typeName="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button typeName="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
          </div>
        </form>
      </div>
    </div>
   
    
    </div>)
}

export default LibararyItemForm