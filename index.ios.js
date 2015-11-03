/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
// 'use strict';

// var React = require('react-native');

// var HealthKit = require('react-native-healthkit');
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
// } = React;

// var testhealth = React.createClass({
//   render: function() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// AppRegistry.registerComponent('testhealth', () => testhealth);
'use strict'

let React = require('react-native')
let {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  requireNativeComponent
} = React
let HealthKit = require('react-native-healthkit')

let Index = require('./src/components/Index')

let SimpleExample = React.createClass({
  getInitialState () {
    return { isHealthDataAvailable: false }
  },

  componentWillMount () {
    HealthKit.isHealthDataAvailable((err, result) => {
      this.setState({ err, isHealthDataAvailable: result })
    })
  },

  render () {
    let { isHealthDataAvailable } = this.state

    if (!isHealthDataAvailable) {
      return (
        <View style={styles.centered}>
          <Text>No health data available</Text>
        </View>
      )
    }

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'HealthKit',
          component: Index
        }}
      />
    )
  }
})

let styles = StyleSheet.create({
  container: { flex: 1 },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


AppRegistry.registerComponent('testhealth', () => SimpleExample);
