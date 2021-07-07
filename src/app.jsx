import React, { useState, useEffect} from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAcAQP4UDSKsWBrt5fPNhAA8nGI1CI2bqk&part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyAcAQP4UDSKsWBrt5fPNhAA8nGI1CI2bqk", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div className={styles.app}>
      <SearchHeader/>
      <VideoList videos={videos} />
    </div>
  )

  
}

export default App;
