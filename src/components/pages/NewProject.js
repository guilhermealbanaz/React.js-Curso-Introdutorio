import styles from './NewProject.module.css'
import ProjectForm from '../projects/ProjectForm'

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar serviços!</p>
            <ProjectForm btnText='Criar Projeto'/>
        </div>
    )
}
export default NewProject