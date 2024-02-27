import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { captureException, setTags, wrapGetServerSidePropsWithSentry } from '@sentry/nextjs';

function Page() {
  return <div>GetServerSideProps</div>
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    throw new Error('- This is getServerSideProps Error!');
  } catch (error) {
    // setTags({ 'server.methods': 'getServerSideProps' })
    captureException(error);

    console.log('server side 에러');
  }

  return {
    props: {}
  };
};

export default Page;