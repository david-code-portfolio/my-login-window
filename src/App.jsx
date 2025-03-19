function App() {
  return(
    <section className="flex h-dvh m-auto w-full min-2xl:max-w-[2460px] max-lg:grid">
      {/* Left part of the screen ↓ */}
      <div className="p-4 max-lg:w-full max-lg:hidden w-1/2">
        <div className="bg-[url(images/login-image-2.jpg)] w-full h-full min-h-[720px] rounded-2xl bg-no-repeat bg-cover bg-center relative cursor-default">

          <h1 className="font-(family-name:--brand-font) text-5xl text-(color:--light-color) absolute top-10 left-10 max-2xl:text-3xl">AUM</h1>

          <button className="px-8 py-2 bg-(color:--light-glass) rounded-[0.5rem] font-(family-name:--main-font) text-(color:--light-color) font-medium absolute right-10 top-10 cursor-pointer hover:bg-(color:--light-color) hover:text-(color:--dark-color) hover max-2xl:text-sm">
            Back to website
          </button>

          <h2 className="text-(color:--light-color) font-(family-name:--main-font) text-[2.5rem]/[3rem] tracking-tight font-medium text-center absolute bottom-20 size-fit w-2/3 -translate-x-1/2 left-1/2 max-2xl:text-3xl max-2xl:bottom-10">
            Track your focus & manage your tasks on one place.
          </h2>

        </div>
      </div>
      
      {/* Right part of the screen/formular ↓ */}
      <form action="" className="p-30 w-1/2 max-2xl:p-20 max-lg:w-4/5 max-lg:m-auto max-sm:w-full max-sm:p-10">
        <h1 className="text-7xl max-2xl:text-4xl text-(color:--light-color) font-(family-name:--main-font) font-medium">Create an account</h1>
        <p className="text-(color:--lighter-color) mt-10 max-2xl:mt-5 font-(family-name:--main-font)">Already have an account? <a href="" className="underline text-(color:--accent-color)">Log in</a></p>
        {/* Inputs ↓ */}
        <div className="grid grid-cols-2 gap-7 mt-20 max-2xl:mt-10 max-2xl:gap-5">
          <input type="text" placeholder="First Name" className="input"/>
          <input type="text" placeholder="Last Name" className="input"/>
          <input type="mail" placeholder="Email" className="input col-span-2"/>
          <input type="password" placeholder="Enter Your Password" className="input col-span-2"/>
          <button className='bg-(--accent-color) text-(--light-color) font-(family-name:--main-font) font-medium cursor-pointer rounded-[0.25rem] col-span-2 py-4 max-2xl:py-2 text-xl hover:bg-(--light-color) hover:text-(--accent-color) hover max-2xl:text-lg max-2xl:h-[50px] max-sm:text-sm max-sm:h-[45px]'>
            Create account
          </button>
          <span className='col-span-2 my-10 relative max-2xl:my-5'>
            <hr className='bg-(--darker-color) h-0.5 border-none'/>
            <p className='bg-(--dark-color) text-(--lighter-color) absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-8 text-center max-2xl:text-sm max-sm:text-xs max-sm:px-4'>Or register with</p>
          </span>
          <button className='sign-btns hover'>
            <img src="../src/images/google-icon.png" alt="" className='w-7 h-7 max-2xl:w-5 max-2xl:h-5'/>
            Google
          </button>
          <button className='sign-btns hover'>
            <img src="../src/images/apple-icon.png" alt="" className='w-7 h-8 max-2xl:w-5 max-2xl:h-6'/>
            Apple
          </button>
        </div>
      </form>
    </section>
  )
}
export default App