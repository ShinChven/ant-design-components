import { Checkbox, Col, Divider, Row } from 'antd';
import React from 'react';
import { RouteContext } from '@ant-design/pro-layout';

const options = ['IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson'];

/**
 * The original CheckboxGroup's Checkbox items are not in Grid layout. It seem disorder.
 * <br/>
 * This is an examples to how we can create a Checkbox group
 * to place all Checkboxes in Grid layout
 * with **check/uncheck all** action.
 *
 * @constructor
 */
const GridCheckboxGroup = () => {
  const [checked, setChecked] = React.useState(new Set<string>());
  const [checkAll, setCheckAll] = React.useState(false);
  const [checkAllIndeterminate, setCheckAllIndeterminate] = React.useState(false);
  return (
    <RouteContext.Consumer>
      {({ isMobile }) => (
        <div>
          <Checkbox
            key={`${checkAllIndeterminate}_check_all`}
            defaultChecked={checked.size > 0 && checked.size === options.length}
            indeterminate={checkAllIndeterminate}
            onChange={(e) => {
              options.map((item) => (e.target.checked ? checked.add(item) : checked.delete(item)));
              setCheckAllIndeterminate(false);
              setChecked(checked);
              setCheckAll(e.target.checked);
            }}
          >
            {' '}
            check all
          </Checkbox>
          <Divider />
          {/* Use a react key that referring check all state to force reload all option Checkboxes' checked state */}
          <Row key={`check_all_${checkAll}`}>
            {/* Checkboxes are placed in grid layout */}
            {options.map((item) => (
              <Col key={`${item}_`} span={isMobile ? 12 : 6}>
                <Checkbox
                  defaultChecked={checked.has(item)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      checked.add(item);
                    } else {
                      checked.delete(item);
                    }
                    setChecked(checked);
                    setCheckAllIndeterminate(checked.size !== options.length);
                  }}
                >
                  {' '}
                  {item}
                </Checkbox>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </RouteContext.Consumer>
  );
};

export default GridCheckboxGroup;
