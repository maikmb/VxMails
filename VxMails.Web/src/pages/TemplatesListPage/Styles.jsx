import styled from "styled-components";

const PageContainer = styled.div`
    margin-top: 100px;
`;

const TemplateList = styled.div`
    display: flex;
    flex-direction: column;
`;

const CerateTemplateLink = styled.a`
    text-decoration: none;
    color: #87027b;
    border-bottom: dotted 1.5px #87027b;
    font-size: 13px;
    line-height: 0.5;
    height: 20px;

    &:hover {
        text-decoration: none;
        color: #b130a6;
        border-color: #b130a6;
    }
`;

export { PageContainer, TemplateList, CerateTemplateLink }