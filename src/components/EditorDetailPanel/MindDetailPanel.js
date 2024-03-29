import React from 'react';
import { Card } from 'antd';
import { NodePanel, CanvasPanel, DetailPanel } from 'gg-editor';
import DetailForm from './DetailForm';
import './index.css';

const MindDetailPanel = () => {
  return (
    <DetailPanel className={'detailPanel'}>
      <NodePanel>
        <DetailForm type="node" />
      </NodePanel>
      <CanvasPanel>
        <Card type="inner" size="small" title="Canvas" bordered={false} />
      </CanvasPanel>
    </DetailPanel>
  );
};

export default MindDetailPanel;
