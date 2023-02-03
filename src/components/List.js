import Item from './Item';

function List(){
    return (
        <>
            <h1>
                Minha Lista
            </h1>
            <ul>
                <Item marca='Volvo' ano_lancamento={1983} />
                <Item marca='Bugatti' ano_lancamento={2009} />
                <Item marca='Ferrari' ano_lancamento={2000} />
                <Item/>
            </ul>
        </>
    )
}
export default List