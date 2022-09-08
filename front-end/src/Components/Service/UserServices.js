import axios from "axios";

class userSevices{
    getAllUsers(){
        return axios.get("http://localhost:5000/user/");
    }
    getUser(id){
        return axios.get(`http://localhost:5000/user/${id}`);
    }
    createUser(User){
        return axios.post("http://localhost:5000/user/", User);
    }
    updateUser(id, User){
        return axios.put(`http://localhost:5000/user/${id}`, User);
    }
    deleteUser(id){
        return axios.delete(`http://localhost:5000/user/${id}`);
    }
    login(loginTemplate){
        return axios.post("http://localhost:5000/user/login",loginTemplate);
    }
}
export default new userSevices;