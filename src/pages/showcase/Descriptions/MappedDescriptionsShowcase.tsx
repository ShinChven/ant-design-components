import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Divider } from 'antd';
import MappedDescriptions from '@/lib/Descriptions/MappedDescriptions';
import ReactMarkdown from 'react-markdown';

const doc = `
Populate \`Descriptions.Item\` with dataObject and mappings.

A dataObject is your data entity.

The mappings is the mapping strategy to populate Descriptions.Item.

- label: assign Descriptions.Item's label
- children: the Descriptions.Item's children
`;

const MappedDescriptionsShowcase: React.FC = () => {
  const data = {
    name: 'jack',
    age: 29,
    email: 'example@gmail.com',
    mobile: '+8618822228888',
  };
  const mappings = {
    name: { label: '姓名' },
    age: {},
    email: {},
    mobile: {},
  };
  return (
    <PageContainer>
      <Card title={'MappedDescriptions'}>
        <ReactMarkdown>{doc}</ReactMarkdown>
        <Divider>Showcase</Divider>
        <MappedDescriptions title="Profile" dataObject={data} mappings={mappings} />
        <Divider>Value</Divider>
        dataObject: {JSON.stringify(data)} <br />
        mappings: {JSON.stringify(mappings)}
      </Card>
    </PageContainer>
  );
};

export default MappedDescriptionsShowcase;
