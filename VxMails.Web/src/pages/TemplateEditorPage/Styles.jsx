import styled from "styled-components";

const PageContainer = styled.div`
    margin-top: 59px;
`;

const EditorHeader = styled.div`
    height: 59px;
    width: 100%;
    background-color: rgb(41, 48, 57);
    display: flex;
        
`;

const TemplateInputName = styled.input`
    flex-grow: 1;
    background-color: rgb(41, 48, 57);
    border: 0px solid;
    color: #f3f3f3;
    font-size: 20px;
    padding: 0px 10px;
`;

const EditorAction = styled.button`
    display: inline-block;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 0.9rem;
    line-height: 1.5;
    border-radius: 0rem;
    height: 100%;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; 
    border: 0px solid;
    
    &:hover {
        background-color: rgb(69, 79, 90);
        border: 0px solid;
    }
`;

export { PageContainer, EditorHeader, TemplateInputName, EditorAction }