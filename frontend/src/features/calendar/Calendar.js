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
        this.date = format(this.state.today, 'd')

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
            let day = i === 0 ? <Day className="a-day" key={Math.random()} today={true} month={format(addDays(this.state.today, i), 'LLL')} date={this.state.today.getDate()}/> :
                <Day className="a-day" key={Math.random()} today={false} month={format(addDays(this.state.today, i), 'LLL')} date={ addDays(this.state.today, i).getDate()}/> 
            day_list.push(day)
        }

        return(
                <Grid className="bx--grid calendar-contain" narrow={true}>
                    <Row>
                        {/*TODO: do a terneary operation is addDay.month == this.date.month ? show new month after emdash : don't show month */}
                        <h4 aria-label="calendar" className="calendar-title"> {format(this.state.today, 'LLLL')} {this.date} 
                        {this.state.days > 1 ? " — " + format(addDays(this.state.today, this.state.days), 'LLLL') + " " + addDays(this.state.today, this.state.days).getDate() : "" }
                        
                        </h4>
                    </Row>
                    <Row className="slider-row">
                        <Column lg={4} md={2} sm={0}>
                            <div>
                                <p>{this.state.days} days</p>
                                <Slider
                                ariaLabelInput="day slider"
                                className="day-slider "
                                max={5}
                                min={1}
                                value={3}
                                onChange={({ value }) => this.setState({days: value})}
                                />
                            </div>

                            
                        </Column>
                    </Row>
                    <Row className="date-head">
                        {day_list.map(el => 
                            <Column> 
                             {el}
                            </Column>
                        )}
                    </Row>
                    
                </Grid>            
        )
    }



}

export default Calendar