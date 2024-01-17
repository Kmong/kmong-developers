import { captureException } from '@sentry/nextjs';
import {
  Button, colors, dialog, Typography,
} from '@kmong/ui';
import styled from '@emotion/styled';

export default function Home() {
  const handleClick = async () => {
    const { isConfirmed } = await dialog.confirm({
      title: '센트리에 에러를 전송하시겠습니까?',
      html: '버튼을 누르면 무슨 일이 일어날지 아무도 모릅니다.',
      cancelButtonText: '닫기',
      confirmButtonText: '확인',
    });

    if (isConfirmed) {
      try {
        throw new Error('이 에러는 의도적으로 발생시켰습니다.');
      } catch (error) {
        captureException(error);
      }
    }
  };

  return (
    <Main>
      <Typography
        variant="display1"
        color="denim500"
      >
        Sentry-Playground
      </Typography>
      <Button
        size="xlarge"
        onClick={handleClick}
      >
        전송하기
      </Button>
      <Typography variant="h1">Sentry-Playground에 오신 것을 환영합니다.</Typography>
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
