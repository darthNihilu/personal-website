import React from 'react'

export const FormatTextComponent: React.FC<{ text: string }> = ({ text }) => {
  const formattedText = text.split('\n').map((line, index) => {
    const hasTab = line.startsWith('\t')
    const content = hasTab ? line.slice(1) : line
    const style = hasTab ? { marginLeft: '16px' } : {} // Change the value '2em' to adjust the indentation

    return (
      <React.Fragment key={index}>
        <span style={style}>{content}</span>
        <br />
      </React.Fragment>
    )
  })

  return <div>{formattedText}</div>
}
