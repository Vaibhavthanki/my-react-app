import React from "react";
import { Link } from "react-router-dom";

// out of component hooks cannot be used
// const [isActive, setIsActive] = useState(false);
// console.log(isActive, "checkboth", setIsActive);
export const Navigation = () => {
  // 1 :- Loops
  // for (let i = 0; i < 5; i++) {
  //   const [isActive, setIsActive] = useState(false);
  // }

  // 2 :- Conditional Statements
  // if(true){
  //   const [isActive, setIsActive] = useState(false);
  // }else{
  //   const [isActive, setIsActive] = useState(true);
  // }

  // 3 :- Can not call inside other hooks
  // useEffect(() => {
  //   const [isActive, setIsActive] = useState(false);
  //   console.log(isActive, "checkboth", setIsActive);
  // }, []);
  // useMemo(() => {
  //   const [isActive, setIsActive] = useState(false);
  //   console.log(isActive, "checkboth", setIsActive);
  // },[])
  // useCallback(() => {
  //   const [isActive, setIsActive] = useState(false);
  //   console.log(isActive, "checkboth", setIsActive);
  // },[])

  // 4:- Can not call inside event handlers
  // const handleClick = () => {
  //   const [isActive, setIsActive] = useState(false);
  // };

  // if(true){
  //   return const [isActive, setIsActive] = useState(false);
  // }else{
  //   return const [isActive, setIsActive] = useState(true);
  // }
  return (
    <div className="d-flex justify-content-between p-3 bg-light">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col mr-3">
              <Link to="/home">Home</Link>
            </div>
            <div className="col mr-3">
              <Link to="/about">About</Link>
            </div>
            <div className="col mr-3">
              <Link to="/parent">Parent</Link>
            </div>
            <div className="col mr-3">
              <Link to="/crud">Crud</Link>
            </div>
            <div className="col mr-3">
              <Link to="/rendercycle">RenderCycle</Link>
            </div>
            <div className="col mr-3">
              <Link to="/reducer">Reducer</Link>
            </div>
            <div className="col mr-3">
              <Link to="/language">Language</Link>
            </div>
            <div className="col mr-3">
              <Link to="/ref">Ref</Link>
            </div>
            <div className="col mr-3">
              <Link to="/axios">Axios</Link>
            </div>
            <div className="col mr-3">
              <Link to="/productData">ProductData</Link>
            </div>
            <div className="col mr-3">
              <Link to="/userList">UserList</Link>
            </div>
            <div className="col mr-3">
              <Link to="/errorHandeling">ErrorHandeling</Link>
            </div>
            <div className="col mr-3">
              <Link to="/redux">Redux</Link>
            </div>
            {/* <div className="col mr-3">
              <button onClick={handleClick}>Registration</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
