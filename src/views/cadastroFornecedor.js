import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';

class CadastroFornecedor extends React.Component {
    state = {
        cnpj: '',
        razaoSocial: '',
        nomeFantasia: '',
        cep: '',
        rua: '',
        numero: '',
        pontoDeReferencia: '',
        bairro: '',
        cidade: '',
        estado: '',
        telefone: '',
        celular: '',
        site: '',
        email: '',
        contato: '',
        observacao: '',
        inscricaoEstadual: '',
        inscricaoMunicipal: '',
        dataAbertura: '',
        ramoAtividade: '',
    }

    render(){
        return(
            <div className="container">
                <Card title="Cadastro de Fornecedor" >
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <fieldset>
                                    <FormGroup label="CNPJ: *" htmlFor="inputCNPJ1">
                                        <input type="cnpj"
                                                id="inputCNPJ1"
                                                className='form-control'
                                                name="CNPJ" 
                                                onChange={e => this.setState({cnpj: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Razão Social: *" htmlFor="inputRazaoSocial">
                                        <input type="razaoSocial"
                                                id="inputRazaoSocial"
                                                className='form-control'
                                                name="RazaoSocial" 
                                                onChange={e => this.setState({razaoSocial: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Nome Fantasia: *" htmlFor="inputNomeFantasia">
                                        <input type="nomeFantasia"
                                                id="inputNomeFantasia"
                                                className='form-control'
                                                name="nomeFantasia" 
                                                onChange={e => this.setState({nomeFantasia: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Endereco CEP: *" htmlFor="inputCEP">
                                        <input type="CEP"
                                                id="inputCEP"
                                                className='form-control'
                                                name="CEP" 
                                                onChange={e => this.setState({cep: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Rua: " htmlFor="inputRua">
                                        <input type="Rua"
                                                id="inputRua"
                                                className='form-control'
                                                name="rua" 
                                                onChange={e => this.setState({rua: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Numero: " htmlFor="inputNumero">
                                        <input type="numero"
                                                id="inputNumero"
                                                className='form-control'
                                                name="numero" 
                                                onChange={e => this.setState({numero: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Ponto de Referencia: " htmlFor="inputPontoDeReferencia">
                                        <input type="pontoDeReferencia"
                                                id="inputPontoDeReferencia"
                                                className='form-control'
                                                name="pontoDeReferencia" 
                                                onChange={e => this.setState({pontoDeReferencia: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Bairro: " htmlFor="inputBairro">
                                        <input type="bairro"
                                                id="inputBairro"
                                                className='form-control'
                                                name="bairro" 
                                                onChange={e => this.setState({bairro: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Cidade: " htmlFor="inputCDidade">
                                        <input type="Cidade"
                                                id="inputCidade"
                                                className='form-control'
                                                name="cidade" 
                                                onChange={e => this.setState({cidade: e.target.value})}/>
                                    </FormGroup>        
                                     <FormGroup label="Estado: " htmlFor="inputEstado">
                                        <input type="estado"
                                                id="inputEstado"
                                                className='form-control'
                                                name="estado" 
                                                onChange={e => this.setState({estado: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Telefone: " htmlFor="inputTelefone">
                                        <input type="telefone"
                                                id="inputTelefone"
                                                className='form-control'
                                                name="telefone" 
                                                onChange={e => this.setState({telefone: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Celular: " htmlFor="inputCelular">
                                        <input type="celular"
                                                id="inputCelular"
                                                className='form-control'
                                                name="celular" 
                                                onChange={e => this.setState({celular: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Site: " htmlFor="inputSite">
                                        <input type="site"
                                                id="inputSite"
                                                className='form-control'
                                                name="site" 
                                                onChange={e => this.setState({site: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Email: " htmlFor="inputEmail">
                                        <input type="email"
                                                id="inputEmail"
                                                className='form-control'
                                                name="email" 
                                                onChange={e => this.setState({email: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Site: " htmlFor="inputSite">
                                        <input type="site"
                                                id="inputSite"
                                                className='form-control'
                                                name="site" 
                                                onChange={e => this.setState({site: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Contato: " htmlFor="inputContato">
                                        <input type="contato"
                                                id="inputContato"
                                                className='form-control'
                                                name="contato" 
                                                onChange={e => this.setState({contato: e.target.value})}/>
                                    </FormGroup>"
                                    <FormGroup label="Observacao: " htmlFor="inputObservacao">
                                        <input type="observacao"
                                                id="inputObservacao"
                                                className='form-control'
                                                name="observacao" 
                                                onChange={e => this.setState({observacao: e.target.value})}/>
                                    </FormGroup>"
                                    <FormGroup label="Inscricao Estadual: " htmlFor="inputInscricaoEstadual">
                                        <input type="inscricaoEstadual"
                                                id="inputInscricaoEstadual"
                                                className='form-control'
                                                name="inscricaoEstadual" 
                                                onChange={e => this.setState({inscricaoEstadual: e.target.value})}/>
                                    </FormGroup>"
                                    <FormGroup label="Inscricao Municipal: " htmlFor="inputInscricaoMunicipal">
                                        <input type="inscricaoMunicipal"
                                                id="inputInscricaoMunicipal"
                                                className='form-control'
                                                name="inscricaoMunicipal" 
                                                onChange={e => this.setState({inscricaoMunicipal: e.target.value})}/>
                                    </FormGroup>"
                                    <FormGroup label="Inscricao Estadual: " htmlFor="inputInscricaoEstadual">
                                        <input type="inscricaoEstadual"
                                                id="inputInscricaoEstadual"
                                                className='form-control'
                                                name="inscricaoEstadual" 
                                                onChange={e => this.setState({inscricaoEstadual: e.target.value})}/>
                                    </FormGroup>"
                                    <FormGroup label="Data de Abertura: " htmlFor="inputDataAbertura">
                                        <input type="dataAbertura"
                                                id="inputDataAbertura"
                                                className='form-control'
                                                name="dataAbertura" 
                                                onChange={e => this.setState({dataAbertura: e.target.value})}/>
                                    </FormGroup>"
                                    <FormGroup label="Ramo de Atividade: " htmlFor="inputRamoAtividade">
                                        <input type="ramoAtividade"
                                                id="inputRamoAtividade"
                                                className='form-control'
                                                name="ramoAtividade" 
                                                onChange={e => this.setState({ramoAtividade: e.target.value})}/>
                                    </FormGroup>"
                                        <button className="btn btn-success">Cadastrar</button>
                                </fieldset>  
                            </div>
                        </div>
                    </div>
                </Card>
            </div>        
        )
    }
}

export default CadastroFornecedor