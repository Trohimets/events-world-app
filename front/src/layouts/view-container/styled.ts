import styled from "styled-components";

interface ContentWrapperProps {
  iscollapsed: boolean;
}

export const ContentWrapper = styled.section<ContentWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: hidden;
  margin: 0 0 0 auto;
  overflow-y: scroll;
  width: ${({ iscollapsed }) => (iscollapsed ? "100%" : "calc(100% - 260px)")};
  &::-webkit-scrollbar {
    background: rgba(0, 66, 105, 0.06);
    border-radius: 4px;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ced8de;
    border-radius: 10px;
  }
`;
