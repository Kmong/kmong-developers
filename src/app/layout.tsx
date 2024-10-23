import '../main.css'
import auth from './_src/utils/auth';
import './globals.css'
import Providers from './Providers'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const response = await auth();
  

  if (response.status === 401) {
    return <div>Unauthorized</div>;
  }

  const data = await response.json();


  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {data.userId}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
