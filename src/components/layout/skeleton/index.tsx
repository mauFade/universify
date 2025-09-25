import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CommonSkeleton = () => {
  return (
    <Card className="transition-all duration-500 ease-out hover:scale-[1.015] hover:shadow-md">
      <CardHeader className="flex items-center justify-between">
        <Skeleton className="h-[20px] w-32" />
        <Skeleton className="h-[20px] w-4" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <Skeleton className="h-8 w-24" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-[20px] w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CommonSkeleton;
