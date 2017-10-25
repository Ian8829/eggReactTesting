import React from 'react';
import * as ShallowTestUtils from 'react-shallow-testutils';
import { createRenderer } from 'react-test-renderer/shallow';
import expect from 'expect';

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}</div>
  </div>
);

describe('CoolComponent', () => {
  it('should...', () => {
    const renderer = createRenderer();
    renderer.render(<CoolComponent greeting="hello world" />);
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});