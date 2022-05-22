import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContext } from "./src/util/themes.js";
import BasicHeader from "./src/component/basicHeader/basicHeader.js";
import { GuessRow } from "./src/component/guessBoard/guessBoard.js";

function HelpScreen({ navigation }) {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const textColor = { color: theme.colors.text };
  return (
    <View style={{ flexDirection: "column" }}>
      <BasicHeader
        iconColor={theme.colors.text}
        title={"HƯỚNG DẪN"}
        onPress={() => navigation.goBack()}
      />
      <br />
      <br />
      <br />

      <View>
        <Text style={textColor}>Có năm lần thử</Text>
        <Text style={textColor}>Nhập từ và nhấn enter</Text>
        <Text style={textColor}>Đúng sai theo màu sắc</Text>
        <View style={{ borderBottomColor: "#3A3A3D", borderBottomWidth: 1 }}></View>
        <Text style={textColor}>VÍ DỤ</Text>
      </View>
      <br />
      <br />

      <View>
        <GuessRow
          wordLength={5}
          guess={"TRANG"}
          accuracy={"31333"}
          dark={theme.colors.dark}
          accessible={theme.colors.accessible}
        />
        <Text style={textColor}>CHỮ R Ở ĐÚNG VỊ TRÍ</Text>
      </View>

      <View>
        <GuessRow
          wordLength={5}
          guess={"VUONG"}
          accuracy={"33233"}
          dark={theme.colors.dark}
          accessible={theme.colors.accessible}
        />
        <Text style={textColor}>CHỮ O CÓ TRONG TỪ</Text>
      </View>

      <View>
        <GuessRow
          wordLength={5}
          guess={"guong"}
          accuracy={"33333"}
          dark={theme.colors.dark}
          accessible={theme.colors.accessible}
        />
        <Text style={textColor}>CHỮ G, U, O, N, G KHÔNG CÓ TRONG TỪ</Text>
      </View>
    </View>
  );
}

export default HelpScreen;
