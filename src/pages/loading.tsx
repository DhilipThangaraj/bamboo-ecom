import loader from "@/styles/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "25%",
      }}
    >
      <img src={loader} height={100} width={100} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
