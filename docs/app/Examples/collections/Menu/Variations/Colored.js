import React, { Component } from 'react'
import { Menu } from 'stardust'

const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']
const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown', 'grey']

export default class Colored extends Component {
  state = { activeA: colorsA[0], activeB: colorsB[0] }

  handleAClick = (e, { name }) => this.setState({ activeA: name })
  handleBClick = (e, { name }) => this.setState({ activeB: name })

  render() {
    const { activeA, activeB } = this.state

    return (
      <div>
        <Menu>
          {colorsA.map(c => (
            <Menu.Item key={c} name={c} active={activeA === c} color={c} onClick={this.handleAClick} />
          ))}
        </Menu>

        <Menu>
          {colorsB.map(c => (
            <Menu.Item key={c} name={c} active={activeB === c} color={c} onClick={this.handleBClick} />
          ))}
        </Menu>
      </div>
    )
  }
}
