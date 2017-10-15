// Import React
import React, { Component } from "react";
import { Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import Footer from "./components/Footer";
import AppBar from "material-ui/AppBar";
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  bootlogo: require("../assets/images/spring-boot-logo.png"),
  react: require("../assets/images/react.png"),
  twitter: require("../assets/images/twitter.png"),
  npm: require("../assets/images/npm.png"),
  webpack: require("../assets/images/webpack.png"),
  react2: require("../assets/images/react2.png"),
  rickandmorty: require("../assets/images/rick-morty.png"),
  mui: require("../assets/images/mui2.png"),
  sourceMap: require("../assets/images/source-map2.png"),
  jsx: require("../assets/images/jsx.png"),
  reactDevTools: require("../assets/images/react-dev-tools.png"),
  reactRouter: require("../assets/images/react-router.png"),
  fire: require("../assets/images/fire.png"),
  vdom: require("../assets/images/vdom.png"),
  cf: require("../assets/images/cf.png"),
  gradle: require("../assets/images/gradlephant.png"),
  node: require("../assets/images/node.png")
};

preloader(images);

const theme = createTheme({
  primary: "white"
}, {
  primary: "Source Sans Pro, Helvetica, sans-serif"
});


export default class Presentation extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Spectacle theme={theme}>

        <Deck transition={["zoom", "slide", "Fade"]} transitionDuration={500} progress={'none'}>

      <Slide transition={["zoom"]} bgColor="black">
        <Image src={images.react.replace("/", "")} margin="-120px auto 20px" height="300px"/>
        <Image src={images.bootlogo.replace("/", "")} margin="-120px auto 20px" height="300px"/>
        <Heading size={1} caps fit textColor="#FFF">
          Building Modern Web Applications with
        </Heading>
        <Heading size={1} caps fit textColor="#FFF">
          React & Spring Boot
        </Heading>
        <Image src={images.cf.replace("/", "")} margin="0px auto -10px" height="115px"/><Text textSize="20pt" textColor="#61DAFB">Meetup - Dec 15, 2016</Text>
        <hr/>
        <Text textSize="30pt" textAlign="left" textColor="#FFF">Dave Townsend | Matson, Inc</Text>
         <Text textSize="22pt" textAlign="left" textColor="#a8a8a8"><i>Principal Software Engineer | Innovation & Architecture</i></Text>
        <Text textSize="25pt" textAlign="left" textColor="#FFF">
          <Image src={images.twitter.replace("/", "")} margin="0px auto -10px" height="32px"/>
          <strong> @davetownsend</strong>
        </Text>
        <Footer/>
      </Slide>


      <Slide transition={["fade"]} bgColor="primary" notes={"Use react as SPA to our boot app"}>
        <Heading size={2} textAlign="left" caps textColor="#000">front end</Heading>
        <Text textSize="50pt" textAlign="left" textColor="#333">
          <Image src={images.react.replace("/", "")} margin="0px auto -10px" height="60px"/>react (single page JS app)
        </Text>
        <br/>
        <br/>
        <br/>
        <Heading size={2} textAlign="left" caps textColor="#000">back end</Heading>
        <Text textSize="50pt" textAlign="left" textColor="#333">
          <Image src={images.bootlogo.replace("/", "")} margin="0px auto -10px" height="60px"/> spring boot
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="48pt" textAlign="left" textColor="#000">
          <b>step 1: </b>build boot REST API <br/><br/>
          <b>step 2: </b>set up front-end tool chain <br/><br/>
          <b>step 3: </b>build react components <br/><br/>
          <b>step 4: </b>integrate boot and react
        </Text>
      </Slide>



      <Slide transition={["zoom"]}>
        <Heading size={1} textAlign="left" textColor="#000">
          step 1: build boot REST API
        </Heading>
      </Slide>

      <Slide transition={["slide"]}>
        <Heading size={2} textColor="#000">
         spring boot <Image src={images.bootlogo.replace("/", "")} margin="0px auto -10px" height="125px"/>
        </Heading>
        <Text textSize="35pt" textColor="#000">
           A micro-framework that simplifies bootstrapping and development of new Spring applications by killing boilerplate.
         </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="60pt" textColor="#000" margin="-100px auto 10px">
          <b>scaffolding tools</b>
        </Text>
        <br/>
        <Text textSize="40pt" textColor="#000">
          spring initializr (web ui)
        </Text>
        <Link href="http://start.spring.io" textSize="30pt" target="_blank">http://start.spring.io</Link>
        <br/>
        <br/>
        <Text textSize="40pt" textColor="#000" textSize="40pt">generator-spring (cli)</Text>
        <Link href="https://github.com/davetownsend/generator-spring" textSize="25pt" target="_blank">http://github.com/davetownsend/generator-spring</Link>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="60pt" textColor="#000">
          <b>IDE Support</b>
        </Text>
        <br/>
        <Text textSize="35pt" textColor="#000">
          Intellij
        </Text>
        <br/>
        <Text textSize="35pt" textColor="#000">
          Spring Tool Suite
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="40pt" textAlign="left" textColor="#000" margin="-150px auto 0px">
          <b>resources</b>
        </Text>
        <CodePane textSize="16pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/rest-resources.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={1} textAlign="left" textColor="#000">
          demo
        </Heading>
      </Slide>


      <Slide transition={["zoom"]}>
        <Heading size={1} textAlign="left" textColor="#000">
          step 2: set up front-end tool chain
        </Heading>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="75pt" textColor="#000">
          <Image src={images.npm.replace("/", "")} margin="0px auto -10px" height="115px"/>
        </Text>
        <Text textSize="50pt" textColor="#000">
          node package manager
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textAlign="left" textColor="#000" margin="-100px auto 10px">
          npm init
        </Text>
        <CodePane textSize="18pt"
                  lang="bash"
                  source={require("raw!../assets/examples/npm-init.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textAlign="left" textColor="#000" margin="-130px auto 10px">
          npm install
        </Text>
        <CodePane textSize="22pt"
                  lang="bash"
                  source={require("raw!../assets/examples/npm-install.example")}

        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="18pt" textAlign="left" textColor="#000" margin="-150px auto 10px">
          <b>package.json</b>
        </Text>
        <CodePane textSize="13pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/package-json.example")}

        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="60pt" textColor="#000">
          node_modules
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textAlign="left" textColor="#000" margin="-130px auto 10px">
          using modules
        </Text>
        <CodePane textSize="26pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/node-modules.example")}

        />
      </Slide>


      <Slide transition={["slide"]}>
        <Image src={images.webpack.replace("/", "")} height="550px"/>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="55pt" textAlign="left" textColor="#000">
          - build/bundle <br/>
          - apply loaders <br/>
          &nbsp; &nbsp; &nbsp; &nbsp; <i>preprocessors</i> <br/>
          &nbsp; &nbsp; &nbsp; &nbsp; <i>transpilers</i> <br/>
          - run <br/>
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="60pt" textColor="#000">
          webpack.config.js
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <CodePane textSize="13pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/webpack-config.example")}
                  margin="-160px auto"
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Image src={images.gradle.replace("/", "")} margin="-100px auto -10px" height="210px"/>
        <Image src={images.node.replace("/", "")} margin="-100px auto -10px" height="210px"/>
        <Link href="https://github.com/srs/gradle-node-plugin" textSize="40pt" target="_blank">github.com/srs/gradle-node-plugin</Link>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={1} textAlign="left" textColor="#000">
          demo
        </Heading>
      </Slide>


      <Slide transition={["zoom"]}>
        <Heading size={1} textColor="#000">
          step 3: build react components
        </Heading>
      </Slide>


      <Slide transition={["slide"]} bgColor="primary">
        <Image src={images.react2.replace("/", "")} margin="-100px auto -10px" height="200px"/>
        <Text textSize="28pt" textColor="#000">
          A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="70pt" textColor="#000">
          react fundamentals
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Image src={images.jsx.replace("/", "")} height="450px"/>
      </Slide>


      <Slide transition={["slide"]}>
        <CodePane textSize="18pt"
                  lang="javascript"
                  margin="-160px auto"
                  source={require("raw!../assets/examples/jsx.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={2} textColor="#000">
          core concepts
        </Heading>
        <Text textSize="70pt" textColor="#000">
          components<br/>
          state & props
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={2} textColor="#000">
         component pattern
        </Heading>
        <Text textSize="70pt" textColor="#000">
          container & presentation
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="55pt" textColor="#000">
          single responsibility principle
        </Text>
        <Link href="https://en.wikipedia.org/wiki/Single_responsibility_principle" textSize="30pt" target="_blank">https://en.wikipedia.org/wiki/Single_responsibility_principle</Link>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="25pt" textColor="#000" textAlign="left" margin="-155px auto 10px">
          <b>container component</b>
        </Text>
        <CodePane textSize="19pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/set-state.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="25pt" textColor="#000" textAlign="left" margin="-100px auto 10px">
          <b>presentation component</b>
        </Text>
        <CodePane textSize="20pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/receive-props.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="25pt" textColor="#000" textAlign="left" margin="-100px auto 10px">
          <b>stateless functional presentation component</b>
        </Text>
        <CodePane textSize="20pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/stateless-functional.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="65pt" textColor="#000">
          virtual DOM
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="32pt" textColor="#000">
          whenever anything <i>may</i> have changed, re-render <i>everything</i> to a virtual DOM representation.
          <br/><br/>
          diff the current state of the UI with the desired state and compute the minimal set of DOM mutations.
          <br/><br/>
          batch together these mutations such that the UI is updated all at once in a single animation frame.
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Image src={images.vdom.replace("/", "")} margin="-125px 0px 0px -150px" height="800px"/>
      </Slide>



      <Slide transition={["slide"]}>
        <Image src={images.reactRouter.replace("/", "")} margin="-200px 0px 0px 0px" height="250px"/>
      </Slide>


      <Slide transition={["slide"]}>
        <CodePane textSize="22pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/router.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textColor="#000" textAlign="left" margin="-100px auto 10px">
          links w/ react-router
        </Text>
        <CodePane textSize="26pt"
                  lang="jsx"
                  source={require("raw!../assets/examples/router-link.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="60pt" textColor="#000">
          developer experience (DX)
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textColor="#000" textAlign="left" margin="-140px 0px 5px -10px">
          debugging with source maps
        </Text>
        <Image src={images.sourceMap.replace("/", "")} height="750px"/>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textColor="#000" textAlign="left">
          react dev tools
        </Text>
        <Image src={images.reactDevTools.replace("/", "")} height="400px" margin="0px 0px 0px -260px"/>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="55pt" textColor="#000">
          hot module reloading <Image src={images.fire.replace("/", "")} height="100px" margin="-50px 0px 0px 0px"/>
        </Text>

      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="80pt" textColor="#000">
          <i>styling</i>
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textColor="#000" textAlign="left" margin="-125px auto 10px">
          inline styles
        </Text>
        <CodePane textSize="22pt"
                  lang="jsx"
                  source={require("raw!../assets/examples/inline-style.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textColor="#000" textAlign="left" margin="-125px auto 10px">
          inline styles cont'd
        </Text>
        <CodePane textSize="22pt"
                  lang="css"
                  source={require("raw!../assets/examples/inline-style2.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="70pt" textAlign="left" textColor="#000">
          alternative styling libs
        </Text>
        <Text textSize="50pt" textAlign="left" textColor="#000">
          radium (grid)<br/>
          styled components<br/>
          jsxstyle<br/>
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Image src={images.mui.replace("/", "")} margin="0px 0px 0px -115px" height="500px"/>
        <Link href="http://www.material-ui.com" textSize="30pt" target="_blank">www.material-ui.com</Link>
      </Slide>


      <Slide transition={["slide"]}>
        <Text textSize="50pt" textAlign="left" textColor="#000" margin="-50px 0px 0px 0px" >
          mui components
        </Text>
        <CodePane textSize="22pt"
                  lang="javascript"
                  source={require("raw!../assets/examples/mui-app-bar.example")}
        />
      </Slide>


      <Slide transition={["slide"]}>
        <AppBar title="React+Boot" style={{textAlign: "left"}}/>
        <br/>
        <DatePicker hintText="select date"/>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={1} textAlign="left" textColor="#000">
          demo
        </Heading>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={1} textAlign="left" textColor="#000">
          step 4: integrate boot and react
        </Heading>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={4} textAlign="left" textColor="#000">
          no view controllers
        </Heading>
        <br/>
        <Heading size={4} textAlign="left" textColor="#000">
          no autoconfig
        </Heading>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={4} textAlign="left" textColor="#000">
          we need to create <br/>
        </Heading>
        <Text textSize="50pt" textAlign="left" textColor="#000">
          custom config<br/>
          react controlling the UI
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={4} textAlign="left" textColor="#000">
          also... <br/>
        </Heading>
        <Text textSize="50pt" textAlign="left" textColor="#000">
          webpack devServer proxy<br/>
            - <i>subvert cross origin</i>
        </Text>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={1} textAlign="left" textColor="#000">
          demo
        </Heading>
      </Slide>


      <Slide transition={["slide"]}>
        <Heading size={2} textColor="#000">
          presentation material <br/>
        </Heading>
        <Link href="https://github.com/davetownsend/dcc16" textSize="55pt" target="_blank">github.com/davetownsend/dcc16</Link>
      </Slide>


      <Slide transition={["zoom"]} bgImage={images.rickandmorty}>
        <Heading size={4} textColor="#FFF">
          @davetownsend
        </Heading>
      </Slide>

    </Deck>
        </Spectacle>
      </MuiThemeProvider>
    );
  }
}
