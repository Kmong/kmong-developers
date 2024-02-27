import { useEffect } from "react";

function Page() {
  useEffect(() => {
    const data: any = {
      name: 'test',
      location: 'seoul'
    }

    console.log('client error', data.location.blabla.etc);
  }, []);


  return <div>Client Page</div>;
}


export default Page;
