import React, { Component, } from 'react';
import { View, ScrollView, StyleSheet, Text, Image, Platform, TouchableWithoutFeedback, Linking } from 'react-native';
import * as zync from './zync.js';
import Header from './utils/header.js';
import URL from 'url-parse';

const ios = Platform.OS === 'ios';
// crappy workaround to React Native not allowing
// you to require image resources using string concatenation
const externalLogos = {
  github: require('../resources/ex_logos/ic_github_logo.png'),
  keybase: require('../resources/ex_logos/ic_keybase_logo.png'),
  linkedin: require('../resources/ex_logos/ic_linkedin_logo.png'),
  telegram: require('../resources/ex_logos/ic_telegram_logo.png'),
  twitter: require('../resources/ex_logos/ic_twitter_logo.png'),
}

export default class CreditsView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Credits" />

        <ScrollView style={styles.container}>
          <Person
           name={zync.lang.mazenName}
           img={require("../resources/people/mazen_logo.png")}
           title={zync.lang.mazenTitle}
           bio={zync.lang.mazenBio}
           links={[
            "https://github.com/mkotb",
            "https://telegram.me/mazenk"
           ]}
           />

         <View style={styles.separator} />

         <Person
            name={zync.lang.amirName}
            img={require("../resources/people/amir_logo.png")}
            title={zync.lang.amirTitle}
            bio={zync.lang.amirBio}
            links={[
              "https://github.com/aaomidi"
            ]}
            />
         <View style={styles.separator} />

         <Person
           name={zync.lang.brandonName}
           img={require("../resources/people/brandon_logo.png")}
           title={zync.lang.brandonTitle}
           bio={zync.lang.brandonBio}
           links={[
             "https://github.com/BranicYeti"
           ]}/>

         <View style={styles.separator} />

         <Person
           name={zync.lang.vilsolName}
           img={require("../resources/people/vilsol_logo.png")}
           title={zync.lang.vilsolTitle}
           bio={zync.lang.vilsolBio}
           links={[
             "https://github.com/Vilsol",
             "https://keybase.io/vilsol"
           ]}/>

         <View style={styles.separator} />

         <Person
           name={zync.lang.matthewName}
           img={require("../resources/people/mattrick_logo.png")}
           title={zync.lang.matthewTitle}
           bio={zync.lang.matthewBio}
           links={[
             "https://github.com/devmattrick",
             "https://keybase.io/mattrick",
             "https://twitter.com/devmattrick"
           ]}/>

         <View style={styles.separator} />

         <Person
           name={zync.lang.markName}
           img={require("../resources/people/mark_logo.png")}
           title={zync.lang.markTitle}
           bio={zync.lang.markBio}
           links={[
             "https://github.com/DarkSeraphim",
             "https://linkedin.com/in/mark-hendriks-60029391"
           ]}
           />
        </ScrollView>
      </View>
    )
  }
}

export class Person extends Component {
  render() {
    return (
      <View style={styles.personContainer}>
        <Image style={styles.personImage} source={this.props.img} resizeMode="contain"/>
        <Text style={styles.personName}>{this.props.name}</Text>
        <Text style={styles.personTitle}>{this.props.title}</Text>
        <Text style={styles.personBio}>{this.props.bio}</Text>

        <View style={{flexDirection: 'row'}}>
          {this.props.links &&
            this.props.links.map((link) => {
              const domain = new URL(link).hostname.split('.')[0];

              return (
                <TouchableWithoutFeedback
                  onPress={() => Linking.openURL(link.toString())}
                  key={domain}>
                  <Image
                    style={styles.personSocial}
                    source={externalLogos[domain]}
                  />
                </TouchableWithoutFeedback>
              )
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ios ? "#f7f7f8" : "#1E88E5",
    flex: 1,
  },
  personContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 15
  },
  personImage: {
    borderRadius: 87.5,
    width: 175,
    height: 175,
    marginTop: 10
  },
  personName: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10
  },
  personTitle: {
    color: "#4c4c4c",
    textAlign: "center",
    marginTop: 3,
    width: 145,
    fontSize: 13
  },
  personBio: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 22
  },
  personSocial: {
    margin: 15,
    height: 45,
    width: 45
  },
  separator: {
    marginTop: 20,
    height: 0.5,
    backgroundColor: 'grey'
  }
});
