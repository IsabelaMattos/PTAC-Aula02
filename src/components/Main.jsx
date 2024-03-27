import { useState } from "react";

export default function Main() {
    const [ nome, setNome ] = useState ("");
    const [ telefone, setTelefone ] = useState ("");
    const [ listaContatos, setContatos ] = useState ("");

    const registrar = (event) => {
        event.preventDefault();
        alert("Deu certo!");
        setContatos([...listaContatos,
        {
         nomeSalvo: nome,
         telefonesalvo: telefone
        }
    ]);
    }
    console.table(listaContatos);
    
    return (
        <main>
            <center>
            <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" 
            nome="nome-contato" 
            id="nome" value={nome} 
            onChange={ 
                (event) => setNome (event.target.value)
            }/>
<br/><br/>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel"
            name=""
            id="telefone" value={telefone}
            onChange={
                (event) => setTelefone (event.target.value)
            }/> 
<br/><br/>
            <label htmlFor="listaContatos">Lista de contatos:</label>
            <input type="list"
            name=""
            id="listaContatos" value={listaContatos}
            onChange={
                (event) => setContatos (event.target.value)
            }/>
<br/><br/>
            <button>Salvar</button>
            </form>
            </center>
        </main>
    );
}