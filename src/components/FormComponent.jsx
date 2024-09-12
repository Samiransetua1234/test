import { useState } from "react";

function FormComponent() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const handelSubmit = (e) =>{
        e.preventDefault();

        alert(`Username : ${username}
Email : ${email}`)
    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" required value={username}  onChange={(e)=>setUsername(e.target.value)}/>
        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormComponent
