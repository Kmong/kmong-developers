import { GetServerSideProps } from "next";
import { captureException, wrapGetServerSidePropsWithSentry } from '@sentry/nextjs';

function Page() {
  return <div>GetServerSideProps</div>
}

export const getServerSideProps: GetServerSideProps = wrapGetServerSidePropsWithSentry(async () => {
  try {
    const response: any = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1'
        );
    const data = await response.json();

    return {
      props: {
        data: data
      }
    }
  } catch (error) {
    captureException(error);

    console.log('server side 에러');
  }

  return {
    props: {}
  };
}, 'serverside-props 성능계측설정');

// 아래처럼 하면 안찍힘
// wrapGetServerSidePropsWithSentry(getServerSideProps, 'serverside-props 성능계측설정');

export default Page;