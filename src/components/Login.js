import React from "react";
import axios from "axios";
import { useState } from "react";
const Login =()=>{
  const[user,setUser]=useState(

    { 
     
     
      email:"",
  
     password:"",
  
     
   }
   );
   
const handleInputs = (e)=>{
 const { name, value } = e.target;
 setUser((prevData) => ({
   ...prevData,
   [name]: value,
 }));
};
const handleSubmit = async (e) => {
 e.preventDefault();
 try {
   const response = await axios.post('http://localhost:8081/user/login', user);
   if(response.data.accountCreated==true){
   console.log('Data sent successfully:', response.data);
   setUser({
    
     email: "",
    
     password: "",
     
     
   });
   window.alert(`welcome to gharaana`)
   // Handle success, like showing a success message
 }
 else{
   setUser({
    
     email: "",
    
     password: "",
    
   });
   window.alert(` : ${response.data.response}`)
 }
} catch (error) {
   console.error('Error sending data:', error);
   setUser({
    
     email: "",
    
     password: "",
    
     
   });
   // Handle error, like showing an error message
 }
};  

return<>


    
   <div className="container">
   <h5 className="topics">
     Login
   </h5>
   <form onSubmit={handleSubmit} className="htmlForums">
     
   <div>
        <label className="labelform" htmlFor="email">Email</label>
        <input  className="inputform" type="text"
         value={user.email}
         onChange={handleInputs}
        name="email" id="email"/>
       
     </div>
     <div>
        <label className="labelform" htmlFor="password">Password</label>
        <input  className="inputform" type="text"
          value={user.password}
          onChange={handleInputs}
        name="password" id="password"/>
       
     </div>
    
    
     
    



   
     
 
<br>
</br>
<button className="button" onClick={handleSubmit} type="submit">Register</button>
 
   </form>

   </div>

 </>



 
   
}

export default Login;