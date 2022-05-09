import { axiosInstance } from "../webClient";


export const GetBikes = async () => {
  const result = await axiosInstance.get('api/bikes')
  return result.data
}
