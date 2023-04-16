import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecule/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;
  return (
    <Card>
      <div>
        <UserIconWithName image={user.image} name={user.name} />
        <SDl>
          <dt>メール</dt>
          <dt>{user.email}</dt>
          <dt>tel</dt>
          <dt>{user.tel}</dt>
          <dt>会社</dt>
          <dt>{user.company}</dt>
        </SDl>
      </div>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 10px;
  }
`;
