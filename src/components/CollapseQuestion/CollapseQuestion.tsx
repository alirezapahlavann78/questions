import React from "react";
import { Collapse } from "antd";
import Parser from "html-react-parser";
const { Panel } = Collapse;
export type FAQ = {
  id: string;
  faqid: number;
  faquid: string;
  language: number;
  groupID: number;
  title: string;
  description: string;
  priority: number;
};
function CollapseQuestion({ questions }: { questions: FAQ[] }) {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2  flex flex-warp">
        {questions.map((question: FAQ) => (
          <>
            <Collapse
              className={`mb-5  mx-1 bg-transparent col-span-2 lg:col-span-1 w-full sm:px-2  border-none rounded-2xl`}
              expandIconPosition="right"
            >
              <Panel
                key={question.id}
                header={question.title}
                className=" border rounded-xl  bg-white"
              >
                {question.description && <p>{Parser(question.description)}</p>}
              </Panel>
            </Collapse>
          </>
        ))}
      </div>
    </div>
  );
}

export default CollapseQuestion;
