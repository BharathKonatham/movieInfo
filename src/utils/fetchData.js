import axiosInstance from './axios' 
export const fetchMoviesTen = async(movieName,page=1) => {
    try {
      const response = await axiosInstance.get(`${movieName}&r=json&page=${page}`); 
      const data = response.data;
      return data
      }catch (error) {
      console.log(error)
    }
    
  }