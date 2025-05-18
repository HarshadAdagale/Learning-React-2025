import { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus()

  return <div>
      <input type="text"
             ref={inputRef}
             placeholder="Click Button To Focus"
      />
      <button onClick={focusInput}>Focus</button>
  </div>
}

export default FocusInput;