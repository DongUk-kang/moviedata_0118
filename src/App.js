import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {


  // 1. 데이터 담을 공간 useState 함수 이용
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  //3. 네트워킹
  const getData = async () => {
    return (
        await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
            // .then(aaa => console.log(aaa.data.results))
            .then(aaa => {
              setMovies(aaa.data.results)
              setLoading(false)
            })
            .catch(err => console.log(err))
    )
  }




  //2. 자동실행 함수 useEffect 사용
  useEffect(() => {
    getData()
  }, [])

  return (
      <>
          {loading ?
              <div>
                  <h1>
                      loading ...
                  </h1>
              </div>
              : (
                  <div>
                      {movies.map(movie => (
                          <>
                              <h1>{movie.title}</h1>
                              <h2>{movie.release_date}</h2>
                              <h3>{movie.overview}</h3>
                          </>
                      ))}
                  </div>
              )
          }
          </>








)

}

export default App;