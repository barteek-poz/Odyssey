import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  View,
  PDFViewer,
} from "@react-pdf/renderer";
import { useLoaderData } from "react-router-dom";
import { dateFormat } from "../helpers/dateFormat";
import LOGO from "../assets/logo.png";

const styles = StyleSheet.create({
  page: {
    fontSize: "12px",
    padding: "20px",
  },
  logo: {
    width: 100,
    height: 30,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    fontSize: "14px",
  },
  h1: {
    fontSize: "24px",
    textTransform: "uppercase",
    marginTop: "10px",
  },
  h2: {
    fontSize: "16px",
    textDecoration: "underline",
  },
  h3: {
    fontSize: "14px",
    paddingVertical: "4px",
  },
  columns: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    padding: "20px",
  },
  left: {
    width: "50%",
    flexGrow: 0,
    flexShrink: 1,
    marginLeft: "60px",
    gap: "6px",
  },
  right: {
    width: "50%",
    flexShrink: 1,
    
    marginLeft: "100px",
    gap: '6px'
  },
});

const PDFDocument = ({ travelData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={LOGO} style={styles.logo}></Image>
          <Text style={styles.h1}>{travelData.location}</Text>
          <Text style={styles.date}>{dateFormat(travelData.date)}</Text>
        </View>
        <View style={styles.columns}>
          <View style={styles.left}>
            <Text style={styles.h2}>Accomodation</Text>
            <Text>
              Place: {travelData.accomodation?.place || "..............."}
            </Text>
            <Text>
              Reservation number:{" "}
              {travelData.accomodation?.reservationNumber || "..............."}
            </Text>
            <Text>
              Check-in: {travelData.accomodation?.checkIn || "..............."}
            </Text>
            <Text>
              Room type: {travelData.accomodation?.room || "..............."}
            </Text>
            <Text>
              Email: {travelData.accomodation?.email || "..............."}
            </Text>
            <Text>
              Phone: {travelData.accomodation?.phone || "..............."}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.h2}>Transport</Text>
            <Text style={styles.h3}> -- To {travelData.location} -- </Text>
            <Text>
              Form of transport:{" "}
              {travelData.transport?.to.type || "..............."}
            </Text>
            <Text>
              Ticket number:{" "}
              {travelData.transport?.to.ticketNumber || "..............."}
            </Text>
            <Text>
              City of departure:{" "}
              {travelData.transport?.to.cityDeparture || "..............."}
            </Text>
            <Text>
              Time of departure:{" "}
              {travelData.transport?.to.timeDeparture || "..............."}
            </Text>
            <Text>
              Time of arrival:{" "}
              {travelData.transport?.to.timeArrival || "..............."}
            </Text>
            <Text style={styles.h3}>-- From {travelData.location}-- </Text>
            <Text>
              Form of transport:{" "}
              {travelData.transport?.from.type || "..............."}
            </Text>
            <Text>
              Ticket number:{" "}
              {travelData.transport?.from.ticketNumber || "..............."}
            </Text>
            <Text>
              City of arrival:{" "}
              {travelData.transport?.from.cityArrival || "..............."}
            </Text>
            <Text>
              Time of departure:{" "}
              {travelData.transport?.from.timeDeparture || "..............."}
            </Text>
            <Text>
              Time of arrival:{" "}
              {travelData.transport?.from.timeArrival || "..............."}
            </Text>
          </View>
        </View>

        <View style={styles.columns}>
          <View style={styles.left}>
            <Text style={styles.h2}>Schedule</Text>
            {travelData.schedule ? travelData.schedule.map((task) => {
              return <Text key={task.id}>{task.text}</Text>;
            }): <View>
                <Text>.............................</Text>
                <Text>.............................</Text>
                <Text>.............................</Text>
                </View>} 
          </View>
          <View style={styles.right}>
            <Text style={styles.h2}>Expenses</Text>
            {travelData.expenses.length > 0 ? travelData.expenses.map((expense) => {
              return <Text key={expense.id}>{expense.title}: {expense.price} € </Text>;
            }): <View>
                <Text>.............................</Text>
                <Text>.............................</Text>
                <Text>.............................</Text>
                </View>} 
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
