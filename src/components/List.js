import Item from './Item'

function List() {
    return (
    <>
       <h1>Minha Lista</h1>  
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985} />
            <Item marca="Lamborghini" ano_lancamento={1950} />
            <Item marca="Porsche" ano_lancamento={1932} />
            <Item marca="Renault" ano_lancamento={1978} />
            <Item />
            
        </ul>    
    </>
    )
}                   
export default List