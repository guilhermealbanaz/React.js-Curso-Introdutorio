function Pessoa({foto, nome, idade, profissao}){
    return (
        <div>
            <img src={foto} alt={nome}></img>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa