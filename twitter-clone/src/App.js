import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {


  // api key => rzfSzbw2KScM83szaXE6kJcjd
  //api key secret => jSynYCQfNtWTyUZ4qywIIsUydmi8DScy2c0xw1LQZzmxvfaQ3F
  //https://api.twitter.com/2/tweets
  //"https://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330" -H "Authorization: Bearer $ACCESS_TOKEN"
  // Single user by username => https://api.twitter.com/labs/2/users/by/username/:username

  //Bearer token => AAAAAAAAAAAAAAAAAAAAAEXrcwEAAAAAdaWUBPAB2%2BbDk3tIk5GGzZ4eiAA%3DQQRRphjS2JXJvhebjyuvNZPuSQyGQFARBhhRBjYllECUY0RgkR
  //curl "https://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330" -H "Authorization: Bearer $ACCESS_TOKEN"
  //curl "https://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330" -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAEXrcwEAAAAAdaWUBPAB2%2BbDk3tIk5GGzZ4eiAA%3DQQRRphjS2JXJvhebjyuvNZPuSQyGQFARBhhRBjYllECUY0RgkR"

  
  const getData = () => {
    try{
      // axios.get("https://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330" -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAEXrcwEAAAAAdaWUBPAB2%2BbDk3tIk5GGzZ4eiAA%3DQQRRphjS2JXJvhebjyuvNZPuSQyGQFARBhhRBjYllECUY0RgkR")
      // .then(res => console.log(res));


      axios.get("http://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330", {
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAEXrcwEAAAAAdaWUBPAB2%2BbDk3tIk5GGzZ4eiAA%3DQQRRphjS2JXJvhebjyuvNZPuSQyGQFARBhhRBjYllECUY0RgkR"
        }
        
      })

      //curl "https://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330" -H "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAEXrcwEAAAAAdaWUBPAB2%2BbDk3tIk5GGzZ4eiAA%3DQQRRphjS2JXJvhebjyuvNZPuSQyGQFARBhhRBjYllECUY0RgkR"
    }
    catch(err){
      console.log('err', err)

    }
  }
  
  useEffect(()=> {
    getData();
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
