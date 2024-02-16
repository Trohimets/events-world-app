import { TableColumnsType } from "antd";
import { DataType } from "../../types/types";

export const searchResultColumns: TableColumnsType<DataType> = [
  {
    title: "Название",
    dataIndex: "name",
  },
  {
    title: "Упаковка",
    dataIndex: "package",
  },
  {
    title: "Цена, руб",
    dataIndex: "price",
  },
  {
    title: "Изготовитель",
    dataIndex: "producer",
  },
];

export const searchHistoryColumns: TableColumnsType<DataType> = [
  {
    title: "Название",
    dataIndex: "name",
  },
  {
    title: "Упаковка",
    dataIndex: "package",
  },
  {
    title: "Цена, руб",
    dataIndex: "price",
  },
  {
    title: "Изготовитель",
    dataIndex: "producer",
  },
];
