import SayHello from './SayHello';
import SubmitEvent from './component/chap01_event/SubmitEvent';
// import ClickEvent from './component/chap01_event/ClickEvent';
import changeEvent from './component/chap01_event/changeEvent';

function App() {

  const looping = () => {
    const helloList = [];
    for (let i = 0; i < 5; i++) {
      helloList.push(<SayHello />);
    }
    return helloList;
  };

  // jsx문법에서는 스크립트를 코드를 직접 사용 불가능
  // {} 안에서 함수호출문이나 변수참조를 할 수 있음.
  return (
    <>
      <SubmitEvent></SubmitEvent>
    </>
  );
}

export default App;