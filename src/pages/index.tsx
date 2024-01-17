import {
  Button, colors, dialog, Typography,
} from '@kmong/ui';
import styled from '@emotion/styled';

export default function Home() {
  const handleClick = async () => {
    const { isConfirmed } = await dialog.confirm({
      title: '보러 가시겠습니까?',
      html: '이 버튼을 누르면 어디로 갈지 아무도 모릅니다.',
      cancelButtonText: '닫기',
      confirmButtonText: '확인',
    });

    if (isConfirmed) {
      window.location.href = 'https://kmong.com';
    }
  };

  return (
    <Main>
      <Typography
        variant="display1"
        color="denim500"
      >
        Kmong-Athens
      </Typography>
      <Button
        size="xlarge"
        onClick={handleClick}
      >
        보러 가기
      </Button>
      <Typography variant="h1">크몽 아테네 2호의 새로운 기술을 Playground에서 미리 만나보세요.</Typography>
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
