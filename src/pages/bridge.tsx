import {observer} from 'mobx-react';

import {Bridge} from '@/bridge/ui/Bridge';
import {BridgeTracker} from '@/bridge/ui/BridgeTracker';
import {GasPrice} from '@/bridge/ui/GasPrice';
import {CustomHtmlHead} from '@/core/ui/CustomHtmlHead';
import {PageLayout} from '@/core/ui/PageLayout';
import {Panel} from '@/core/ui/Panel';

import {NextPageWithLayout} from '../../types/next';

const BridgePage: NextPageWithLayout = () => {
  return (
    <>
      <Panel>
        <BridgeTracker sx={{mb: 4}} />
      </Panel>
      <Panel title='Transfer' endAdornment={<GasPrice />} sx={{padding: '1rem', borderRadius: '0.75rem', boxShadow: 'rgba(0, 0, 0, 0.5) 0 1px 3px 0'}}>
        <Bridge />
      </Panel>
    </>
  );
};

BridgePage.getLayout = (page) => (
  <PageLayout centered>
    <CustomHtmlHead title='Bridge' />
    {page}
  </PageLayout>
);

export default observer(BridgePage);
