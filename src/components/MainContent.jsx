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
import StateDemo from "./useState_hook/StateDemo";
import ArrayState from "./useState_hook/ArrayState";
import ObjectState from "./useState_hook/ObjectState";
import ArrayOfObjectsState from "./useState_hook/ArrayOfObjectsState";
import StateSharing from "./useState_hook/StateSharing";
import StateWithFunctionInitialization from "./useState_hook/StateWithFunctInit";
import RandomNumberState from "./useState_hook/RandomNumberState";
import UseEffectDemo from "./useState_hook/UseEffectDemo";
import ProfileUpdate from "./useState_hook/ProfileUpdate";
import ShoppingList from "./useState_hook/ShoppingList";
import CopyToClipboard from "./useState_hook/CopyToClipboard";
import CopyToClipboardPortal from "./portal/CopyToClipboard";
import Switcher from "./keys/Switcher";
import UseEffectWithoutDepArray from "./useEffect_hook/UseEffectWithoutDepArray";
import UseEffectWithEmptyDepArray from "./useEffect_hook/UseEffectWithEmptyDepArray";
import DataFetching from "./useEffect_hook/DataFetching";
import ParentProvider from "./sharing_data_bw_comps/data_consumers/ParentProvider";
import ParentProvider2 from "./sharing_data_bw_comps/useContext_hook/ParentProvider2";
import UserProvider from "./sharing_data_bw_comps/useContext_hook/exercise/UserContext";
import UserProfile from "./sharing_data_bw_comps/useContext_hook/exercise/UserProfile";
import UpdateUser from "./sharing_data_bw_comps/useContext_hook/exercise/UpdateUser";
import Counter from "./useReducer_hook/Counter";
import FocusElement from "./useRef_hook/FocusElement";
import Timer from "./useRef_hook/Timer";
import DataFetchingV2 from "./custom_hooks/DataFetchingV2";
import UniqueId from "./useId_hook/UniqueId";

const MainContent = () => {
  const city = "Mersin";
  const mult = (x, y) => x * y;
  const date = new Date();

  return (
    <main id="main">
      <h2>Each widget corresponds to some feature in React</h2>
      <br />
      <UniqueId />
      <br />
      <DataFetchingV2 />
      <Timer />
      <br />
      <FocusElement />
      <br />
      <Counter />
      <br />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <br />
      <ParentProvider2 />
      <br />
      <ParentProvider />
      <br />
      <DataFetching />
      <br />
      <UseEffectWithEmptyDepArray />
      <br />
      <UseEffectWithoutDepArray />
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
