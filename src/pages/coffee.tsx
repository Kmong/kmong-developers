import { captureException } from '@sentry/nextjs';
import { Button, colors, Typography } from '@kmong/ui';
import styled from '@emotion/styled';

function Coffee() {
  const handleClick = async () => {
    try {
      throw new Error('Coffee 페이지에서 에러가 발생했습니다.');
    } catch (error) {
      captureException(error);
    }
  };

  return (
    <Main>
      <Typography variant="display2">
        Coffee 페이지
      </Typography>
      <Typography variant="body2">
        이 페이지의 url은 ignore되어 있습니다.
      </Typography>
      <Button
        size="xlarge"
        onClick={handleClick}
      >
        에러 전송하기
      </Button>
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

export default Coffee;
