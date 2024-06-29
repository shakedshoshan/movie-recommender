import { Loader } from "lucide-react";

export default function LoadingComp() {
  return (
    <div className="pl-44 flec flex-col items-center justify-center py-20 space-y-1">
      <p className="text-white font-semibold bottom-56 items-center justify-center">Loading your new recommends...</p>
      <div className="loader2 "></div>
    </div>
  )

}