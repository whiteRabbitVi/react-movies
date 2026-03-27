
export function Post(props) {
    const {name, id, deletePost} = props;
    return <h2>{name} <button onClick={ () => deletePost(id) } >delete</button> </h2>
}