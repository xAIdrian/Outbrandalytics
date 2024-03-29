import React from "react";
import { useLocation } from "react-router-dom";
import ContentScrollComponent from "./ContentScrollComponent";
import DraftScrollComponent from "./DraftScrollComponent";

const DraftContentPage = () => {
  const location = useLocation();
  const userDraftContents = location.state;

  return (
    <div>
      <h2 className="text-2xl font-semibold leading-6 text-orange-900">
        {userDraftContents.email}'s Drafts and Content
      </h2>
      <br/>
      <br/>
      <div className="grid grid-cols-2">
        <div className="h-[600px] overflow-y-auto">
          <DraftScrollComponent listItems={userDraftContents.drafts} />
        </div>
        <div className="h-[600px] overflow-y-auto">
          <ContentScrollComponent listItems={userDraftContents.content} />
        </div>
      </div>
    </div>
  );
};

export default DraftContentPage;
