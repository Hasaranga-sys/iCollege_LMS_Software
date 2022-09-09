import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NoticeService from '../Service/NoticeService'

const NoticeForm = () => {
    const [faculty, setFaculty] = useState("")
    const [date,setDate] = useState("")
    const [topic,setTopic] = useState("")
    const [notice,setNotice] = useState("")
    
    const {_id}=useParams();
    const navigate=useNavigate();

    const submitNotice = (e) =>{
        e.preventDefault();
        const notices = {faculty,date,topic,notice}

        if (_id) {
            NoticeService.updateNotice(_id,notices).then((response)=>{
                navigate("/AdminHome/NoticeTable")
            })                      
        }else{
            NoticeService.createNotice(notices).then((response)=>{
                navigate("/AdminHome/NoticeTable")
            }).catch(error =>{
                console.log(error);
            })
        }
    }
    
  return (
    <div>
       <div className='row'>
       <div class="card  text-bg-white shadow-lg mb-3 mt-5 text-center" style={{maxWidth:900, marginLeft:180, borderRadius:30}}>  
            <div class="card-body">
                <h5 class="card-title">Add Notice</h5>
                <form onSubmit={submitNotice}>
                    <div>
                        <div className="row w-50  mx-auto mt-5">
                            <label className="col-sm-3  col-form-label">Faculty</label>

                            <select class="form-select w-75"
                                    aria-label="Default select example"
                                    value={faculty.value}
                                    required
                                    placeholder='SelectFaculty..'
                                    onChange={(e) => {setFaculty(e.target.value);}}>
                                    <option value="">select Faculty</option>
                                    <option value="Faculty of Computing">Faculty of Computing</option>
                                    <option value="Faculty of Business">Faculty of Business</option>
                                    <option value="Faculty of Engineering">Faculty of Engineering</option>
                            </select>
                        </div>
                        <div className="row w-50  mx-auto mt-3">
                            <label style={{marginLeft:-9}} className="col-sm-3 col-form-label">Date</label>
                            <input name="date" 
                                className="form-control w-75"
                                placeholder="Add Topic..."
                                type="date"
                                value={date}
                                onChange={(e) => {setDate(e.target.value);}}
                                style={{marginLeft:9}}
                                required
                            />


                            {/* <select class="form-select w-75" 
                                    aria-label="Default select example"
                                    value={module.value}
                                    required
                                    placeholder='SelectModule..'
                                    onChange={(e) => {setModule(e.target.value);}}>
                                    <option value="">select Module</option>
                                    <option value="SE3050-User Experiance Engineering">SE3050-User Experiance Engineering</option>
                                    <option value="SE3060-Application Framework">SE3060-Application Framework</option>
                                    <option value="SE3090-Softwre Architecture">SE3090-Softwre Architecture</option>
                            </select> */}

                        </div>
                        <div className="row w-50  mx-auto mt-3">
                            <label style={{marginLeft:-9}} className="col-sm-3  col-form-label">Topic</label>
                            <input name="topic" 
                            style={{marginLeft:9}}
                                className="form-control w-75"
                                placeholder="Add Topic..."
                                type="text"
                                value={topic}
                                onChange={(e) => {setTopic(e.target.value);}}
                                required
                            />
                        </div>


                        <div className="row w-50  mx-auto mt-3">
                            <label style={{marginLeft:-3}} className="col-sm-3  col-form-label">Notice</label>

                            <textarea name="notice" 
                                style={{marginLeft:3}}                            
                                className="form-control w-75"
                                placeholder="Add notice...."
                                type="text"
                                value={notice}
                                onChange={(e) => {setNotice(e.target.value);}}
                                required
                            />
                        </div>

                        <div className="row w-50 mx-auto mt-3 mb-4 ">
                            <input
                                className="btn btn-primary mt-4 mx-auto shadow-lg"
                                type="submit"
                                value="Save"
                            />
                            </div>

                        


                        
                    </div>
                </form>
            </div>
            </div> 
            <div class="card  text-bg-white shadow-lg mb-3 mt-5 text-center" style={{maxWidth:350, marginLeft:50}}>
                dsa</div> 
            </div>
                       
    </div>
  )
}

export default NoticeForm