  
import React, {useState, useEffect} from "react";
import { Table, Header, Icon} from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(()=>{
      let jobAdvertService = new JobAdvertService()
      jobAdvertService.getJobAdverts().then(result=>setJobAdverts(result.data.data))
  })
    return (
        <div>
                  <Header as="h3">
        <Icon name="affiliatetheme"/>
        <Header.Content>İş İlanı Listesi</Header.Content>
      </Header>
      <Table color="yellow" key="yellow">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan Adı</Table.HeaderCell>
            <Table.HeaderCell>İlan Detayı</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İlan Yayın Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map(jobAdvert => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobAdvert.detail}</Table.Cell>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
