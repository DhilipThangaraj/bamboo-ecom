import { Button } from "@/components/ui/button";
import { LOGO_URL } from "@/lib/constants";

const NotFoundPage = () => {
  const appName = import.meta.env.VITE_APP_NAME;

  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={LOGO_URL} width={100} height={100} alt={`${appName} logo`} />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={handleRedirect}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
