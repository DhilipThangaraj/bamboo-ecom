import { Link } from "react-router-dom"; // Ensure correct import
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

const UserButton = () => {
  return (
    <Button asChild>
      <Link to="/sign-in" className="flex items-center gap-2">
        <UserIcon /> Sign In
      </Link>
    </Button>
  );
};

export default UserButton;
