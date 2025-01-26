import { apiRequest } from "@/lib/apiService";
import { useEffect } from "react";

const ProductListingPage = () => {
  useEffect(() => {
    fetchReq();
  }, []);

  const fetchReq = async () => {
    const res = await apiRequest("GET", "/products");
    console.log("?????????????res", res);
  };
  return <>Product Listing Page</>;
};

export default ProductListingPage;
