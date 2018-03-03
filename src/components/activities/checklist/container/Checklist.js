import React from 'react'
import ChecklistComponent from '../component/Checklist'

class Checklist extends React.Component {
  constructor () {
    super()
    this.revealNextItem = this.revealNextItem.bind(this)
    this.state = {
      count: 1
    }
  }

  revealNextItem () {
    if (this.state.count < this.props.items.length) {
      this.setState({count: this.state.count+1})
    }
  }

  render () {
    return (
      <ChecklistComponent
        revealNextItem={this.revealNextItem}
        items={this.props.items}
        count={this.state.count}
      />
    )
  }
}

export default Checklist