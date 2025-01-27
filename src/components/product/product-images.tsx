// import { useState } from "react";
// import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string }) => {
  return (
    <div className="space-y-4">
      <img
        src={images}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      {/* <div className="flex">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              onClick={() => setCurrent(index)}
              className={cn(
                "border mr-2 cursor-pointer hover:border-orange-600",
                current === index && "border-orange-500"
              )}
            >
              <Image
                src={
                  image?.thumbnail
              
                }
                alt={"image"}
                height={100}
                width={100}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ProductImages;
