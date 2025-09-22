const Cart = () => {
    const items = ["Çanta", "Kulaklık", "Şarj aleti", "SSD sabit disk"];

    return (
      <div className="demo">
        <h2>Using array in React</h2>
        <h3>Cart 🛒</h3>
        {items.length > 0 && (
          <h4>You have {items.length} items in your cart</h4>
        )}
        <h4>Products - some Turkish here :)</h4>
        <ul>
          {items.map((item) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
      </div>
    );
};

export default Cart;