import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { captureException, setTags, wrapGetServerSidePropsWithSentry } from '@sentry/nextjs';

function Page() {
  return <div>GetServerSideProps</div>
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log('server side 에러');

  throw new Error('- This is getServerSideProps Error!');
};


export default Page;