import React, {useState, useEffect} from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import EmployerService from "../services/employerService";
export default function EmployerList() {
    const [employers, setEmployers] = useState([]);

  useEffect(()=>{
      let employerService = new EmployerService()
      employerService.getEmployers().then(result=>setEmployers(result.data.data))
  })
    return (
        <div>
            <Header as="h3">
        <Icon name="affiliatetheme"/>
        <Header.Content>İşveren Listesi</Header.Content>
      </Header>
      <Table color="yellow" key="yellow">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Website Adresi</Table.HeaderCell>
            <Table.HeaderCell>Email Adresi</Table.HeaderCell>
            <Table.HeaderCell>Telefon No</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map(employer => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.websiteAdress}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
