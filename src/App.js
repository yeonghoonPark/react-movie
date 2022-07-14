import { useState, useEffect } from "react";

/* 
  state가 변화하면 component는 항상 렌더링된다. 
  상황에 따라 좋을 수 있다. (component전체를 렌더링 해야하는 경우)
  하지만 원치 않는 상황(component에서 특정함수를 1번만 호출하고 싶을 경우)
  에서도 component전체가 렌더링되는 문제점이 있다.
*/

/* 
  useEffect는 2개의 argument를 가지는 function이다.
  1번째 argument = 딱 1번만 실행하고 싶은 코드(ex: API)
  2번째 argument = []가 온다, 이 []안에 들어가는 state는 
  state변화가 있을 경우에만 useEffect의 코드를 재실행(리렌더링)한다.
*/


function App() {
  const [cnt, setCnt] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCnt((cnt) => cnt + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");

  useEffect(()=>{
    console.log("I run only once.");
  }, []);

  useEffect(()=>{
    if(keyword !== ""){
      console.log(`I run when 'keyword' changes.`);
    }
  }, [keyword]);

  useEffect(()=>{
    console.log("I run when 'cnt' changes.");
  }, [cnt])

  useEffect(()=>{
    console.log("I run when 'cnt' changes. & I run when 'keyword' changes.");
  }, [cnt, keyword])
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <button onClick={onClick}>{cnt}</button>
    </div>
  );
}

export default App;
