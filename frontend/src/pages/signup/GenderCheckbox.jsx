const GenderRadioButtons = () => {
    return (
      <div className="flex">
        <div className="form-control">
          <label className={'label gap-2 cursor-pointer'}>
            <input type="radio" name="gender" value="male" className="border-slate-900" />
            <span className="label-text text-white">Male</span>
          </label>
        </div>
        <div className="form-control">
          <label className={'label gap-2 cursor-pointer'}>
            <input type="radio" name="gender" value="female" className="border-slate-900" />
            <span className="label-text text-white">Female</span>
          </label>
        </div>
        
      </div>
    )
  }
  
  export default GenderRadioButtons;



//  STARTER CODE FOR THIS FILE
//   const GenderRadioButtons = () => {
//     return (
//       <div className="flex">
//         <div className="form-control">
//           <label className={'label gap-2 cursor-pointer'}>
//             <input type="radio" name="gender" value="male" className="border-slate-900" />
//             <span className="label-text text-white">Male</span>
//           </label>
//         </div>
//         <div className="form-control">
//           <label className={'label gap-2 cursor-pointer'}>
//             <input type="radio" name="gender" value="female" className="border-slate-900" />
//             <span className="label-text text-white">Female</span>
//           </label>
//         </div>
        
//       </div>
//     )
//   }
  
//   export default GenderRadioButtons;
  
  