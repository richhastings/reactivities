import React from 'react';
import { storiesOf } from '@storybook/react';
import Checklist from '../../container/Checklist'
import items from '../../fixture/fixture'

storiesOf('Checklist', module)
  .add('default', () => (
    <Checklist items={items} />
  ))