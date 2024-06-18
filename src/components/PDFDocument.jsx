import { Page, Text, Document, StyleSheet, Image } from "@react-pdf/renderer";
import { useLoaderData } from "react-router-dom";
import { dateFormat } from "../helpers/dateFormat";
import LOGO from "../assets/logo.svg";
import TransportForm from "./TransportForm";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFDocument = ({ travelData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text className="text-base">
            {travelData.location}
          {/* <div className="FILE px-5">
           
            <Text>
              <h1 className="text-2xl uppercase font-bold text-center">
                {travelData.location}
              </h1>
            </Text>
            <p className="text-center text-xl">{dateFormat(travelData.date)}</p>
            <div className="COLUMNS">
              <div className="LEFT-COLUMN p-10">
                <div className="ACCOMODATION flex flex-col gap-1 mb-4">
                  <span className="uppercase font-bold underline">
                    Accomodation
                  </span>
                  <p>
                    Place:{" "}
                    <span className="ml-1">
                      {travelData.accomodation.place}
                    </span>
                  </p>
                  <p>
                    Reservation number:{" "}
                    <span className="ml-1">
                      {travelData.accomodation.reservationNumber}
                    </span>
                  </p>
                  <p>
                    Room:{" "}
                    <span className="ml-1">{travelData.accomodation.room}</span>
                  </p>
                  <p>
                    Check-in:{" "}
                    <span className="ml-1">
                      {travelData.accomodation.checkIn}
                    </span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="ml-1">
                      {travelData.accomodation.email}
                    </span>
                  </p>
                  <p>
                    Phone:{" "}
                    <span className="ml-1">
                      {travelData.accomodation.phone}
                    </span>
                  </p>
                </div>
                <div className="SCHEDULE flex flex-col gap-1">
                  <span className="uppercase font-bold underline">
                    Schedule
                  </span>
                  <ul className="list-disc ml-5">
                    {travelData.schedule.map((task) => {
                      return (
                        <li
                          key={task.id}
                          className={task.done ? "line-through" : ""}>
                          {task.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </Text>
      </Page>
    </Document>
  );
};

export default PDFDocument;
