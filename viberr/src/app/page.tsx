import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
const Page = () => {
  return (
    <div className="font-bold">
      <Button>Click ME </Button>
    </div>
  );
};

export default Page;
