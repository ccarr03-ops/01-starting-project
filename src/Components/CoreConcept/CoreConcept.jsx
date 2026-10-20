
function CoreConcept(props){
    return(
        <li>
            <img src={props.image} 
            alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.descripton}</p>
        </li>
    );
}

export default CoreConcept;