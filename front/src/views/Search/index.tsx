import { useState } from "react";
import { useGetSearchResultMutation } from "../../api/search";
import { Button, Input, Table } from "antd";

import { searchHistoryColumns } from "../../utils/constants/table";

export const SearchPage = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [getSearchResult] = useGetSearchResultMutation();

  const handleSearchData = (search_name: string) => {
    const body = {
      user_id: localStorage.getItem("user_id"),
      token: localStorage.getItem("token"),
      search_name: search_name,
    };
    getSearchResult(body)
      .then((response: any) => {
        setSearchData(response.data);
      })
      .catch((error) => {
        console.error("Search error:", error);
      });
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Поиск препаратов</h2>
      <Input
        placeholder="Введите название"
        onChange={(e) => setSearchInput(e.target.value)}
        style={{ width: "40%", margin: "40px auto 40px" }}
      />
      <Button
        onClick={() => handleSearchData(searchInput)}
        style={{ width: "180px", margin: "0 auto 40px" }}
      >
        Искать
      </Button>
      {searchData.length ? (
        <Table
          columns={searchHistoryColumns}
          dataSource={searchData}
          size="large"
          pagination={false}
        />
      ) : (
        <p style={{ textAlign: "center", margin: "40px 0 0 0" }}>
          Ничего не найдено
        </p>
      )}
    </>
  );
};
