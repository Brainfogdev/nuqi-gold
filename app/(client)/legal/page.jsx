import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const page = () => {
  return (
    <main className="">
      <Container className={'my-20 h-full'}>
        <Tabs defaultValue="terms" className="flex gap-10">
          <TabsList className="flex h-full bg-white gap-2  flex-col">
            <TabsTrigger className='text-lg p-5 px-8 data-[state=active]:bg-gradient-to-tr data-[state=active]:from-nuqi-bgfade data-[state=active]:to-nuqi-bgdark data-[state=active]:text-white rounded-full h-auto' value="terms">Terms of Use</TabsTrigger>
            <TabsTrigger className='text-lg p-5 px-8 data-[state=active]:bg-gradient-to-tr data-[state=active]:from-nuqi-bgfade data-[state=active]:to-nuqi-bgdark data-[state=active]:text-white rounded-full h-auto' value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger className='text-lg p-5 px-8 data-[state=active]:bg-gradient-to-tr data-[state=active]:from-nuqi-bgfade data-[state=active]:to-nuqi-bgdark data-[state=active]:text-white rounded-full h-auto' value="disclaimer">Disclaimer</TabsTrigger>
            <TabsTrigger className='text-lg p-5 px-8 data-[state=active]:bg-gradient-to-tr data-[state=active]:from-nuqi-bgfade data-[state=active]:to-nuqi-bgdark data-[state=active]:text-white rounded-full h-auto' value="cookie">Cookie Policy</TabsTrigger>
          </TabsList>

          <TabsContent value="terms">
            <h2 className="text-xl font-semibold mb-4">Terms of Use</h2>
            <p>Terms of use content goes here...</p>
          </TabsContent>

          <TabsContent value="privacy">
            <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
            <p>This privacy policy applies to Nuqi Wealth India Pvt Ltd...</p>
          </TabsContent>

          <TabsContent value="disclaimer">
            <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
            <p>Disclaimer content goes here...</p>
          </TabsContent>

          <TabsContent value="cookie">
            <h2 className="text-xl font-semibold mb-4">Cookie Policy</h2>
            <p>Cookie policy content goes here...</p>
          </TabsContent>
        </Tabs>
      </Container>
    </main>
  );
};

export default page;
