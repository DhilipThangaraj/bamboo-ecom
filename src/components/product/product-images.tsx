const ProductImages = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="space-y-4">
      <img
        src={imageUrl}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
    </div>
  );
};

export default ProductImages;
