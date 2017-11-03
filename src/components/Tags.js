import React from 'react'

function Tag({ label }) {
  return (
    <li
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        margin: '0px 8px 0px 0px',
        border: '2px solid #a1aae0',
        borderRadius: '4px',
        color: '#a1aae0',
      }}
    >
      {label}
    </li>
  )
}

class Tags extends React.Component {
  render() {
    const { tags } = this.props

    return (
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          fontSize: '0.8em',
        }}
      >
        {tags.map(tag => {
          return <Tag key={tag} label={tag} />
        })}
      </ul>
    )
  }
}

export default Tags
