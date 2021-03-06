'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  AlertIOS,
  View
} from 'react-native'

class AwesomeProject extends Component {
  constructor() {
    super()
    this.state = {
      apiId: "",
      apiTitle: "",
      apiBody: "",
      apiQuality: ""
    }
  }

  componentDidMount() {
    this.fetchApiData;
  }

  get fetchApiData() {
    fetch("http://idea.selfup.me/api/v1/ideas/")
    .then((responseData) => {
      let responseBody = responseData._bodyText
      let responseObject = JSON.parse(responseBody)[0]
      this.setState({apiId: `Id: ${responseObject.id}`})
      this.setState({apiTitle: `Title: ${responseObject.title}`})
      this.setState({apiBody: `Body: ${responseObject.body}`})
      this.setState({apiQuality: `Quality: ${responseObject.quality}`})
    })
    .catch(error => {
      console.log(error);
    })
    .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to IdeaBox Mobile
        </Text>
        <Text style={styles.instructions}>
          {`${this.state.apiId}`}
        </Text>
        <Text style={styles.instructions}>
          {`${this.state.apiTitle}`}
        </Text>
        <Text style={styles.instructions}>
          {`${this.state.apiBody}`}
        </Text>
        <Text style={styles.instructions}>
          {`${this.state.apiQuality}`}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fe1f4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
