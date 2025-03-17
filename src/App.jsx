import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  return(
    <section className="flex h-dvh">
      {/* Left part of the screen ↓ */}
      <div className="bg-[url(images/login-image-2.jpg)] w-1/2 m-4 rounded-2xl bg-no-repeat bg-cover bg-center relative cursor-default">

        <h1 className="font-(family-name:--brand-font) text-5xl text-(color:--light-color) ml-10 mt-10">AUM</h1>

        <button className="px-8 py-2 bg-(color:--light-glass) rounded-[0.5rem] font-(family-name:--main-font) text-(color:--light-color) font-medium absolute right-10 top-10 cursor-pointer hover:bg-(color:--light-color) hover:text-(color:--dark-color) duration-200">
          Back to website
        </button>

        <h2 className="text-(color:--light-color) font-(family-name:--main-font) text-[2.5rem]/[3rem] tracking-tight font-medium text-center absolute bottom-20 size-fit w-2/3 -translate-x-1/2 left-1/2 ">
          Track your focus & manage your tasks on one place.
        </h2>

      </div>
      {/* Right part of the screen/formular ↓ */}
      <form action="" className="p-30 w-1/2">
        <h1 className="text-7xl text-(color:--light-color) font-(family-name:--main-font) font-medium">Create an account</h1>
        <p className="text-(color:--lighter-color) mt-10 font-(family-name:--main-font)">Already have an account? <a href="" className="underline text-(color:--accent-color)">Log in</a></p>
        {/* Inputs ↓ */}
        <div className="grid grid-cols-2 gap-7 mt-20">
          <input type="text" placeholder="First Name" className="bg-(color:--darker-color) px-6 py-4 rounded-[0.25rem] focus:outline-2 outline-(color:--lighter-color) text-(color:--light-color) placeholder:text-(color:--lighter-color) text-xl"/>
          <input type="text" placeholder="Last Name" className="bg-(color:--darker-color) px-4 py-2 rounded-[0.25rem] focus:outline-2 outline-(color:--lighter-color) text-(color:--light-color) placeholder:text-(color:--lighter-color) text-xl"/>
          <input type="mail" placeholder="Email" className="bg-(color:--darker-color) px-6 py-4 rounded-[0.25rem] focus:outline-2 outline-(color:--lighter-color) text-(color:--light-color) placeholder:text-(--lighter-color) text-xl col-span-2"/>
          <input type="password" placeholder="Enter Your Password" className="bg-(color:--darker-color) px-6 py-4 rounded-[0.25rem] focus:outline-2 outline-(color:--lighter-color) text-(color:--light-color) placeholder:text-(--lighter-color) text-xl col-span-2"/>
          <button className='bg-(--accent-color) text-(--light-color) font-(family-name:--main-font) font-medium cursor-pointer rounded-[0.25rem] col-span-2 py-4 text-xl hover:bg-(--light-color) hover:text-(--accent-color) transition duration-300'>Create account</button>
          <span className='col-span-2 mt-10 relative'>
            <hr className='bg-(--darker-color) h-0.5 border-none'/>
            <p className='bg-(--dark-color) text-(--lighter-color) absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-8'>Or register with</p>
          </span>
          <button className='bg-transparent font-(family-name:--main-font) text-(--light-color) text-xl border-1 rounded-[0.25rem] border-(--light-color) cursor-pointer py-3 hover:bg-(--light-color) hover:text-(--dark-color) transition duration-300 flex justify-center gap-3 items-center h-[60px]'>
            <img src="../src/images/google-icon.png" alt="" className='w-7 h-7'/>
            Google
          </button>
          <button className='bg-transparent font-(family-name:--main-font) text-(--light-color) text-xl border-1 rounded-[0.25rem] border-(--light-color) cursor-pointer py-3 hover:bg-(--light-color) hover:text-(--dark-color) transition duration-300 flex justify-center gap-3 items-center h-[60px]'>
            <img src="../src/images/apple-icon.png" alt="" className='w-7 h-8'/>
            Apple
          </button>
        </div>
      </form>
    </section>
  )
}
export default App