import './card-container-styles.css'

const CardContainer = (props) => {
    const { id, name, email } = props;

    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )

}

export default CardContainer