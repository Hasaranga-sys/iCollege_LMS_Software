import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LibararyItemForm = () => {
  const [faculty, setFaculty] = useState("");
  const [year, setYear] = useState(0);
  const [subject, setsubject] = useState("");
  const [pdf, setPdf] = useState("");
  const { id } = useParams();
  const history = useNavigate();


  useEffect(() => {
    console.log("hiii");
    
  }, [])

  const title = () => {
    if (id) {
      return <h1>Update </h1>;
    } else {
      return <h1>Add </h1>;
    }
  };

  const clickSubmit = async (e) => {

    try {
      e.preventDefault();
      const data = new FormData();
      data.append("faculty", faculty);
      data.append("year", year);
      data.append("subject",subject);

      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }
      
      const res = await fetch(`http://localhost:5000/pdf`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setFaculty("");
        setYear("");
        setsubject("");
        setPdf(null);

        
        history("/");
      }


    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <div>{title()}</div>
          <br />
          <br />
          <form onSubmit={clickSubmit} encType="multipart/form-data">
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>faculty</label>
                  <input
                  type="text"
                  placeholder="Group ID"
                  value={faculty}
                  required
                  onChange={(e) => setFaculty(e.target.value)}
                  className="form-control"
                />



                  {/* <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    // onChange={selectCategory}
                    onChange={(e) => setFaculty(e.target.value)}
                    value={faculty}
                    required="required"
                  >
                    <option selected>Choose...</option>
                    <option value="normal">fac1</option>
                    <option value="luxury">fac2</option>
                  </select> */}
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="col">
                <div className="form-group">
                  <label>year</label>



                  <input
                  type="text"
                  placeholder="Group ID"
                  required
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                  className="form-control"
                />


                  {/* <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    required="required"
                  >
                    <option selected>Choose...</option>
                    <option value="2-person">1</option>
                    <option value="5-person">2</option>
                  </select> */}

                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>subject</label>
                  <input
                  type="text"
                  placeholder="Group ID"
                  required
                  onChange={(e) => setsubject(e.target.value)}
                  value={subject}
                  className="form-control"
                />




                  {/* <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(e) => setsubject(e.target.value)}
                    value={subject}
                    required="required"
                  >
                    <option selected>Choose...</option>
                    <option value="2-person">sub1</option>
                    <option value="5-person">sub2</option>
                  </select> */}
                </div>
              </div>
            </div>


            <div className="form-group">
              <label>file</label>
              <div className="form-group">
                <input
                  type="file"
                  multiple
                  required
                  filename="uploaded_Image"
                  className="form-control"
                  
                  onChange={(e) =>{setPdf(e.target.files);}}
                />
              </div>
            </div>


            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
   
    
    </div>)
}

export default LibararyItemForm