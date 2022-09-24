import React from 'react';
import swal from 'sweetalert';

//style
import * as S from './style';

function App() {
  const style_alert = () => {
    // 세 번째 인수 값으로 'success', 'warning', 'error', 'info' 등을 넣을 수 있음. 
    swal(" 로그인에 성공하였습니다! ", " Anonymous ", "success");
  }

  const alert_option = () => {
    swal({
      title: "Login Success!",
      text: "Anonymous",
      icon: "success",
      button: "next"
    });
  }

  const alert_promise = () => {
    swal("버튼을 클릭하거나 모달의 바깥화면을 클릭해보세요.")
    .then((value) => {
      swal('반환된 값 : ${value}');
    })
  }

  const alert_promise2 = () => {
    swal({
      title: "정말 삭제하시겠습니까?",
      text: "삭제하면 다시복구할 수 없습니다!",
      icon: "warning",
      button: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if(willDelete) {
        swal("가상 파일이 정상적으로 삭제되었습니다.", {
          icon: "success",
        });
      } else {
        swal("가상 파일이 안전합니다!")
      }
    });
  }

  return (
    <S.background className="App">
      <S.btn onClick={style_alert}>클릭해보세요!</S.btn>
      <S.btn onClick={alert_option}>클릭해보세요!</S.btn>
      <S.btn onClick={alert_promise}>클릭해보세요!</S.btn>
      <S.btn onClick={alert_promise2}>클릭해보세요!</S.btn>
    </S.background>
  );
}

export default App;
