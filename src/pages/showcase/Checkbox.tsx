import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Divider, Form, Tooltip } from 'antd';
import type { IGridCheckboxOnChangeValue } from '@/components/Checkbox/GridCheckboxGroup';
import GridCheckboxGroup from '@/components/Checkbox/GridCheckboxGroup';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

const options = ['IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson'];

const CheckboxShowcase = () => {
  const [value, setValue] = useState<IGridCheckboxOnChangeValue | undefined>(undefined);
  const [formValues, setFormValues] = useState<{ colors?: IGridCheckboxOnChangeValue } | undefined>(
    undefined,
  );
  return (
    <PageContainer>
      <Card title="GridCheckboxGroup">
        <ReactMarkdown>{`
  The original CheckboxGroup's Checkbox items are not in Grid layout. It seems disorder.

  This is an examples to how we can create a Checkbox group
  to place all Checkboxes in Grid layout
  with **check/uncheck all** action.

  It is compatible to Form.
      `}</ReactMarkdown>
        <Divider>Example</Divider>
        <Form
          onFinish={(values) => {
            setFormValues(values);
          }}
        >
          <Form.Item name={'colors'}>
            <GridCheckboxGroup
              checkAllLabel={['check all', 'uncheck all']}
              options={options.map((item) => ({ label: item, value: item, key: item }))}
              onChange={(v) => {
                setValue(v);
              }}
            />
          </Form.Item>
          <Divider />
          <Tooltip title={'Submit to see form value'}>
            <Button htmlType={'submit'}>submit</Button>
          </Tooltip>{' '}
          {JSON.stringify(formValues)}
        </Form>
        <Divider>Values</Divider>
        <div>check all: {`${value?.checkAll}`}</div>
        <div>checked values: {value ? Array.from(value.checked).join(', ') : ''}</div>
      </Card>
    </PageContainer>
  );
};

export default CheckboxShowcase;
