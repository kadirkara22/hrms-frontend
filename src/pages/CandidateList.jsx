  
import React, {useState, useEffect} from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import CandidateService from "../services/candidateService";
export default function CandidateList() {

    const [candidates, setCandidates] = useState([]);

    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=>setCandidates(result.data.data))
    })
    return (
        <div>
                  <Header as="h3">
        <Icon name="affiliatetheme"/>
        <Header.Content>Aday Listesi</Header.Content>
      </Header>
      <Table color="yellow" key="yellow">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Email Adresi</Table.HeaderCell>
            <Table.HeaderCell>Tc Kimlik No</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map(candidate => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.nationality}</Table.Cell>
              <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
