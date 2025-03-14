/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card";

export default async function AuthLayout({children, params}: any) {
  console.log("🚀 ~ AuthLayout ~ params:", params)
  const p = await params;
  console.log("🚀 ~ AuthLayout ~ p:", p)
  
  

return (
  <div className="flex justify-center items-center w-full h-full">
      <Card className="p-4 gap-2">
        {children}
      </Card>
    </div>
)

}