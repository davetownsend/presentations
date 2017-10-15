import React, { Component } from "react";
import {Image, Text} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  labs: require("../../assets/images/lab-head-only.png")
};
preloader(images);

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Image src={images.labs.replace("/", "")} margin="-130px 0px 10px 730px" height="150px"/>
      </div>
    );
  }
}

export default Footer;
