import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";
import { memo } from "react";

export const SearchInput = memo(() => {
  return (
    <div>
      <Input placeholder="検索条件を入力" />
      <SButtoneContainer>
        <SButtoneWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtoneWrapper>
      </SButtoneContainer>
    </div>
  );
});

const SButtoneContainer = styled.div`
  display: flex;
`;

const SButtoneWrapper = styled.div`
  padding-left: 9px;
`;
