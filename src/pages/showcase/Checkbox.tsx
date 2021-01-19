import { PageContainer } from '@ant-design/pro-layout';
import { Card, Divider } from 'antd';
import GridCheckboxGroup from '@/components/Checkbox/GridCheckboxGroup';
import ReactMarkdown from 'react-markdown';

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
      <GridCheckboxGroup />
    </Card>
  </PageContainer>
);

export default CheckboxShowcase;
