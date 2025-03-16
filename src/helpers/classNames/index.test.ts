import { describe, it, expect } from 'vitest';

import { classNames } from '.';

describe('classNames', () => {

  it('с пустым списком параметров', () => {
    expect(classNames('someClass'))
      .toBe('someClass');
  });

  it('с дополнительным списком параметров', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe('someClass class1 class2');
  });

  it('со списком параметров и модами', () => {
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
      .toBe('someClass class1 class2 hovered scrollable');
  });

  it('со списком параметров и модами hovered: false', () => {
    expect(classNames('someClass', { hovered: false, scrollable: true }, ['class1', 'class2']))
      .toBe('someClass class1 class2 scrollable');
  });

  it('со списокм параметров и модами hovered: undefined', () => {
    expect(classNames('someClass', { hovered: undefined, scrollable: true }, ['class1', 'class2']))
      .toBe('someClass class1 class2 scrollable');
  });

});
