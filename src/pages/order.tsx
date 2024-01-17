import * as Sentry from '@sentry/nextjs';
import { captureException } from '@sentry/nextjs';
import { Button, colors, Typography } from '@kmong/ui';
import styled from '@emotion/styled';

function Order() {
  const handleClickOrder = (name: string) => {
    Sentry.withScope((scope) => {
      scope.setTag('menu', name);

      try {
        throw new Error(`${name}을 주문하지 못했습니다.`);
      } catch (error) {
        captureException(error);
      }
    });
  };

  return (
    <Main>
      <Typography variant="display2">
        Order 페이지
      </Typography>
      <Typography variant="body2">
        주문하시고자 하는 메뉴를 클릭해 주세요.
      </Typography>
      <Buttons>
        <Button
          size="xlarge"
          onClick={() => handleClickOrder('americano')}
        >
          Americano
        </Button>
        <Button
          size="xlarge"
          onClick={() => handleClickOrder('milk')}
        >
          Milk
        </Button>
        <Button
          size="xlarge"
          onClick={() => handleClickOrder('latte')}
        >
          Latte
        </Button>
        <Button
          size="xlarge"
          onClick={() => handleClickOrder('cappuccino')}
        >
          Cappuccino
        </Button>
      </Buttons>
    </Main>
  );
}

const Main = styled.main`
  padding: 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, ${colors.denim[200]} 0%, ${colors.gray[100]} 100%);
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export default Order;
