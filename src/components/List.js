import Item from './Item';

function List(){
    return (
        <>
            <h1>
                Minha Lista
            </h1>
            <ul>
                <Item marca='Volvo'/>
                <Item marca='Bugatti'/>
                <Item marca='Ferrari'/>
            </ul>
        </>
    )
}
export default List