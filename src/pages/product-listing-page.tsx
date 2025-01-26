import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/apiService";
import ProductList from "@/components/product/product-list";
//import InfiniteScroll from "react-infinite-scroll-component";

const ProductListingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchReq();
  }, []);

  const fetchReq = async () => {
    const res = await apiRequest("GET", "/products");
    console.log("?????????????res", res);
    setData(res);
  };
  return (
    <div className="container mx-auto p-4">
      <ProductList data={data} title="Discover the Latest Arrivals" />
    </div>
  );
};

export default ProductListingPage;
