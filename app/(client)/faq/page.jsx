import Container from "@/components/Container";
import FAQs from '@/lib/Faqs.json'
import React from "react";

const page = () => {
  const chunkArray = (arr, numChunks) => {
    const chunks = Array.from({ length: numChunks }, (_, i) =>
      arr.filter((_, index) => index % numChunks === i)
    );
    return chunks;
  };
  
  const columns = chunkArray(FAQs, 3);
  return (
    <main>
      <Container className={'my-20'}>
        <h1 className="text-3xl font-semibold">Frequently Asked Questions (FAQs)</h1>
        <div className="p-10 flex mt-10 flex-col gap-5 text-white items-center bg-gradient-to-r from-nuqi-bgfade to-nuqi-bgdark my-5 rounded-xl">
          <h1 className="text-2xl text-nuqi-gold font-semibold text-center">What is NUQI ?</h1>
          <p className="text-center sm:px-32 ">NUQI is an independent advisory platform, licensed by SEBI in India aimed at both first-time investors starting their investment journey and seasoned investors looking to diversify their portfolio. NUQI deploys its in-house expertise to create portfolios tailored for specific Investor profile/ Investment Themes. NUQI has a team of qualified Investment Managers and select financial bodies to independently screen the Universe of Ethical investments with both Domestic and International market exposures. The platform uses multiple criteria to make a selection of Stocks, ETFs, Mutual funds, Sukuks etc. with Social Equity, Ethical operations, good Governance, and Environment protection as core investment themes which are considered as key elements aimed towards Sustainable Growth.</p>
        </div>
        <div className="grid gap-5 sm:gap-8 sm:grid-cols-3">
    {columns.map((col, colIndex) => (
      <div key={colIndex} className="flex flex-col gap-5">
        {col.map((ques, index) => (
          <QuestCard key={index} question={ques.question} answer={ques.answer} />
        ))}
      </div>
    ))}
  </div>
      </Container>
    </main>
  );
};

export default page;


const QuestCard = ({ question, answer }) => {
  return (
    <div className="p-6 group hover:bg-gradient-to-tr hover:from-nuqi-bgfade hover:to-nuqi-bgdark rounded-xl border shadow-lg">
      <h1 className="text-xl group-hover:text-nuqi-gold font-semibold mb-4">{question}</h1>
      <p className="group-hover:text-white">{answer}</p>
    </div>
  );
};