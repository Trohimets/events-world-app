import { useEffect, useState } from "react";
import { useGetHistoryMutation } from "../../api/history";
import { Button, Table } from "antd";
import { searchHistoryColumns } from "../../utils/constants/table";

interface IHistoryData {
  query: string;
  results: any;
}
export const HistoryPage = () => {
  //   const [offset, setOffset] = useState(3);
  const [historyData, setHistoryData] = useState<IHistoryData[]>([]);
  const [getHistory] = useGetHistoryMutation();

  useEffect(() => {
    let offset = 10;
    fetchData(offset);
  }, []);

  const fetchData = (offset: number) => {
    // if (offset >= historyData.length + 4) {
    //   return;
    // }
    const body = {
      user_id: localStorage.getItem("user_id"),
      offset: 10,
    };
    getHistory(body)
      .then((response: any) => {
        setHistoryData(response.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>История запросов</h2>

      {historyData.map((el, i) =>
        el.results.length ? (
          <>
            <h3 style={{ margin: "30px 0 5px 0" }}>
              Поисковый запрос: {el.query}
            </h3>
            {}
            <Table
              columns={searchHistoryColumns}
              dataSource={el.results}
              size="large"
              pagination={false}
            />
          </>
        ) : (
          ""
        )
      )}

      {/* {historyData && offset >= historyData.length + 2 ? (
        <Button
          onClick={() => {
            setOffset((prev) => prev + 3);
          }}
        >
          Еще
        </Button>
      ) : null} */}
    </>
  );
};
