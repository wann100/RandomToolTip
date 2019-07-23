# RandomToolTip
This is a react Component That will create view with a tip that you want to display

Download then install using
```
npm install
```

Proptypes:
```
    ListofTips:PropTypes.object.isRequired,
    Width:PropTypes.object,
    Height:PropTypes.object,
    Color:PropTypes.string,
    Transparency: PropTypes.boolean,
    TextColor:PropTypes.string,
    IconColor:PropTypes.string,
    IconName:PropTypes.string,
    Style: PropTypes.style,
    ToolTipOpacity:PropTypes.Number,
    TopPosition:PropTypes.object,
    borderRadius:PropTypes.object,
```

Example of use:

```
import RandomToolTip from "../components/RandomToolTip";
import React, { Component } from "react";
class test extends Component{
  constructor(props) {
    super(props);

    this.state = {
      tootlip:{
        1:{tip:"First visit be home"},
        2:{tip:"Change loxbox code after every visit"},
        3:{tip:"this is my third"},

      },
    };
  }
    render(){

        return(
      <RandomToolTip  ListofTips = {this.state.tootlip} Color="orange" Width="90%" Height= {50}
              ></RandomToolTip>
        );
    }
}
```

The tooltip object should look like this to work

```
tooltip{1:{tip:"what you want"},
        2:{tip:"nothing hi"}
        [anumber]:{"what you want to say"}}  ---guide will not run if you write it exactly like this
```
