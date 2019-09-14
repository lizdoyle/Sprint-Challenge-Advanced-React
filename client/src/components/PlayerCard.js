import React from "react";
import { Card , Icon} from "semantic-ui-react";

function PlayerCard(props) {
  


        console.log("PlayerCard Props", props.players)
        return(
            <div>   
                {props.players.map(player => {
                    const {name, id, country, searches} = player
                

            return <Card className="playerCard" key={id}>
                        <Card.Content header={name} />
                        <Card.Content content={id} />
                        <Card.Meta content={country}/>
                        <Icon>Searches: {searches}</Icon>
                    </Card>

                })}

            </div>
        )


    }




export default PlayerCard

