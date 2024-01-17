import NextLink from 'next/link';
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
      <Header>
        <Typography
          variant="display1"
          color="denim500"
        >
          Kmong-Athens
        </Typography>
        <Nav>
          <Link href="/coffee">
            <Typography variant="body2">커피 페이지 바로가기</Typography>
          </Link>
          <Link href="/order">
            <Typography variant="body2">주문 페이지 바로가기</Typography>
          </Link>
        </Nav>
      </Header>
      <Button
        size="xlarge"
        onClick={handleClick}
      >
        에러 전송하기
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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border-top: 1px solid ${colors.gray[400]};
  text-align: center;
`;

const Link = styled(NextLink)`
  color: ${colors.gray[800]};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
