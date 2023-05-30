import Header from "../../common/Header";
import Section from "../../common/Section";
import SubHeader from "../../common/SubHeader";
import { StyledTable, TableCell, TableHeader, TableContainer } from "./styled";

const AuthorPage = () => (
  <>
    <Header title={"Coś o autorze 🤔"} />
    <Section
      title={<SubHeader title={"Ulubione kawałki autora 🎶"} isMajor={true} />}
      body={
        <TableContainer>
          <StyledTable>
            <tbody>
              <tr>
                <TableHeader>Wykonawca</TableHeader>
                <TableHeader>Tytuł</TableHeader>
                <TableHeader>Album</TableHeader>
              </tr>
              <tr>
                <TableHeader scope="col" rowSpan={3}>
                  The White Stripes
                </TableHeader>
                <TableCell>Blue Orchid</TableCell>
                <TableCell>Get Behind Me Satan</TableCell>
              </tr>
              <tr>
                <TableCell>Hotel Yorba</TableCell>
                <TableCell rowSpan={2}>White Blood Cells</TableCell>
              </tr>
              <tr>
                <TableCell>Fell In Love With a Girl</TableCell>
              </tr>
              <tr>
                <TableHeader rowSpan={2}>The Raconteurs</TableHeader>
                <TableCell>Salute Your Solution</TableCell>
                <TableCell rowSpan={2}>Consolers of the Lonely</TableCell>
              </tr>
              <tr>
                <TableCell>Carolina Drama</TableCell>
              </tr>
              <tr>
                <TableHeader rowSpan={3}>Two Door Cinema Club</TableHeader>
                <TableCell>Handshake</TableCell>
                <TableCell rowSpan={3}>Beacon</TableCell>
              </tr>
              <tr>
                <TableCell>Sun</TableCell>
              </tr>
              <tr>
                <TableCell>Next Year</TableCell>
              </tr>
              <tr>
                <TableHeader>Lordofon</TableHeader>
                <TableCell>Kobayashi</TableCell>
                <TableCell>Koło</TableCell>
              </tr>
            </tbody>
          </StyledTable>
        </TableContainer>
      }
    />
  </>
);

export default AuthorPage;
