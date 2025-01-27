import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AddToCart = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      description: `${title} is added to cart.`,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Go To Cart"
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </ToastAction>
      ),
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
