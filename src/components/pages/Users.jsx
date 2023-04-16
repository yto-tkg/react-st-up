import styled from "styled-components";
import { SearchInput } from "../molecule/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

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
  //   const { state } = useLocation();
  //   const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo });
  };
  return (
    <SContainer>
      <h2>ユーザー一覧ページ</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      {users.map((user) => {
        <UserCard key={user.id} user={user} />;
      })}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
