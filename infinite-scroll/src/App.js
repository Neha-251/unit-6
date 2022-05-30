import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    console.log('scrollTop', scrollTop)
    console.log('clientHeight', clientHeight)
    console.log('scrollHeight', scrollHeight)

    let scroll_var = Math.round(scrollHeight - scrollTop);
    console.log('scroll_var', scroll_var)

    if(scroll_var === clientHeight){
      
      setLoading(true)
      
    }

    // if(scrollTop % 1289.5999755859375 === 0){
    //   setLoading(true)
    // }

  }

  const getData = () => {
    
    //setLoading(true)
    axios.get("http://localhost:8000/users").then(
      res => setData(prev => [...prev, ...res.data])
    )

    setLoading(false)
  }

  useEffect(() => {
   // if(loading === true){
      getData()
   // } 
    //setLoading(false);
  }, [loading])



  return (
    <div className="App" onScroll={handleScroll}>
      <ul >
        {
          data.map((el, id) => {
            return(
              <li key={id} >{ el.name }</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
