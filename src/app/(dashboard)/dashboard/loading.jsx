import Loader from "@/app/generalComponents/Loader";


export default function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader size={60} color="text-red-600" />
    </div>
  );
}
