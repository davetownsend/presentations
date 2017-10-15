import React from "react";
import {render} from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';

import Presentation from "./presentation/index";

injectTapEventPlugin();
render(<Presentation/>, document.getElementById("root"));