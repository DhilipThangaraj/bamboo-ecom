import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link to={`/products/${product?.id}`} className="block">
          <img
            src={
              product?.image ||
              "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            }
            alt={product?.title}
            className="object-cover w-full h-[350px]"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <Link to={`/products/${product?.id}`}>
          <h2 className="text-sm font-medium">{product?.title}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating?.rate} Stars</p>
          {Object.keys(product).length > 0 ? (
            <ProductPrice
              regularPrice={Number(product?.price)}
              offerPrice={Number(product?.price + 50)}
              currency={"AED"}
            />
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
