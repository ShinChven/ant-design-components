import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd/es/descriptions';
import type { DescriptionsItemProps } from 'antd/es/descriptions/Item';
import type { Breakpoint } from 'antd/lib/_util/responsiveObserve';

export type Mapping = {
  label?: React.ReactNode | string;
  children?: React.ReactNode | string;
  itemProps?: DescriptionsItemProps;
};

export type Mappings = Record<string, Mapping>;

type GridDescriptionsProps = {
  dataObject: any;
  mappings: Mappings;
} & DescriptionsProps;

const MappedDescriptions: React.FC<GridDescriptionsProps> = (props) => {
  const { dataObject, mappings } = props;
  return (
    <Descriptions {...props}>
      {Object.keys(mappings).map((key) => {
        const mapping = mappings[key];
        if (mapping.children) {
          return (
            <Descriptions.Item
              key={`${key}_${dataObject.id}`}
              label={mapping.label || key}
              {...mapping.itemProps}
            >
              {mapping.children}
            </Descriptions.Item>
          );
        }
        return (
          <Descriptions.Item key={key} label={mapping.label || key} {...mapping.itemProps}>
            {dataObject[key]}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
};

export default MappedDescriptions;

export const presetDescriptionsColumn: Partial<Record<Breakpoint, number>> = {
  xxl: 4,
  xl: 4,
  lg: 4,
  md: 3,
  sm: 2,
  xs: 1,
};
