import Form from "./attributes/Form";
import List from "./iteration/List";
import User from "./component_input/User";
import Cart from "./conditional/Cart";
import Password from "./conditional/Password";
import InlineStyled from "./css_styles/InlineStyled";
import StyleWithObject from "./css_styles/StyleWithObject";
import StyleWithCssFile from "./css_styles/StyleWithCssFile";
import Computer from "./icons/Computer";
import Events from "./events/Events";
import StateDemo from "./states/StateDemo";
import ArrayState from "./states/ArrayState";
import ObjectState from "./states/ObjectState";
import ArrayOfObjectsState from "./states/ArrayOfObjectsState";
import StateSharing from "./states/StateSharing";
import StateWithFunctionInitialization from "./states/StateWithFunctInit";
import RandomNumberState from "./states/RandomNumberState";
import UseEffectDemo from "./states/UseEffectDemo";
import ProfileUpdate from "./states/ProfileUpdate";
import ShoppingList from "./states/ShoppingList";
import CopyToClipboard from "./states/CopyToClipboard";
import CopyToClipboardPortal from "./portal/CopyToClipboard";
import Switcher from "./keys/Switcher";

const MainContent = () => {
  const city = "Mersin";
  const mult = (x, y) => x * y;
  const date = new Date();

  return (
    <main id="main">
      <h2>Each widget corresponds to some feature in React</h2>
      <br />
      <Switcher />
      <br />
      <CopyToClipboardPortal />
      <br />
      <CopyToClipboard />
      <br />
      <ShoppingList />
      <br />
      <ProfileUpdate />
      <br />
      <UseEffectDemo />
      <br />
      <RandomNumberState />
      <br />
      <StateWithFunctionInitialization />
      <br />
      <StateSharing />
      <br />
      <ArrayOfObjectsState />
      <br />
      <ObjectState />
      <br />
      <ArrayState />
      <br />
      <StateDemo />
      <br />
      <Events />
      <br />
      <Computer />
      <br />
      <StyleWithCssFile />
      <br />
      <StyleWithObject />
      <br />
      <InlineStyled />
      <br />
      <Cart />
      <div className="demo text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui vero
        laboriosam est eum. Ex impedit, in nostrum pariatur nisi vel, fugit cum
        maxime temporibus facilis quos soluta perspiciatis culpa quibusdam!
      </div>
      <br />
      <div className="demo text">
        <h2>Basics of JSX</h2>
        <p>
          2 + 2 = {2 + 2}. 2 * 2 = {mult(2, 2)}
        </p>
        <p>Here is {city}</p>
        <p> An example array shrinked: {[1, 2, 3, 4]}</p>
        <span>Day of today is {date.getDate()}.</span>
        <br />
        <br />
        <h4>Use of className</h4>
        <Form />
      </div>
      <br />
      <User
        img="./src/assets/me.png"
        name="Ahmet Yaşar Özer"
        age="46"
        isMarried="false"
        hobbies="Reading, learning, hiking"
      >
      <h4>Work Status: Looking for the next challenge</h4>
      </User>
      <br />
      <List />
      <br />
      <div className="demo">
        <h2>Using conditional components</h2>
        <Password isValid={true} />
        <Password isValid={false} />
      </div>
    </main>
  );
};

export default MainContent;
