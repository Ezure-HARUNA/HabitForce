import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import styled from 'styled-components'

const StyledCalendarHeatmap = styled(CalendarHeatmap)`
width: 80%!important;
margin: 0 auto!important;
` 


function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  const arr = [];
  for (let idx = 0; idx < count; idx += 1) {
    arr.push(idx);
  }
  return arr;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomValues(count, date = new Date()) {
  return getRange(count).map((index) => {
    return {
      date: shiftDate(date, -index),
      count: getRandomInt(1, 3),
    };
  });
}

const today = new Date();
console.log(today)
// today.setDate(today.getDate -150)
const startDate = today.setDate(today.getDate -150);
console.log(startDate)
class Demo extends React.Component {


  state = {
    values: generateRandomValues(200),
  };

  generateValues = () => {
    this.setState({
      values: generateRandomValues(200),
    });
  };

   getTooltipDataAttrs = (value) => {
    // Temporary hack around null value.date issue
    if (!value || !value.date) {
      return null;
    }
    // Configuration for react-tooltip
    return {
      // 'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${value.count}`,
      // 'data-tip': `${value.date.slice(0, 10)} のカウント: ${value.count}`,
      'data-tip': `${value.date.slice(0, 10)} `,
    };
  }; 

  // handleClick = (value) => {
  //   alert(`You clicked on ${value.date.slice(0, 10)} with count: ${value.count}`);
  // };

  // randomValues = getRange(200).map(index => {
  //   return {
  //     date: shiftDate(today, -index),
  //     count: getRandomInt(1, 3),
  //   };
  // });

  // randomValues = 
  

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <StyledCalendarHeatmap
                // startDate={today.getDate() - 200}
                // startDate={today.setDate(today.getDate() - 150)}
                startDate={new Date('2020-08-20')}
                // startDate={new Date(startDate)}
                // startDate={shiftDate(today, -150)}
                endDate={new Date('2021-02-20')}
                // endDate={today}
               values={[
                { date: '2021-01-22', count: 4 },
                { date: '2021-01-30', count: 2 },
                { date: '2021-01-21', count: 3 },
                // ...and so on
              ]}
              // values={randomValues}
              /* values={[
                  date: commit.date, count: commit.count
              ]} */
              /* values={this.state.values} */
              classForValue={(value) => {
                if (!value) {
                  return 'color-empty';
                }
                return `color-github-${value.count}`;
              }}
              tooltipDataAttrs={this.getTooltipDataAttrs}
              // onClick={this.handleClick}
            />
          </div>
         
        </div>{' '}
        <div className="text-sm-center mt-4">
          <button className="btn btn-link btn-sm text-secondary" onClick={this.generateValues}>
            Regenerate values
          </button>
        </div>
        <ReactTooltip />
      </div>
    );
  }
}

export default Demo;