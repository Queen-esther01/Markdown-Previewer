import React, { useState } from 'react'
import styled from 'styled-components';
import { marked } from "marked";




type Attributes = {
    preview?: boolean
}

const Heading = styled.h1`
    text-align: center;
    color: #524f4f;
    font-size: 1em;
`
const Wrapper = styled.div`
    max-width: 85%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    @media(min-width: 768px){
        max-width: 700px;
        flex-direction: row;
    }
    @media(min-width: 1366px){
        max-width: 1000px;
    }
`
const Box = styled.div<Attributes>`
    border-radius: 2rem;
    background: #e0e0e0;
    box-shadow:  20px 20px 60px #bebebe,
            -20px -20px 60px #ffffff;
    width: 100%;
    height: 290px;
    overflow-y: auto;
    cursor: pointer;
    text-align: center;
    @media(min-width: 768px){
        width: 50%;
    }
`

const TextArea = styled.textarea`
    border: none;
    padding: 1rem;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    outline: none;
    
`
const Editor = styled(Box)`
    overflow: hidden;
    order: ${props => props.preview === false ? '2' : ''} ; 
    @media(min-width: 768px){
        order: ${props => props.preview === false ? '1' : ''}
    }      
`

const Previewer = styled(Box)`
    order: ${props => props.preview === true ? '1' : ''} ; 
    @media(min-width: 768px){
        order: ${props => props.preview === true ? '2' : ''}
    } 
`
const Display = styled.div`
    background: white;
    height: 100vh;
`



const MarkdownPreviewer = ( ) => {
    const [text, setText] = useState(
        // '# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n\n### And here\'s some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine) {\n  if (firstLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n'
        '# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n\n### And here\'s some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine) {\n  if (firstLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\n And of course there are lists.\n  - Some are bulleted.\n  1. And there are numbered lists too.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n'
    )

    const getText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }


    return (
        <>
            <Heading>Markdown Previewer</Heading>
            <Wrapper>
                <Editor preview = {false}>
                    <h3>Editor</h3>
                    <TextArea autoFocus onChange={getText} defaultValue={text} placeholder='Type in # Hello there' id="editor">
                    </TextArea>
                </Editor>
                <Previewer preview={true}>
                    <h3>Previewer</h3>
                    <Display dangerouslySetInnerHTML={{ __html: marked(text) }} id="preview"></Display>
                </Previewer>
            </Wrapper>
        </>
    )
}

export default MarkdownPreviewer