import React from "react";
import { Header, Card, Icon, Button } from "semantic-ui-react";
import { useDarkMode } from "../hooks/useDarkMode";


function PlayerCard(props) {

    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }


    console.log("PlayerCard Props", props.players)
    return (
        <div>
            {props.players.map(player => {
                const { name, id, country, searches } = player


                return <Card className="playerCard" key={id} style={{
                    border: '2px solid black',
                    borderRadius: '10px',
                    width: "300px",
                    margin: '0 auto',
                    marginBottom: '30px',
                    boxSizing: 'border-box',
                    padding: '20px'




                }}>
                    <Header as="h1">{name} </Header>
                    <Card.Content id='ID:'>Player #: {id} </Card.Content>
                    <Card.Meta content={country} />
                    <Icon>Searches: {searches}</Icon>
                    <Button onClick={toggleMode} className={darkMode ? 'toggle toggled' : "toggle"}> Darkness </Button>
                </Card>

            })}

        </div>
    )


}




export default PlayerCard