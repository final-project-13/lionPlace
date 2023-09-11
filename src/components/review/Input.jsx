import { string } from 'prop-types';
import { useId, useState } from "react"


function Input({label, placeholder}) {
  const inputId = useId();
  const [letterCount, setLetterCount] = useState(0);

  return (
    <div className="flex flex-col gap-2 w-full self-center">
      <label htmlFor="inputId" className="text-lg text-center font-semibold">{label}</label>
      <textarea id="inputId" rows="5" maxLength="400"
        placeholder={placeholder}
        className="bg-slate-100 rounded p-3 focus:outline-primary"
        onChange={(e)=>setLetterCount(e.target.value.length)}>
      </textarea>
      <span className="text-xs text-right">{letterCount}/400</span>
    </div>
  )
}

Input.propTypes = {
  label: string,
  placeholder: string
};


export default Input