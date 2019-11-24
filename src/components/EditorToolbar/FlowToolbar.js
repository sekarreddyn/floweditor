import React from 'react';
import { Divider, Button } from 'antd';
import { Toolbar, withPropsAPI } from 'gg-editor';
import ToolbarButton from './ToolbarButton';
import './index.css';

const FlowToolbar = props => {
  const handleClick = () => {
    const { propsAPI } = props;

    console.log(propsAPI.save());
  };
  return (
    <Toolbar className={'toolbar'}>
      <ToolbarButton command="undo" />
      <ToolbarButton command="redo" />
      <Divider type="vertical" />
      <ToolbarButton command="copy" />
      <ToolbarButton command="paste" />
      <ToolbarButton command="delete" />
      <Divider type="vertical" />
      <ToolbarButton command="zoomIn" icon="zoom-in" text="Zoom In" />
      <ToolbarButton command="zoomOut" icon="zoom-out" text="Zoom Out" />
      <ToolbarButton command="autoZoom" icon="fit-map" text="Fit Map" />
      <ToolbarButton
        command="resetZoom"
        icon="actual-size"
        text="Actual Size"
      />
      <Divider type="vertical" />
      <ToolbarButton command="toBack" icon="to-back" text="To Back" />
      <ToolbarButton command="toFront" icon="to-front" text="To Front" />
      <Divider type="vertical" />
      <ToolbarButton
        command="multiSelect"
        icon="multi-select"
        text="Multi Select"
      />
      <ToolbarButton command="addGroup" icon="group" text="Add Group" />
      <ToolbarButton command="unGroup" icon="ungroup" text="Ungroup" />
      <Button type="primary" size={'large'} onClick={handleClick}>
        Save
      </Button>
    </Toolbar>
  );
};

export default withPropsAPI(FlowToolbar);
