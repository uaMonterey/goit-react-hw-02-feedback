import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';

const Options = ({ onChangeStats }) => {
  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button name="good" onClick={e => onChangeStats(e.currentTarget.name)}>
        Good
      </Button>
      <Button name="neutral" onClick={e => onChangeStats(e.currentTarget.name)}>
        Neutral
      </Button>
      <Button name="bad" onClick={e => onChangeStats(e.currentTarget.name)}>
        Bad
      </Button>
    </ButtonGroup>
  );
};

export default Options;
