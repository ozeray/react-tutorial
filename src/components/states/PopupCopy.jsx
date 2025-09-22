const PopupCopy = ({ copied }) => {
  return (
    <section>
      {copied && (
        <div style={{ bottom: "1rem", right: "1rem", position: "absolute" }}>
          Copied to clipboard.
        </div>
      )}
    </section>
  );
};

export default PopupCopy;
