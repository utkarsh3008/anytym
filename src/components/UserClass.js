import React from "react";
import { GITHUB_PROFILE_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        login: "Dummy",
      },
    };
  }
  async componentDidMount() {
    console.log(this.props.name + "Userclass componentDidMount called");
    const data = await fetch(GITHUB_PROFILE_API);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    console.log(this.props.name + "render userclass called");

    // const { name, location, contact } = this.props;
    const { name, login, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Class based component</h2>
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
