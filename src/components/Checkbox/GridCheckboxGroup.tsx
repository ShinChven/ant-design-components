import { Checkbox, Col, Divider, Row } from 'antd';
import React from 'react';
import type { ColProps } from 'antd/es/grid';

type ICheckboxLabel = string | React.ReactNode;

type IGridCheckboxGroupOption = {
  label: ICheckboxLabel;
  value: any;
  key: string;
};

type IGridCheckboxGroupProps = {
  options: IGridCheckboxGroupOption[];
  checkAllLabel: [
    /**
     * check all label
     */
    checkAll: ICheckboxLabel,
    /**
     * uncheck all label
     */
    uncheckAll: ICheckboxLabel,
  ];
  checkboxColumnProps?: ColProps;
};

/**
 * The original CheckboxGroup's Checkbox items are not in Grid layout. It seem disorder.
 * <br/>
 * This is an examples to how we can create a Checkbox group
 * to place all Checkboxes in Grid layout
 * with **check/uncheck all** action.
 *
 * @constructor
 */
const GridCheckboxGroup: React.FC<IGridCheckboxGroupProps> = (props) => {
  const {
    options,
    checkAllLabel = ['check all', 'uncheck all'],
    checkboxColumnProps = { span: 6 },
  } = props;
  const [checked, setChecked] = React.useState(new Set<any>());
  const [checkAll, setCheckAll] = React.useState(false);
  const [checkAllIndeterminate, setCheckAllIndeterminate] = React.useState(false);
  const checkAllIndeterminateKey = `${checkAllIndeterminate}_check_all`;
  return (
    <div>
      <Checkbox
        key={checkAllIndeterminateKey}
        defaultChecked={checked.size > 0 && checked.size === options.length}
        indeterminate={checkAllIndeterminate}
        onChange={(e) => {
          options.map((item) =>
            e.target.checked ? checked.add(item.value) : checked.delete(item.value),
          );
          setCheckAllIndeterminate(false);
          setChecked(checked);
          setCheckAll(e.target.checked);
        }}
      >
        {checkAllLabel[checkAll ? 1 : 0]}
      </Checkbox>
      <Divider />
      {/* Use a react key that referring check all state to force reload all option Checkboxes' checked state */}
      <Row key={`check_all_${checkAll}`}>
        {/* Checkboxes are placed in grid layout */}
        {options.map((item) => (
          <Col key={item.key} {...checkboxColumnProps}>
            <Checkbox
              defaultChecked={checked.has(item.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  checked.add(item.value);
                } else {
                  checked.delete(item.value);
                }
                setChecked(checked);
                const mSetAllIndeterminate = checked.size > 0 && checked.size !== options.length;
                setCheckAllIndeterminate(mSetAllIndeterminate);
              }}
            >
              {item.label}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GridCheckboxGroup;
