import React from "react";
import Card from "./Card"

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error("Nooooo!")
    // }
    return (
        <div>
            {robots.map((user, i) => {
                return <Card
                    id={robots[i].id}
                    key={i}
                    name={robots[i].name}
                    email={robots[i].email} />
            })}
        </div>
    )
}
export default CardList;