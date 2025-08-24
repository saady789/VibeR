"use client";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
export const Page = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "saad" }));
  console.log("data is ", data);
  return (
    <div className="font-bold">
      <Button>Click ME </Button>
    </div>
  );
};

export default Page;
