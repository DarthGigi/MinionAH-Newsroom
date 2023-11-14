
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ImageBeforeAfter(props) {
  return (
    <Tabs defaultValue="before" className="p-4 flex-shrink h-[30rem] rounded-lg bg-neutral-950 justify-between flex flex-col">
      <TabsList className="mx-auto">
        <TabsTrigger value="before">Before</TabsTrigger>
        <TabsTrigger value="after">After</TabsTrigger>
      </TabsList>
      <TabsContent value="before">
        <div className="flex items-center h-full">
          <img src={props.before} className="rounded-lg m-0 pointer-events-none max-h-[24.5rem] !w-auto mx-auto" alt="Before"/>
        </div>
      </TabsContent>
      <TabsContent value="after">
        <div className="flex items-center h-full">
          <img src={props.after} className="rounded-lg m-0 pointer-events-none max-h-[24.5rem] !w-auto mx-auto" alt="After"/>
        </div>
      </TabsContent>
    </Tabs>
  )
}