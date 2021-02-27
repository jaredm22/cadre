import React from 'react'
import { 
    Slider,
    Grid,
    Row,
    Column
 } from 'carbon-components-react'
import { addDays, format } from 'date-fns'
import Day from '../../components/Day'
import './calendar.scss'



class Calendar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            today: new Date(),
            days:3
        }
    }

    shouldComponentUpdate(){
        return ( this.state.days > 0)
    }

    hello() {
        console.log('I was triggered during render');

    }

    render(){
        const day_list = []

        for (let i = 0; i < this.state.days; i++) {
            let day = i === 0 ? <Day key={i} today={true} date={ addDays(this.state.today, i).getDate()}/> :
                <Day key={i} today={false} date={ addDays(this.state.today, i).getDate()}/> 
            day_list.push(day)
        }

        return(
            <div className="contain-calendar">
                <h3>wattup</h3>
                <Grid className="bx--grid calendar " narrow={true}>
                    <Row>
                        <Column>
                            {format(this.state.today, 'MM.d.yy')}
                        </Column>
                        <Column lg={4} md={2} sm={0}>
                            <Slider
                            ariaLabelInput="day slider"
                            className="day-slider "
                            max={5}
                            min={1}
                            value={3}
                            onChange={({ value }) => this.setState({days: value})}
                            />
                            <h5>{this.state.days}</h5>
                        </Column>
                    </Row>
                    <Row>
                        
                        

                        {day_list.map(el => 
                            <Column> 
                             {el}
                            </Column>
                        )}
                    </Row>
                    
                </Grid>

            </div>
            
            
            
            
        )
    }



}

export default Calendar