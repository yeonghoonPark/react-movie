import { useState, useEffect } from "react";

/* 
  component에 useEffect를 사용하여 component가 실행 될 때 딱 1번만 코드를 실행하게
  설정해 놓았다, 그리고 create가 아닌 destroy 할 때도 함수를 실행 할 수 있다.
  아래에서 useEffect안에서 return을 이용하여 destroy시에도 함수를 실행한다.
  이를 "Cleanup function" 이라고 부른다.
  "Celanup function" 은 자주 사용되지는 않는다.
*/

function Hello() {
  const createFn = () => {
    console.log("Created2");
    return destroyFn;
  }
  const destroyFn = () => {
    console.log("Destroyed2");
  }

  // 정리 1번, 보통 useEffect안에서 함수를 콜하지 않고 함수를 작성한다.
  useEffect(() => {
    console.log("Created1");
    return () => console.log("Destroyed1");
  }, []);

  // 정리 2번, createFn에서 return값으로 destroyFn
  useEffect(createFn, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  const invertedBoolean = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={invertedBoolean}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
