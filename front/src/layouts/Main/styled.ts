import styled from "styled-components";
import { Layout } from "antd";
import { HEADER_HEIGHT } from "../../utils/constants";

const MainWrapper = styled(Layout)`
  padding: 24px 0 24px 100px;
  background-color: ${(props) => props.theme.backgroundColor1};
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  /* width: 80%; */
  margin: 0 auto;
  height: calc(100vh - ${HEADER_HEIGHT});
`;

export { MainWrapper };
