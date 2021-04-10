import React from "react";

export default class DatePicker extends React.Component {

}

function Day(props) {
    return(
        <div className="day">
            <span>{props.date}</span>
        </div>
    )
}

function Row(props){
    return(
        <div className="row">
            {Array(4).map((d) => {
                <Day date={1}></Day>
            })}
        </div>
    )
}