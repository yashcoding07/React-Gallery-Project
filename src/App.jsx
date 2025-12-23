import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
import Mainpage from "./components/Mainpage";

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className="text-gray-400 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {

      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      )
    })
  }

  return (
    <div className="bg-black h-screen w-full text-white overflow-auto flex flex-col justify-center items-center">
      <Mainpage printUserData={printUserData}/>
      <Buttons index={index} setIndex={setIndex} setUserData={setUserData}/>
    </div>
  )
}

export default App