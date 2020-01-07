import styled from "styled-components";

const TempalteDisplayContent = styled.div`
    flex: 1;
`;

const TemplateDisplayInfo = styled.div`
    padding: 10px;
`;

const TemplateImage = styled.img`
    height: 200px;
    width: 200px;
`;

const TemplateInfoTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 0.5rem;
`;
const TemplateInfoDetails = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 0.5rem;
`;

const TemplateActions = styled.div`
    padding: 5px;
`;

const TemplateActionItem = styled.button`
    float: right;
    margin: 0px 8px;
    border: 0px solid;
    background-color: transparent;
    color: #333;
    

    &:hover {
        color: #c12c2c;
        cursor: pointer;
    }
`;


export { TemplateImage, TemplateDisplayInfo, TemplateInfoTitle, TemplateInfoDetails, TemplateActions, TemplateActionItem, TempalteDisplayContent }