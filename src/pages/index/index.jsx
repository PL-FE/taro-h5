import { Component } from "react";
import { View, ScrollView } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.css";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <ScrollView
          className="body"
          scrollY
          scrollWithAnimation
          scrollTop={230}
        >
          {new Array(200).fill(1).map((a, i) => {
            return (
              <View key={i} className="item">
                {i}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
