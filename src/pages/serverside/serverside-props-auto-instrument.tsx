import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { captureException, setTags, wrapGetServerSidePropsWithSentry, startSpan, setTag } from '@sentry/nextjs';

function Page() {
  return <div>GetServerSideProps</div>
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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

    console.log('serverside 에러');
  }

  return {
    props: {}
  };
}

export default Page;