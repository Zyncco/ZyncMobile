import React, { Component, } from 'react';
import { View, ScrollView, StyleSheet, Text, Image, Platform, TouchableWithoutFeedback, Linking } from 'react-native';
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
           name="Mazen Kotb"
           img={require("../resources/people/mazen_logo.png")}
           title="Java Software Engineer (Mobile Developer)"
           bio="I'm currently a Canadian Software Engineer and have been programming for 6 years since I" +
          "was young. Although I've stuck in my hand in around everything, my expertise primarily resides in using JVM languages for" +
          "backend infrastructures. Outside of Computer Science, I love writing, talking (in front of large groups), and exploring around Vancouver." +
          "If you want to chat, feel free to hit me up a message on Telegram."
           links={[
            "https://github.com/mkotb",
            "https://telegram.me/mazenk"
           ]}
           />

         <View style={styles.separator} />

         <Person
            name="Amir A. Omidi"
            img={require("../resources/people/amir_logo.png")}
            title="Project Lead, Developer"
            bio="I'm a student studying Computer Sciences at Drexel University. I love trying out new" +
            "technologies, frameworks, and gadgets. My career goal is to be a software engineer at a top tech firm."
            links={[
              "https://github.com/aaomidi"
            ]}
            />
         <View style={styles.separator} />

         <Person
           name="Brandon (Yeti)"
           img={require("../resources/people/brandon_logo.png")}
           title="Developer"
           bio="I am a self-taught, self-employed software developer living in the United Kingdom, primarily working" +
           "with command line / backend applications. I know Java, C#, Python and a handful of other non-programming languages."
           links={[
             "https://github.com/BranicYeti"
           ]}/>

         <View style={styles.separator} />

         <Person
           name="Vilsol"
           img={require("../resources/people/vilsol_logo.png")}
           title="Server Developer"
           bio="A software engineer with a passion for virtualization. Mostly spent time as a full-stack developer" +
           "in many languages, frameworks and platforms, but recently more focused on systems, operations and infrastructure." +
           "Left university to pursue my career as well as many side projects including this one."
           links={[
             "https://github.com/Vilsol",
             "https://keybase.io/vilsol"
           ]}/>

         <View style={styles.separator} />

         <Person
           name="Matthew McCune"
           img={require("../resources/people/mattrick_logo.png")}
           title="Web Developer"
           bio="I'm a designer and developer from sunny Southern California. I mostly work with web stuff."
           links={[
             "https://github.com/devmattrick",
             "https://keybase.io/mattrick",
             "https://twitter.com/devmattrick"
           ]}/>

         <View style={styles.separator} />

         <Person
           name="Mark Hendricks"
           img={require("../resources/people/mark_logo.png")}
           title="Backend Developer"
           bio="I'm a Computer Science student at University of Technology in Eindhoven, mainly" +
           "spending my time experimenting with new solutions and new languages, always aiming for fast" +
           "and scale-able."
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
