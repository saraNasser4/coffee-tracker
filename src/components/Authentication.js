import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { FaExclamationCircle } from "react-icons/fa";

function Authentication (props){
  const [isRegistration, setIsRegistration] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  
  const inputStyle = "block border border-gray-300 dark:border-[#333] bg-gray-200/60 dark:bg-[#181818] rounded-md shadow w-full py-2 px-4 outline-none caret-amber-900 m-2";
  const btnStyle = "rounded-md bg-amber-900 text-white px-4 py-2 hover:bg-amber-950 cursor-pointer my-4"
  
  const regexForEmail = /(^[a-z]\w+@[a-z]{3,}(?:(.[a-z]+){1,3}).[com]$)/;
  
  const {signup, login, globalUser} = useAuth();

  async function handleSubmitBtn (){
    let errorMessage = !regexForEmail.test(email) ? "Your email must match 'example@exmple.com'" :
      password.length < 8 ? "Your password must be more then 8 characters" : 
      !isRegistration && (firstName.length < 1 || lastName.length < 1) ? "You must fill all the data" : 
      globalUser ? "The user already exists":
      "";

    if (errorMessage) {
      setMessage(errorMessage)
      return;
    } 

    try{
      props.setIsAuthenticating(true);
      if(globalUser) {
        await login(email, password)
        console.log("HI FRIEND")
      } else {
        await signup(email, password)
      }
      props.setShowModal(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setMessage('');
    } catch(err) {
      console.error(err)
    }finally {
      props.setIsAuthenticating(false)
    }
  }

  return (
    <div className="p-6 max-w-[800px]">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight my-4">{isRegistration ? 'Login' : 'Sign Up'}</h2>
       <p className="text-lg md:text-xl font-medium my-4">{isRegistration ? 'Your account is waiting for you!' : 'Create an account!'}</p>
       {message && <p className="bg-red-600 p-4 text-white max-w-[500px] flex items-center gap-4"><FaExclamationCircle /> <span>{message}</span></p>}
       <div className="border-b mb-7">
        {!isRegistration && 
        <div className="flex -mr-4">
          <input className={inputStyle} value={firstName} onChange={(e)=> setFirstName(e.target.value)} type="text" placeholder="First Name" required/>
          <input className={inputStyle} value={lastName} onChange={(e)=> setLastName(e.target.value)} type="text" placeholder="Last Name" required/>
        </div>
        }
        <input className={inputStyle} value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" required/>
        <input className={inputStyle} value={password} onChange={(e)=> setPassword(e.target.value)}type="password" placeholder="********" required minLength="8"/>
        <input className={btnStyle} onClick={handleSubmitBtn} type="submit" />
       </div>
       <p className="text-lg md:text-xl font-medium">{isRegistration ? "Don't" : "Already"} have an account?</p>
       <button onClick={()=> {setIsRegistration(!isRegistration)}} className={btnStyle}>{isRegistration ? 'Sign up' : 'Login'}</button>
    </div>
  )
}

export default Authentication