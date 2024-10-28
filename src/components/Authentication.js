import { useState } from "react";

function Authentication (props){
  const [isRegistration, setIsRegistration] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyle = "block border border-gray-300 dark:border-[#333] bg-gray-200/60 dark:bg-[#181818] rounded-md shadow w-full py-2 px-4 outline-none caret-amber-900 m-2";
  const btnStyle = "rounded-md bg-amber-900 text-white px-4 py-2 hover:bg-amber-950 cursor-pointer my-4"
  
  return (
    <div className="p-6 max-w-[800px]">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight my-4">{isRegistration ? 'Login' : 'Sign Up'}</h2>
       <p className="text-lg md:text-xl font-medium my-4">{isRegistration ? 'Your account is waiting for you!' : 'Create an account!'}</p>
       <div className="border-b mb-7">
        {!isRegistration && 
        <div className="flex -mr-4">
          <input className={inputStyle} value={firstName} onChange={(e)=> setFirstName(e.target.value)} type="text" placeholder="First Name"/>
          <input className={inputStyle} value={lastName} onChange={(e)=> setLastName(e.target.value)} type="text" placeholder="Last Name"/>
        </div>
        }
        <input className={inputStyle} value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email"/>
        <input className={inputStyle} value={password} onChange={(e)=> setPassword(e.target.value)}type="password" placeholder="********" />
        <input className={btnStyle} onClick={()=> props.setIsAuthenticating(true)} type="submit" />
       </div>
       <p className="text-lg md:text-xl font-medium">{isRegistration ? "Don't" : "Already"} have an account?</p>
       <button onClick={()=> {setIsRegistration(!isRegistration)}} className={btnStyle}>{isRegistration ? 'Sign up' : 'Login'}</button>
    </div>
  )
}

export default Authentication