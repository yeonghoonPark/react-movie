import { useState, useEffect } from "react";

/* 
  reactJS는 state에 변화가 생길 경우 component는 항상 리렌더링된다. 
  상황에 따라 좋을 수 있다. 
  (UI관점에서 새로운 데이터가 들어올 때마다 자동으로 새로고침)
  (component전체를 리렌더링 해야하는 경우)
  하지만 원치 않는 상황
  (component에서 특정함수를 1번만 호출하고 싶을 경우)
  에서도 component전체가 리렌더링되는 문제점이 있다.
*/

/* 
  useEffect의 목적, 코드를 어떤 경우에 또는 언제 실행할지 선택하는 hook
  useEffect는 2개의 argument를 가지는 function이다.
  1번째 argument = 딱 1번만 실행하고 싶은 코드(ex: API)
  2번째 argument = dependencyList 즉 []가 온다, 이 []안에 들어가는 state는 
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

  /*
    dependencyList에 2개 이상이 있을 경우, 둘 중 하나의 스테이트만 변화하더라도
    useEffect는 작동한다.
  */
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
