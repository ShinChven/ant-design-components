import { Checkbox, Col, Divider, Row } from 'antd';
import React from 'react';
import type { ColProps, RowProps } from 'antd/es/grid';

export type ICheckboxLabel = string | React.ReactNode;

export type IGridCheckboxGroupOption = {
  label: ICheckboxLabel;
  value: any;
  key: string;
};

export type IGridCheckboxOnChangeValue = {
  checked: any[];
  checkAll: boolean;
};

export type IGridCheckboxOnChangeFunction = {
  (value: IGridCheckboxOnChangeValue): void;
};

export type IGridCheckboxGroupProps = {
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
  checkBoxRowProps?: RowProps;
  checkboxColProps?: ColProps;
  onChange?: IGridCheckboxOnChangeFunction;
};

/**
 * The original CheckboxGroup's Checkbox items are not in Grid layout. It seems disorder.
 * <br/>
 * This is an examples to how we can create a Checkbox group
 * to place all Checkboxes in Grid layout
 * with **check/uncheck all** action.
 * <br/>
 * It is compatible to Form.
 *
 * @constructor
 */
const GridCheckboxGroup: React.FC<IGridCheckboxGroupProps> = (props) => {
  const {
    options,
    checkAllLabel = ['check all', 'uncheck all'],
    checkboxColProps = { span: 6 },
    checkBoxRowProps = {},
    onChange,
  } = props;
  const [checked, setChecked] = React.useState(new Set<any>());
  const [checkAll, setCheckAll] = React.useState(false);
  const [checkAllIndeterminate, setCheckAllIndeterminate] = React.useState(false);
  const checkAllIndeterminateKey = `${checkAllIndeterminate}_check_all`;
  const isCheckingAll = () => checked.size > 0 && checked.size === options.length;
  const isIndeterminate = () => checked.size > 0 && checked.size !== options.length;
  return (
    <div>
      <Checkbox
        key={checkAllIndeterminateKey}
        defaultChecked={isCheckingAll()}
        indeterminate={checkAllIndeterminate}
        onChange={(e) => {
          options.map((item) =>
            e.target.checked ? checked.add(item.value) : checked.delete(item.value),
          );
          setCheckAllIndeterminate(false);
          setChecked(checked);
          setCheckAll(e.target.checked);
          if (typeof onChange === 'function') {
            onChange({ checked: Array.from(checked), checkAll: isCheckingAll() });
          }
        }}
      >
        {checkAllLabel[checkAll ? 1 : 0]}
      </Checkbox>
      <Divider />
      {/* Use a react key that referring check all state to force reload all option Checkboxes' checked state */}
      <Row key={`check_all_${checkAll}`} {...checkBoxRowProps}>
        {/* Checkboxes are placed in grid layout */}
        {options.map((item) => (
          <Col key={item.key} {...checkboxColProps}>
            <Checkbox
              defaultChecked={checked.has(item.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  checked.add(item.value);
                } else {
                  checked.delete(item.value);
                }
                setChecked(checked);
                setCheckAllIndeterminate(isIndeterminate);
                if (typeof onChange === 'function') {
                  onChange({ checked: Array.from(checked), checkAll: isCheckingAll() });
                }
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
