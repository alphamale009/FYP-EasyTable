  



export default function button() {

  const [data, setData] = useState({
    email:'',
    password:'',
    secureTextEntry: true,
    checkInputText: false,
  });

  
  // const inputText = (val) => {
  //   if (val.length === 0){
  //     setData({
  //       ...data,
  //       email: val,
  //       checkInputText: false
  //     })
      
  //   }else{
  //     setData({
  //       ...data,
  //       email: val,
  //       checkInputText: true
  //     })
  //   }
  // }

  // const inputPassword = (val) => {
  //   if (val.length === 0){
  //     setData({
  //       ...data,
  //       password: val,
  //       checkInputPassword: false
  //     })
  //   }else{
  //     setData({
  //       ...data,
  //       password: val,
  //       checkInputPassword: true
  //     })
  //   }
  // }

  const inputPassword = (val) => {
    setData({
      ...data,
      password: val,
      checkInputPassword: false
    })
    
  } 

  const updateSecureTextEntry= () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
}