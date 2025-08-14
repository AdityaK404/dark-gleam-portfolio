'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
export function SplineSceneBasic() {
  return <Card className="w-full h-[500px] bg-transparent border-none shadow-none relative overflow-hidden">
      
      <div className="flex h-full">
        {/* Left content */}
        

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>;
}