import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   console.log("parent about js called");
//   return (
//     <div>
//       <h1>About Page</h1>
//       {/* <User /> */}
//       <UserClass
//         name="utkarsh (Class)"
//         location="Patna"
//         contact="utkarshsingh.3008@gmail.com"
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor about called");
  }

  componentDidMount() {
    console.log("About componentDidMount called");
  }

  render() {
    console.log("render about called");
    return (
      <div>
        <h1>About Page</h1>
        {/* <User /> */}
        <UserClass
          name="utkarsh (Class)"
          location="Patna"
          contact="utkarshsingh.3008@gmail.com"
        />
      </div>
    );
  }
}

/**
 * About constructor
 * About render
 * Utkarsh constructor
 * utkarsh render
 * utpal const
 * utpal render
 * <DOM UPDATED - IN Single Batch></DOM>
 * utkarsh componentdidmount
 * utpal componentdidmount
 * about componentdidmount
 */

export default About;
