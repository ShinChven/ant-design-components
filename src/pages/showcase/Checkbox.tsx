import { PageContainer } from '@ant-design/pro-layout';
import { Card, Divider } from 'antd';
import GridCheckboxGroup from '@/components/Checkbox/GridCheckboxGroup';
import ReactMarkdown from 'react-markdown';

const options = ['IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson'];

const CheckboxShowcase = () => (
  <PageContainer>
    <Card title="GridCheckboxGroup">
      <ReactMarkdown>{`
The original CheckboxGroup's Checkbox items are not in Grid layout. It seem disorder.

This is an examples to how we can create a Checkbox group
to place all Checkboxes in Grid layout
with **check/uncheck all** action.
    `}</ReactMarkdown>
      <Divider />
      <GridCheckboxGroup
        checkAllLabel={['全选', '取消全选']}
        options={options.map((item) => ({ label: item, value: item, key: item }))}
      />
    </Card>
  </PageContainer>
);

export default CheckboxShowcase;
