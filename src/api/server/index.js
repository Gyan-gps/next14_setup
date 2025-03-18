import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL

export const getHome = async () => {
  try {
    const url_pro = `${baseUrl}/api/gethome`;
    const res_pro = await axios.get(url_pro, { withCredentials: true });
    return { product: res_pro.data };
  } catch (error) {
    console.error("error -->", error);
  }
}

export const getBrands = async () => {
  try {
    const url = `${baseUrl}/api/get/all/brands`;
    const res = await axios.get(url, { withCredentials: true });

    const uniqueCategories = {};
    const uniqueData = res?.data?.filter((item) => {
      if (!uniqueCategories[item.main_category_name]) {
        uniqueCategories[item.main_category_name] = true;
        return true;
      }
      return false;
    });
    return {
      categories: res?.data,
      cat: uniqueData
    };
  } catch (error) {
    console.error("error -->", error);
  }
};

export const getProductDetails = async (slug) => {
  try {
    const url = `${baseUrl}/api/get/single/product/` + slug;
    const res = await axios.get(url, { withCredentials: true });

    return res.data;
  } catch (error) {
    console.error("error -->", error);
  }
};