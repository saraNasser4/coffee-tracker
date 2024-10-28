function Authentication (){
  const inputStyle = "block border border-gray-300 dark:border-[#333] bg-gray-200/60 dark:bg-[#181818] rounded-md shadow w-full py-2 px-4 outline-none caret-amber-900 m-2";
  const btnStyle = "rounded-md bg-amber-900 text-white px-4 py-2 hover:bg-amber-950 cursor-pointer my-4"
  
  return (
    <div className="p-6 max-w-[800px]">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight my-4">Login</h2>
       <p className="text-lg md:text-xl font-medium my-4">Your account is waiting for you!</p>
       <div className="border-b mb-7">
        <input className={inputStyle} type="email" placeholder="Email"/>
        <input className={inputStyle} type="password" placeholder="********" />
        <input className={btnStyle} type="submit" />
       </div>
       <p className="text-lg md:text-xl font-medium">Don't hane an account?</p>
       <button className={btnStyle}>Sign up</button>
    </div>
  )
}

export default Authentication