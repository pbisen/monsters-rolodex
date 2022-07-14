
import './card-list-styles.css'

import CardContainer from "../card-container/card-container.component";

const CardList = (props) => {
    const { dataMonsters } = props;

    return (
        <div className="card-list">

            {dataMonsters.map((monster) => {
                const { name, id, email } = monster;
                return (
                    <CardContainer name={name} id={id} email={email} />
                )

            })}
        </div>

    )

}



export default CardList