fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data); // A -> A'
    // 'Male' => 출력.
    // 'Female' => 출력.
    ["Male", "Female"].forEach((gender) => {
      console.log(
        `${gender} => ${data
          .filter((elem) => elem.gender == `${gender}`)
          .map((elem) => elem.first_name)
          .join(",")}`
      );
    });
  })
  .catch(console.log);
