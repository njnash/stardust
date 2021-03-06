import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import Label from 'src/elements/Label/Label'
import LabelDetail from 'src/elements/Label/LabelDetail'

describe('Label Component', () => {
  common.isConformant(Label)
  common.hasUIClassName(Label)
  common.hasSubComponents(Label, [LabelDetail])
  common.rendersChildren(Label)

  common.propKeyOnlyToClassName(Label, 'basic')
  common.propKeyOnlyToClassName(Label, 'circular')
  common.propKeyOnlyToClassName(Label, 'empty')
  common.propKeyOnlyToClassName(Label, 'floating')
  common.propKeyOnlyToClassName(Label, 'horizontal')
  common.propKeyOnlyToClassName(Label, 'tag')

  common.propValueOnlyToClassName(Label, 'color')
  common.propValueOnlyToClassName(Label, 'size')

  common.propKeyAndValueToClassName(Label, 'attached')

  common.propKeyOrValueToClassName(Label, 'corner')
  common.propKeyOrValueToClassName(Label, 'ribbon')

  common.implementsIconProp(Label)
  common.implementsImageProp(Label)
  common.implementsShorthandProp(Label, {
    propKey: 'detail',
    ShorthandComponent: LabelDetail,
    mapValueToProps: val => ({ content: val }),
  })

  it('is a div by default', () => {
    shallow(<Label />)
      .should.have.tagName('div')
  })

  describe('content', () => {
    it('has no content by default', () => {
      shallow(<Label />)
      .text()
      .should.be.empty()
    })

    it('adds the value as children', () => {
      const text = faker.hacker.phrase()

      shallow(<Label content={text} />)
        .should.contain.text(text)
    })
  })

  describe('image', () => {
    it('adds an image class when true', () => {
      shallow(<Label image />)
        .should.have.className('image')
    })
    it('does not add an Image when true', () => {
      shallow(<Label image />)
        .should.not.have.descendants('Image')
    })
  })

  describe('onClick', () => {
    it('can be omitted', () => {
      const click = () => mount(<Label />).simulate('click')

      expect(click).to.not.throw()
    })

    it('is called with (e) when clicked', () => {
      const spy = sandbox.spy()
      const event = { target: null }

      shallow(<Label onClick={spy} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event)
    })
  })

  describe('pointing', () => {
    it('adds an poiting class when true', () => {
      shallow(<Label pointing />)
        .should.have.className('pointing')
    })

    it('does not add any poiting option class when true', () => {
      const options = Label._meta.props.pointing
      const wrapper = shallow(<Label pointing />)

      options.map(className => wrapper.should.not.have.className(className))
    })

    it('adds `above` as suffix', () => {
      shallow(<Label pointing='above' />)
        .should.have.className('pointing above')
    })

    it('adds `below` as suffix', () => {
      shallow(<Label pointing='below' />)
        .should.have.className('pointing below')
    })

    it('adds `left` as prefix', () => {
      shallow(<Label pointing='left' />)
        .should.have.className('left pointing')
    })

    it('adds `right` as prefix', () => {
      shallow(<Label pointing='right' />)
        .should.have.className('right pointing')
    })
  })
})
