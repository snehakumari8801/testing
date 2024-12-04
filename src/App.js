import { useState } from "react";
import "./App.css";

function App() {
  const[formData ,setformData] = useState({firstName:"" , lastName:"" , email:"" , address:"" , 
  country:"" ,city:"" ,postalcode:"" ,comments:false , candidates:false , offers:false,
  pushNotifications:""})

  function changeHandler(event){
    const{name ,value ,type , checked} = event.target;
    setformData((prev) => ({...prev,
      [name]:type === "checkbox" ? checked :value}))
  }

  function submitHandler(event){
     event.preventDefault();
     console.log(formData);
  }
  
    

  return(
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name </label><br></br>
      <input 
      className="outline"
       type="text"
       placeholder="sneha"
       name="firstName"
       id="firstName"
       value={formData.firstName}
       onChange={changeHandler}/>
      
      <br></br><br></br>
       
      <label htmlFor="lastName">Last Name </label><br></br>
       <input
       className="outline"
        type="text" 
        placeholder="kumari"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={changeHandler}
        />

      <br></br><br></br>
       
       <label htmlFor="email">Email Address </label><br></br>
        <input
        className="outline"
         type="text"
          placeholder="abc@gmail.com"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
         />

<br></br><br></br>
       
       <label htmlFor="address">Street Number </label><br></br>
        <input
        className="outline"
         type="text"
         placeholder="13 street"
          name="address"
          id="address"
          value={formData.address}
          onChange={changeHandler}
         />

<br></br><br></br>
      <label htmlFor="country">Choose Your country</label> <br></br>
      <select className="outline"
      name="country"
      id="country"
      onChange={changeHandler}
      value={formData.country}>
        <option>india</option>
        <option>uniked kingdom</option>
        <option>Austrelia</option>
        <option>Africa</option>
      </select>

<br></br><br></br>
       <label htmlFor="city">city</label><br></br>
        <input
        className="outline"
         type="text"
         placeholder="13 street"
          name="city"
          id="city"
          value={formData.city}
          onChange={changeHandler}
         />
    
  <br></br><br></br>
       <label htmlFor="postalcode">postalcode</label><br></br>
        <input
        className="outline"
         type="text"
         placeholder="110023"
          name="postalcode"
          id="postalcode"
          value={formData.postalcode}
          onChange={changeHandler}
         />


<br></br><br></br>
    

    <fieldset>
      <legend>By Email</legend>

      <div className="flex ">
      <input
      type="checkbox" 
      name="comments"
      id="comments"
      checked={formData.comments}
      onChange={changeHandler}
      />
      <div>
        <label htmlFor="comments">Comments</label>
        <p>Get notification when someone post a post </p>
      </div>
    </div>

    <div className="flex">
    <input
      type="checkbox" 
      name="candidates"
      id="candidates"
      checked={formData.candidates}
      onChange={changeHandler}
      />
      <div>
        <label htmlFor="candidates">Candidates</label>
        <p>Get notification when someone post a post </p>
      </div>
    </div>

    <div className="flex">
    <input
      type="checkbox" 
      name="offers"
      id="offers"
      checked={formData.offers}
      onChange={changeHandler}
      />
      <div>
        <label htmlFor="offers">offers</label>
        <p>Get notification when someone post a post </p>
      </div>
    </div>

    </fieldset>

<br></br><br></br>

    <fieldset>
      <legend>Push Notifications</legend>
      <p>This are delivered by sms in your mobile phone</p>
      <input
      type="radio"
      id="pushEverything"
      name='pushNotifications'
      value="Everything"
      onChange={changeHandler}
      />
      <label htmlFor="pushEverything"> Everthing</label>
      <br></br>

      <input
      type="radio"
      id="pushEmail"
      name='pushNotifications'
      value="Same as Email"
      onChange={changeHandler}
      />
      <label htmlFor="pushEmail"> Same as Email</label>

<br></br>
<input
      type="radio"
      id="pushNothing"
      name='pushNotifications'
      value="No push Notifications"
      onChange={changeHandler}
      />
      <label htmlFor="pushNothing"> No Email</label>


    </fieldset>

    <br></br><br></br>
    <button className="bg-blue-400 w-[60px] py-2 pz-2px text-white rounded font-bold">Save</button>
    


      </form>
    </div>
  )
}

export default App;
