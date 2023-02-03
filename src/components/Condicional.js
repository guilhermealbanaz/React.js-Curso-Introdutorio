import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>
                Cadastre o seu email:
            </h2>
            <form>
                <input type="email" placeholder="insira seu email" onChange={(e) => setEmail(e.target.value)} />	
                <button type='submit' onClick={enviarEmail}>Enviar E-mail</button>
                <p>{userEmail && (
                    <div>
                        O e-mail do usuário é: {userEmail}
                    <p>
                        <button onClick={limparEmail}>
                            Limpar E-mail
                        </button>
                    </p>    
                    </div>
                )}</p>
            </form>
        </div>
    )
}
export default Condicional