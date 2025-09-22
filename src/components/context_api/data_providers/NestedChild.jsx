import { Data, Data2 } from "./ParentProvider";

const NestedChild = () => {
  return (
    <div className="nestedChild">
      <div>Get data using sibling consumers:</div>
      <Data2.Consumer>
        { age => <div>First part of data: {age}</div>}
      </Data2.Consumer>
      <Data.Consumer>
        {name => name ? <div>{name}</div> : <div>Click the button for the second part</div>}
      </Data.Consumer>  

      <br />
      
      <div>Get data using nested consumers:</div>
      <Data.Consumer>
        {name =>
            <Data2.Consumer>
                {age =>
                    <div>
                        <div>First part of data: {age}</div>
                        {name ? <div>{name}</div> : <div>Click the button for the second part</div>}
                    </div>
                }
            </Data2.Consumer>
        }
      </Data.Consumer>
    </div>
  );
};

export default NestedChild;
