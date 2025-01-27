import { apiRequest } from "@/lib/apiService";
import ProductList from "@/components/product/product-list";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import LoadingPage from "./loading";
import { apiRequestType, queryStatusType, queryKey } from "@/lib/constants";

// Define constants for API request and query keys
const API_URL = "/products";

// Product TypeScript Interfaces
interface ProductRating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

// Fetch Product Listing Function
async function fetchProductLists(): Promise<Product[]> {
  try {
    return await apiRequest<Product[]>(apiRequestType.GET, API_URL);
  } catch (error: unknown) {
    console.error("Error fetching product list:", error);
    throw new Error(
      (error as { message?: string })?.message || "Failed to fetch product list"
    );
  }
}

const ProductListingPage: React.FC = () => {
  const { toast } = useToast();

  const {
    data: products,
    status,
    error,
  } = useQuery<Product[], Error>({
    queryKey: [queryKey.productLists],
    queryFn: fetchProductLists,
  });

  // Handle Loading State
  if (status === queryStatusType.PENDING) {
    return <LoadingPage />;
  }

  // Handle Error State
  if (status === queryStatusType.ERROR) {
    toast({
      description: `Error: ${error.message || "Failed to fetch product list"}`,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Retry"
        >
          Retry
        </ToastAction>
      ),
    });
    return <div>Error fetching product list. Please try again later.</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <ProductList data={products} title="Discover the Latest Arrivals" />
    </div>
  );
};

export default ProductListingPage;
