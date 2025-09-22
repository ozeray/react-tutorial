import { useState } from "react";
import PopupCopy from "./PopupCopy";

const CopyToClipboardPortal = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  
  const handleChange = e => setText(e.target.value);
  const handleCopy = () => navigator.clipboard.writeText(text)
                                              .then(() => {
                                                setCopied(true);
                                                setTimeout(() => {setCopied(false); setText('')}, 3000);
                                              });

  return (
    <div className='demo'>
        <h2>Copy to clipboard for 3 seconds (using 'React portal')</h2>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleCopy}>Copy</button>
        <PopupCopy copied={copied} />
    </div>
  )
}

export default CopyToClipboardPortal;