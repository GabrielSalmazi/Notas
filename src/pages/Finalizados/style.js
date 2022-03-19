import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  area: {
    padding: 20
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btnAllNotes: {
    backgroundColor: "#137eff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row"
  },

  btnAddNotes: {
    backgroundColor: "#8b5edd",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row"
  },
  textBtnAllNotes: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 5
  },

  nota: {
    backgroundColor: "#e1e1e1",
    width: "100%",

    borderRadius: 20,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  headerNota: {
    marginTop: 20,
  },
  corpoNota: {
    paddingHorizontal: 20,
    paddingTop: 15,
    marginLeft: 10,
  },

  footerNota: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    padding: 20
  },

  tituloNota: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

  dataNota: {
    color: "black",
    fontSize: 14,
  },

  textNota: {
    color: "black"
  },

  scrollView: {
    marginTop: 10,
    height: "60%",
  },

  modal: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
    height: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-between"
  },

  input: {

    borderLeftColor: "#137eff",
    borderLeftWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  dia:{
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 3
  }
});

export default styles