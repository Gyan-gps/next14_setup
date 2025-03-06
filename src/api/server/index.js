import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL

export const getBrands = async () => {
  try {
    const url = `${baseUrl}/api/get/all/brands`;
    const res = await axios.get(url, { withCredentials: true });
    return res?.data;
  } catch (error) {
    console.error("error -->", error);
  }
};