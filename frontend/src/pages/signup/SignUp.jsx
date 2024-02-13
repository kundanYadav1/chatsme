// import React from 'react'
 import GenderCheckbox from "./GenderCheckbox";
const SignUp = () => {
  return <div className='flex flex-col items-center min-w-96 mx-auto'>
    <div className="w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop:backdrop-filter backdrop-blur-lg
    bg-opacity-0">
      <h1 className="text-3x1 font-semibold text-center text-grey-300 text-white">
        Sign Up
        <span className="text-blue-500"> ChatsMe</span>
      </h1>
      <form >
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-white">Full Name</span>
          </label>
          <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs h-10" />

        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text text-white">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs h-10" />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text text-white">Password</span>
          </label>
          <input type="Password"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text text-white">Confirm Password</span>
          </label>
          <input type="Password"
            placeholder="Confirm Password"
            className="w-full input input-bordered h-10"
          />
        </div>
        <GenderCheckbox />
        <a className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block text-white" href="">
          Already have an account?
        </a>

        <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700 hover:bg-green-600">Sing Up</button>
        </div>
      </form>

    </div>
  </div>

};

export default SignUp;




// STARTER CODE FOR THIS FILE
// // import React from 'react'
// import GenderCheckbox from "./GenderCheckbox";
// const SignUp = () => {
//   return <div className='flex flex-col items-center min-w-96 mx-auto'>
//     <div className="w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop:backdrop-filter backdrop-blur-lg
//     bg-opacity-0">
//       <h1 className="text-3x1 font-semibold text-center text-grey-300 text-white">
//         Sign Up
//         <span className="text-blue-500"> ChatsMe</span>
//       </h1>
//       <form >
//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-white">Full Name</span>
//           </label>
//           <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs h-10" />

//         </div>

//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text text-white">Username</span>
//           </label>
//           <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs h-10" />
//         </div>
//         <div>
//           <label className="label">
//             <span className="text-base label-text text-white">Password</span>
//           </label>
//           <input type="Password"
//             placeholder="Enter Password"
//             className="w-full input input-bordered h-10"
//           />
//         </div>
//         <div>
//           <label className="label">
//             <span className="text-base label-text text-white">Confirm Password</span>
//           </label>
//           <input type="Password"
//             placeholder="Confirm Password"
//             className="w-full input input-bordered h-10"
//           />
//         </div>
//         <GenderCheckbox />
//         <a className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block text-white" href="">
//           Already have an account?
//         </a>

//         <div>
//           <button className="btn btn-block btn-sm mt-2 border border-slate-700 hover:bg-green-600">Sing Up</button>
//         </div>
//       </form>

//     </div>
//   </div>

// };

// export default SignUp;