import { Layout } from 'antd';
import { Contents, Headerbar, Sidebar } from '.';
import * as API from '../apis';

export async function layoutLoader() {
  try {
    const orgSetting = await API.organize.getSetting();

    return { orgSetting: orgSetting.data.data };
  } catch (error) {
    return { orgSetting: {} };
  }
}

export const AppLayout = () => {
  // const { orgSetting } = useLoaderData() as any;

  return (
    <>
      <Layout
        style={{ height: '100vh', display: 'flex', flexDirection: 'row' }}
      >
        <Sidebar setting={{}} />
        <Layout>
          <Headerbar />
          <Contents />
        </Layout>
      </Layout>
    </>
  );
};
