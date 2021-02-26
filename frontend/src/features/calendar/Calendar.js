import React from 'react'
import { 
    Slider,
    Grid,
    Row,
    Column
 } from 'carbon-components-react'
import Day from '../../components/Day'

class Calendar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            days:3
        }
    }

    shouldComponentUpdate(){
        return ( this.state.days > 0)
    }

    render(){

        const day_list = []

        for (let i = 0; i < this.state.days; i++) {
            let day = <Day/>
            day_list.push(day)
        }

        return(
            <div>
                <Grid className="bx--grid calendar">
                    <Row>
                        <Column lg={2} md={4} sm={0}>
                        <Slider
                        ariaLabelInput="day slider"
                        className="day-slider "
                        max={5}
                        min={1}
                        value={3}
                        onChange={({ value }) => this.setState({days: value})}
                        />
                        <h3>{this.state.days}</h3>
                        </Column>
                        

                        {day_list.map(element => 
                            <Column> 
                             {element}
                            </Column>
                        )}
                    </Row>
                    <Row>

                    </Row>
                </Grid>

            </div>
            
            
            
            
        )
    }



}

export default Calendar