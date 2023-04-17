import React, { useState, useCallback, useEffect } from "react";

import TitlePage from "../../components/TitlePage/TitlePage";
import CollapseQuestion, { FAQ } from "../../components/CollapseQuestion/CollapseQuestion";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const SEARCH_ENDPOINT = "https://api-dev.hesetazegi.com/FAQ/List";

function FreqQuestPage() {

  const [data, setData] = useState<FAQ[]>([]);
  const [loding, setLoding] = useState(true);

  const getReactRepositories = useCallback(() => {
    axios
      .get(SEARCH_ENDPOINT)
      .then((result) => result.data.content)
      .then((repos) => {
        const newRes = [...repos.items];
        console.log("ttttt", newRes);
        setData(newRes);
        setLoding(false);
      });
  }, []);

  useEffect(() => {
    getReactRepositories();
    setLoding(true);
  }, [getReactRepositories]);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 60 }} className="text-secondary" spin />
  );
  
  return (
    <>
      <TitlePage title={"سوالات متداول"} />
      {loding ? (
        <div className="w-full h-96  flex justify-center items-center">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <CollapseQuestion questions={data} />
      )}
    </>
  );
}

export default FreqQuestPage;
