import React from 'react'
import { Icon, Label, Menu, Table } from 'stardust'

const TablePagination = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.Cell as='th'>Header</Table.Cell>
          <Table.Cell as='th'>Header</Table.Cell>
          <Table.Cell as='th'>Header</Table.Cell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
      <Table.Row>
        <Table.Cell as='th' colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.Cell>
      </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default TablePagination