import React, { Component } from 'react';
import { PageContainer, TemplateList, CerateTemplateLink } from './Styles';
import TemplateItemComponent from '../../components/TemplateItemComponent/TemplateItemComponent';

class TemplatesListPage extends Component {
    render() {
        return (
            <PageContainer className="container">
                <div className="d-flex justify-content-between">
                    <p>Escolha um template para iniciar:</p>
                    <CerateTemplateLink href="/editor" >Adicionar tempalte</CerateTemplateLink>
                </div>
                <TemplateList>
                    <TemplateItemComponent name="VxInforma - Vencimento Pendente" category="VxInforma" awsDeployed={false} imageUrl="https://dummyimage.com/600x700/e6e6e6/000000&text=Template+Image"></TemplateItemComponent>
                    <TemplateItemComponent name="VxInforma - Vencimento Aprovado" category="VxInforma" awsDeployed={false} imageUrl="https://dummyimage.com/600x700/e6e6e6/000000&text=Template+Image"></TemplateItemComponent>
                    <TemplateItemComponent name="VxInforma - Vencimento Reprovado" category="VxInforma" awsDeployed={false} imageUrl="https://dummyimage.com/600x700/e6e6e6/000000&text=Template+Image"></TemplateItemComponent>
                </TemplateList>
            </PageContainer>
        );
    }
}

export default TemplatesListPage;