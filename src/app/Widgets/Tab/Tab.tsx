import { ConfigProvider, Tabs as AntTabs, TabsProps } from 'antd';
import tabStyles from './TabStyles.js';

const Tabs: React.FC<TabsProps> = (props) => {
    return (
        <ConfigProvider theme={tabStyles}>
            <AntTabs {...props} />
        </ConfigProvider>
    );
};

export default Tabs;