import Button from './evento/Button'

function Evento(){

    function meuEvento(){
        console.log(`Ativando meu primeiro evento`)
    }

    function segundoEvento(){
        console.log(`Ativando segundo evento`)
    }

    return(
        <div>
            <p>
                 Clique aqui para disparar um evento:
            </p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}
export default Evento