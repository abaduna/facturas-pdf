import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import Logo from "./../assets/Img/Organiclog.jpg";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  sections: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
    flexGrow: 1,
    justifyContent:"space-evenly",
    height:50,
    
  },
  img:{
    width:50,
    heigth:50
  },
  colum1:{
    width:50,
    textAlign:"right",
    backgroundColor:"#000000"
  }
});
function Pdf() {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.sections}>
          <View style={styles.colum1} style="width: 50%, ;">
            <Text>Organic</Text>
          </View>
          <View style={styles.colum} style="width: 50%;">
            <Image src={Logo} style={styles.img} />
          </View>
          <View style={styles}></View>
        </View>
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            necessitatibus laudantium suscipit voluptas nostrum, molestiae
            possimus corporis voluptatibus expedita deserunt doloremque numquam
            ex, quae eligendi voluptate eaque. Repellat, voluptate quod?
          </Text>
        </View>
      </Page>
    </Document>
  );
}
export default Pdf;
