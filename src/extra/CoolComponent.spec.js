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
  it('should render the greeting', () => {
    const renderer = createRenderer();
    renderer.render(<CoolComponent greeting="hello world" />);
    const actual = renderer.getRenderOutput();
    const expected = (
      <div>
        <h1>Greeting</h1>
        <div>hello world</div>
      </div>
    );
    expect(actual).toEqual(expected);
  });
});