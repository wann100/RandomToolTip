import React, { Component } from 'react'
import { RkText} from "react-native-ui-kitten";
import { Button } from "react-native-elements";
import { PropTypes } from 'prop-types';
import {

  View,
} from 'react-native';
class RandomToolTip extends Component {

     randomNumber(min, max){
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  

  constructor(props) {
    super(props);

   // this.toggle = this.toggle.bind(this);

    this.state = {
      tippick:null,
     
    };
  }

    componentWillMount(){
      this.setState({tippick:this.randomNumber(1,Object.keys(this.props.ListofTips).length)});
    }
    render() {
    
      const {
        ListofTips,
        Width,
        Height,
        Color,
        Transparency,
        TextColor,
        IconColor,
        IconName,
        Style,
        TopPosition,
        borderRadius,
        ToolTipOpacity,
      } = this.props;
       //var Randomtooltip = this.selectrandomToolTip();

       
       
        return (
<View
          style={{
            width: Width,
            Height:Height,
            flexDirection: "row",
            alignSelf: "center",
            borderRadius: borderRadius,
            backgroundColor: Color,
            position: "absolute",
            top:TopPosition,
            opacity:ToolTipOpacity,
            shadowOffset: {
        width: Width,
        height: Height,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      elevation: 21,
      marginBottom:20,
    
          }}
        >
          <Button
            buttonStyle={{
              alignSelf: "flex-start",
              backgroundColor:'transparent',
              marginLeft:10,
            }}
            icon={{
              type: "font-awesome",
              name: IconName,
              color: IconColor
            }}
            
          />
          <RkText rkType="primary3 header6" style={{ marginLeft:-20,marginTop: 12 , alignSelf:'flex-start'}}>
            
            {ListofTips[this.state.tippick].tip}
          </RkText>
        </View>
        );
    }
}

RandomToolTip.propTypes = {
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
  };
  RandomToolTip.defaultProps = {
    Width: 200,
    Height: 50,
    Color:'white',
    Transparency: false,
    TextColor:'white',
    IconColor:"black",
    IconName:'info',
    ToolTipOpacity:0.94,
    TopPosition:"55%",
    borderRadius:15,
  };
  
export default RandomToolTip;