import React from 'react'
import { shallow, mount } from 'enzyme'

import Button from '..'

describe('<Button />', () => {
  it('should render a <button> tag', () => {
    const wrapper = mount(<Button type="button">Click me</Button>)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should not render a <button> tag', () => {
    const wrapper = mount(<Button>Click me</Button>)
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('should render an <a> tag', () => {
    const wrapper = mount(<Button>Click me</Button>)
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('should have children', () => {
    const wrapper = shallow(<Button>Click me</Button>)
    expect(wrapper.contains('Click me')).toEqual(true)
  })
})