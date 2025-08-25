fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // code here...
    // 댓글번호 : 123
    // 댓글번호 : 117
    result
      .filter((elem, idx, ary) => {
        // reply '연습' 포함된 댓글번호.
        //'글등록연습'.indexOf('연습')

        if (elem.replyer == "user03") {
          //elem : 전체 속성이 가진값 elem.() = elem에서 해당하는
          // 속성 값을 지정 elem.point elem속성의 point값을 지정
          return true;
        }
      })
      .forEach((elem) => {
        console.log(elem);
      });
  })
  .catch(console.log);

//map (mapping)
//A -> A'
// {name, age, point} => {name, point}
