import {createPortal} from 'react-dom'; // createPortal is imported from 'react-dom', not 'react'.
const PopupCopy = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ bottom: "1rem", right: "1rem", position: "absolute" }}>
          Copied to clipboard using portal.
        </div>
      )}
    </section>,
    document.querySelector('#popup-content')
  );
};

export default PopupCopy;
