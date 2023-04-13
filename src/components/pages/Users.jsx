import styled from "styled-components";
import { SearchInput } from "../molecule/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: "test",
    image: "https://test",
    email: "test",
    phone: "00-11",
    company: {
      name: "test株",
    },
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧ページ</h2>
      <SearchInput />
      {users.map((user) => {
        <UserCard key={user.id} user={user} />;
      })}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
