"use client";

import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import ProductPrice from "@/components/product/product-price";
import ProductImages from "@/components/product/product-images";
import AddToCart from "@/components/product/add-to-cart";
import { CardContent, Card } from "@/components/ui/card";
import { apiRequest } from "@/lib/apiService";
import { useQuery } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import LoadingPage from "./loading";
import { queryKey, apiRequestType, queryStatusType } from "@/lib/constants";

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

// Fetch Product Detail Function
async function fetchProductDetail(id: string): Promise<Product> {
  try {
    return await apiRequest<Product>(apiRequestType.GET, `/products/${id}`);
  } catch (error: unknown) {
    console.error("Error fetching product detail:", error);
    throw new Error(
      (error as { message?: string })?.message ||
        "Failed to fetch product detail"
    );
  }
}

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  const { status, data: productDetailData } = useQuery<Product, Error>({
    queryKey: [queryKey.productDetail, id],
    queryFn: () => fetchProductDetail(id || ""),
    enabled: !!id,
  });

  // Handle Loading State
  if (status === queryStatusType.PENDING) {
    return <LoadingPage />;
  }

  // Handle Error State
  if (status === queryStatusType.ERROR) {
    toast({
      description: `The product is not available.`,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Retry"
        >
          Retry
        </ToastAction>
      ),
    });
    return <div>Error fetching product details. Please try again later.</div>;
  }

  // Handle Missing Data
  if (!productDetailData) {
    return <div>Product not found.</div>;
  }

  const { title, price, description, category, image, rating } =
    productDetailData;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Images Column */}
        <div className="col-span-2">
          <ProductImages imageUrl={image || ""} />
        </div>

        {/* Details Column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>{category}</p>
            <h1 className="h3-bold">{title}</h1>
            <p>{rating?.rate || 0} Ratings</p>
            <p>{rating?.count || 0} reviews</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                regularPrice={price}
                offerPrice={price * 0.9}
                currency="AED"
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Description</p>
            <div
              className="mt-10"
              dangerouslySetInnerHTML={{
                __html: description || "No description available.",
              }}
            />
          </div>
        </div>

        {/* Product Card */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice
                    regularPrice={price}
                    offerPrice={price * 0.9}
                    currency="AED"
                  />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {rating?.count > 0 ? (
                  <Badge variant="outline">{rating.count} In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out Of Stock</Badge>
                )}
              </div>
              {rating?.count > 0 && (
                <div className="flex-center">
                  <AddToCart title={title} />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
