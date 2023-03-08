import {useState} from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";



export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [posFeedback, setPosFeedback] = useState(0);

  // console.log(setGood);

  function countTotalFeedback() {
    console.log(good);
    setTotal(good + neutral + bad)

    setTotal(() => { return good + neutral + bad })
  }


  function changeStat(e) {
    
    // this.countPositiveFeedbackPercentage();
    // console.log(e.target.name);

    switch (e.target.name) {
      case "good":
        // setGood(good + 1);
        setGood(prevState => ( prevState + 1))
        break;
      
      case "neutral":
        setNeutral(neutral + 1);
        break;
      
      case "bad":
        setBad(bad + 1);
        break;
      
      default:
        return;
    }

    countTotalFeedback();
  }

  return (
    <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={changeStat}/>
        </Section>
        <Section title={"Statistics"}>
          {total ? (
              <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={posFeedback} />
          ) : (
              <Notification message="There is no feedback"/>
          )}
        </Section>
    </div>
  )
}






// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     posFeedback: 0,
//   }

//   changeStat = (e) => {
//     this.setState(prevState => ({
//         [e.target.name]: prevState[e.target.name] + 1,
//     }))
//     this.countTotalFeedback(); 
//     this.countPositiveFeedbackPercentage();
//   }
  
//   countTotalFeedback = () => {
//     this.setState(prevState => (
//       console.log(prevState),
//       console.log(this.state),
//       {
//       // total: prevState.good + prevState.neutral + prevState.bad
//       total: this.state.good + this.state.neutral + this.state.bad
//     }))
//   }

//   countPositiveFeedbackPercentage = () => {
//     this.setState(prevState => {
//       return {
//         posFeedback: Math.round((prevState.good / prevState.total) * 100),
//       }
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions onLeaveFeedback={this.changeStat}/>
//         </Section>
//         <Section title={"Statistics"}>
//           {this.state.total ? (
//               <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.state.total}
//           positivePercentage={this.state.posFeedback} />
//           ) : (
//               <Notification message="There is no feedback"/>
//           )}
//         </Section>
//       </div>
//     )
//   }
  

// }