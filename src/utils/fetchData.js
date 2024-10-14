import axiosInstance from './axios' 
export const fetchMoviesTen = async(movieName,page=1) => {
  console.log('movie')
    try {
      const response = await axiosInstance.get(`/?s=${movieName}&r=json&page=${page}`); 
      const data = response.data;
      console.log(data)
      return data
      }catch (error) {
      console.log(error)
    }
    
  }
  export const fetchMovieInfo = async(imdbID) => {
    
      try {
        const response = await axiosInstance.get(`/?r=json&i=${imdbID}`); 
        const data = response.data;
        return data
        }catch (error) {
        console.log(error)
      }
      
    }